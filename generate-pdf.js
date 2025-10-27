const puppeteer = require('./node_modules/puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Navigate to the local HTML file
    const htmlPath = `file://${path.resolve(__dirname, 'index.html')}`;
    console.log(`Loading: ${htmlPath}`);
    
    await page.goto(htmlPath, {
        waitUntil: 'networkidle2'
    });
    
    // Wait a bit more for fonts to load
    await page.waitForTimeout(2000);
    
    // Generate PDF with proper settings for resume
    const pdf = await page.pdf({
        path: 'niels-uitterdijk-resume.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        },
        preferCSSPageSize: true,
        displayHeaderFooter: false
    });
    
    console.log('PDF generated successfully: niels-uitterdijk-resume.pdf');
    
    await browser.close();
}

generatePDF().catch(console.error);