/**
 * VERHOST Digital Works Showcase — Playwright Automated Responsive Design Audit
 * 
 * Tests all 21 website projects across the full 15-viewport responsive matrix:
 * 1. Small Mobile: 320x640 (iPhone SE 1st gen), 360x800 (Galaxy S20)
 * 2. Mobile: 375x812 (iPhone X/11/12 mini), 390x844 (iPhone 13/14), 414x896 (iPhone XR/11), 430x932 (iPhone 14/15 Pro Max)
 * 3. Small Tablet: 600x960 (7" Android tablet)
 * 4. Tablet Portrait: 768x1024 (iPad Mini / 9.7")
 * 5. Tablet Landscape: 1024x768 (iPad Mini landscape)
 * 6. Laptop: 1280x720 (720p Laptop), 1366x768 (Standard Budget Laptop)
 * 7. Desktop: 1440x900 (MacBook Pro 15"), 1600x900 (Standard Desktop)
 * 8. Large Desktop: 1920x1080 (1080p FHD Monitor)
 * 9. Ultra-Wide: 2560x1440 (2K QHD Display)
 */

import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: 'Small Mobile 320', width: 320, height: 640 },
  { name: 'Small Mobile 360', width: 360, height: 800 },
  { name: 'Mobile 375', width: 375, height: 812 },
  { name: 'Mobile 390', width: 390, height: 844 },
  { name: 'Mobile 414', width: 414, height: 896 },
  { name: 'Mobile 430', width: 430, height: 932 },
  { name: 'Small Tablet 600', width: 600, height: 960 },
  { name: 'Tablet Portrait 768', width: 768, height: 1024 },
  { name: 'Tablet Landscape 1024', width: 1024, height: 768 },
  { name: 'Laptop 1280', width: 1280, height: 720 },
  { name: 'Laptop 1366', width: 1366, height: 768 },
  { name: 'Desktop 1440', width: 1440, height: 900 },
  { name: 'Desktop 1600', width: 1600, height: 900 },
  { name: 'Large Desktop 1920', width: 1920, height: 1080 },
  { name: 'Ultra-Wide 2560', width: 2560, height: 1440 },
];

const PROJECTS = [
  { id: 'main-showcase', name: 'VERHOST Core Showcase', path: '/' },
  { id: 'lumora-living', name: 'Lumora Living', path: '/?view=lumora-living' },
  { id: 'chronix', name: 'Chronix', path: '/?view=chronix' },
  { id: 'glowe', name: 'Glowé', path: '/?view=glowe' },
  { id: 'atelier', name: 'Atelier Studio', path: '/?view=atelier' },
  { id: 'verdant-systems', name: 'Verdant Systems', path: '/?view=verdant-systems' },
  { id: 'nexora', name: 'Nexora', path: '/projects/nexora/index.html' },
  { id: 'solvix', name: 'Solvix', path: '/projects/solvix/index.html' },
  { id: 'synthora', name: 'Synthora', path: '/projects/synthora/index.html' },
  { id: 'creativio', name: 'Creativio', path: '/projects/creativio/index.html' },
  { id: 'devflow', name: 'Devflow', path: '/projects/devflow/index.html' },
  { id: 'spacen', name: 'Spacen', path: '/projects/spacen/index.html' },
  { id: 'nordic-timber', name: 'Nordic Timber', path: '/projects/nordic-timber/index.html' },
  { id: 'marcus-vance', name: 'Marcus Vance', path: '/projects/marcus-vance/index.html' },
  { id: 'archora', name: 'Archora Studio', path: '/projects/archora/index.html' },
  { id: 'listit', name: 'ListIt Archive', path: '/projects/listit/index.html' },
  { id: 'prismatic', name: 'Prismatic', path: '/projects/prismatic/index.html' },
  { id: 'offgrid', name: 'Offgrid', path: '/projects/offgrid/index.html' },
  { id: 'museum01', name: 'Museum 01', path: '/projects/museum01/index.html' },
  { id: 'turf', name: 'PrimeTurf Arena', path: '/demos/turf/index.html' },
  { id: 'sonora', name: 'Sonora', path: '/projects/sonora/index.html' },
];

test.describe('VERHOST Responsive Design Audit Suite', () => {
  for (const project of PROJECTS) {
    test.describe(`Project: ${project.name}`, () => {
      for (const vp of VIEWPORTS) {
        test(`Audit on ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
          await page.setViewportSize({ width: vp.width, height: vp.height });
          await page.goto(project.path, { waitUntil: 'domcontentloaded' });
          await page.waitForTimeout(400);

          // 1. Verify no unintended horizontal scrollbar overflow
          const horizontalOverflow = await page.evaluate(() => {
            const docWidth = document.documentElement.scrollWidth;
            const bodyWidth = document.body.scrollWidth;
            const viewportWidth = window.innerWidth;
            return {
              hasOverflow: docWidth > viewportWidth + 1 || bodyWidth > viewportWidth + 1,
              docWidth,
              bodyWidth,
              viewportWidth,
            };
          });

          expect(
            horizontalOverflow.hasOverflow,
            `Horizontal overflow detected on ${project.name} at ${vp.width}px! Document width: ${horizontalOverflow.docWidth}px, Viewport: ${horizontalOverflow.viewportWidth}px`
          ).toBe(false);

          // 2. Verify all images are bounded within viewport
          const overflowingImages = await page.evaluate((vpWidth) => {
            const imgs = Array.from(document.querySelectorAll('img, svg'));
            const badImgs = [];
            for (const img of imgs) {
              const rect = img.getBoundingClientRect();
              if (rect.width > vpWidth + 2) {
                badImgs.push({ src: img.src || img.tagName, width: rect.width });
              }
            }
            return badImgs;
          }, vp.width);

          expect(
            overflowingImages.length,
            `Found ${overflowingImages.length} overflowing images on ${project.name} at ${vp.width}px`
          ).toBe(0);

          // 3. Verify text and container bounds
          const textOverflow = await page.evaluate((vpWidth) => {
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, .hero-monumental-heading'));
            const badHeadings = [];
            for (const h of headings) {
              const rect = h.getBoundingClientRect();
              if (rect.width > vpWidth + 2) {
                badHeadings.push({ text: h.innerText.slice(0, 30), width: rect.width });
              }
            }
            return badHeadings;
          }, vp.width);

          expect(
            textOverflow.length,
            `Found ${textOverflow.length} overflowing headings on ${project.name} at ${vp.width}px`
          ).toBe(0);
        });
      }
    });
  }
});

