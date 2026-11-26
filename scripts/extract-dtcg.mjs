#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const url = process.argv[2];
const outPath = process.argv[3] || './extracted.dtcg.json';

if (!url) {
  console.error('Usage: node extract-dtcg.mjs <https://target-site.com> [output.dtcg.json]');
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(1200);

  const audit = await page.evaluate(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const bodyStyle = getComputedStyle(document.body);
    const h1 = document.querySelector('h1');
    const h1Style = h1 ? getComputedStyle(h1) : null;

    // Collect CSS custom properties from stylesheets
    const cssVars = {};
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (rule.selectorText === ':root' && rule.style) {
            for (const prop of Array.from(rule.style)) {
              if (prop.startsWith('--')) {
                cssVars[prop] = rule.style.getPropertyValue(prop).trim();
              }
            }
          }
        }
      } catch {
        // Cross-origin stylesheet skipped honestly
      }
    }

    // Collect top visible colors across key elements
    const colorSet = new Set();
    const els = Array.from(document.querySelectorAll('body, header, main, section, h1, h2, p, a, button')).slice(0, 120);
    for (const el of els) {
      const cs = getComputedStyle(el);
      if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') colorSet.add(cs.backgroundColor);
      if (cs.color) colorSet.add(cs.color);
    }

    // Fingerprint motion & 3D stack
    const scripts = Array.from(document.scripts).map((s) => s.src || '').filter(Boolean);
    const hasCanvas = document.querySelectorAll('canvas').length > 0;
    const detectedStack = {
      gsap: Boolean(window.gsap) || scripts.some((s) => /gsap/i.test(s)),
      lenis: Boolean(window.Lenis) || document.documentElement.classList.contains('lenis'),
      threejs: Boolean(window.THREE) || scripts.some((s) => /three/i.test(s)),
      rive: scripts.some((s) => /rive/i.test(s)),
      canvasElements: document.querySelectorAll('canvas').length,
      svgElements: document.querySelectorAll('svg').length,
      webglOrWebgpuLikely: hasCanvas,
    };

    // Map top-level section layout rhythm
    const sections = Array.from(document.querySelectorAll('header, main > section, main > div, footer'))
      .slice(0, 15)
      .map((el, idx) => {
        const rect = el.getBoundingClientRect();
        return {
          index: idx + 1,
          tag: el.tagName.toLowerCase(),
          id: el.id || null,
          heightPx: Math.round(rect.height),
          viewportRatio: Number((rect.height / window.innerHeight).toFixed(2)),
        };
      })
      .filter((s) => s.heightPx > 40);

    return {
      title: document.title,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      typography: {
        bodyFont: bodyStyle.fontFamily,
        bodySize: bodyStyle.fontSize,
        h1Font: h1Style?.fontFamily || null,
        h1Size: h1Style?.fontSize || null,
      },
      observedColors: Array.from(colorSet).slice(0, 16),
      rootCssVars: cssVars,
      detectedStack,
      sections,
    };
  });

  // Format into W3C DTCG 2025.10 compatible JSON
  const dtcg = {
    $schema: 'https://tr.designtokens.org/format/',
    $extensions: {
      'com.world-class-prompt-skills.audit': {
        sourceUrl: url,
        extractedAt: new Date().toISOString(),
        detectedStack: audit.detectedStack,
        sections: audit.sections,
        note: 'Observed directly from live DOM/CSS. Minified WebGL shaders and behind-auth states require manual inspection.',
      },
    },
    color: Object.fromEntries(
      audit.observedColors.map((val, i) => [
        `observed-${i + 1}`,
        { $type: 'color', $value: val },
      ])
    ),
    typography: {
      body: {
        $type: 'typography',
        $value: {
          fontFamily: audit.typography.bodyFont,
          fontSize: audit.typography.bodySize,
        },
      },
      ...(audit.typography.h1Font
        ? {
            displayH1: {
              $type: 'typography',
              $value: {
                fontFamily: audit.typography.h1Font,
                fontSize: audit.typography.h1Size,
              },
            },
          }
        : {}),
    },
    cssCustomProperties: audit.rootCssVars,
  };

  await fs.writeFile(outPath, JSON.stringify(dtcg, null, 2), 'utf8');
  console.log(`Extracted W3C DTCG 2025.10 tokens + motion audit to ${outPath}`);
} finally {
  await browser.close();
}
