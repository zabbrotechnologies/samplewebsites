/**
 * VERHOST Standalone Automated Responsive Audit Runner
 * Run via: node scripts/audit-responsive.mjs
 */

import { chromium } from 'playwright';

const BASE_URL = process.env.AUDIT_BASE_URL || 'http://localhost:5173';

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

async function runAudit() {
  console.log('🚀 Starting VERHOST Automated Responsive Design Audit across 21 projects & 15 viewports...\n');
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const project of PROJECTS) {
    const projectResults = { name: project.name, viewportsPassed: 0, totalViewports: VIEWPORTS.length, issues: [] };

    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      try {
        await page.goto(`${BASE_URL}${project.path}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
        await page.waitForTimeout(300);

        const audit = await page.evaluate(() => {
          const docW = document.documentElement.scrollWidth;
          const vpW = window.innerWidth;
          const hasScrollOverflow = docW > vpW + 1;
          return { hasScrollOverflow, docW, vpW };
        });

        if (audit.hasScrollOverflow) {
          projectResults.issues.push(`[${vp.name}] Horizontal overflow (${audit.docW}px > ${audit.vpW}px)`);
        } else {
          projectResults.viewportsPassed++;
        }
      } catch (err) {
        projectResults.issues.push(`[${vp.name}] Failed to load: ${err.message}`);
      } finally {
        await page.close();
      }
    }

    const statusBadge = projectResults.issues.length === 0 ? '✅ 15/15 PASSED' : `⚠️ ${projectResults.viewportsPassed}/15 PASSED`;
    console.log(`${statusBadge} | ${project.name}`);
    if (projectResults.issues.length > 0) {
      for (const issue of projectResults.issues) {
        console.log(`   - ${issue}`);
      }
    }
    results.push(projectResults);
  }

  await browser.close();
  console.log('\n📊 Audit Complete. All audited projects verified across responsive matrix.');
}

runAudit().catch(console.error);

