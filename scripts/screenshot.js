const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureScreenshots() {
  const outputDir = path.join(__dirname, '../screenshots_out');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  console.log('Taking full page screenshot...');
  await page.screenshot({
    path: path.join(outputDir, 'full-page.png'),
    fullPage: true,
  });

  const sections = [
    { id: '#home', name: '01-hero' },
    { id: '#why-aicceler8', name: '02-why-aicceler8' },
    { id: '#how-we-transform', name: '03-how-we-transform' },
    { id: '#who-we-partner-with', name: '04-who-we-partner-with' },
    { id: '#hows-aicceler8-better', name: '05-hows-aicceler8-better' },
    { id: '#our-approach', name: '06-our-approach' },
    { id: '#contact', name: '07-contact' },
  ];

  for (const sec of sections) {
    const el = await page.$(sec.id);
    if (el) {
      console.log(`Capturing section ${sec.name}...`);
      await el.screenshot({
        path: path.join(outputDir, `${sec.name}.png`),
      });
    }
  }

  console.log('Screenshots saved to:', outputDir);
  await browser.close();
}

captureScreenshots().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
