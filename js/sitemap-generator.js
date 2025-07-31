document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const sitemapOutput = document.getElementById('sitemapOutput');
    const baseUrlInput = document.getElementById('baseUrl');
    const urlsInput = document.getElementById('urls');

    function generateSitemap() {
        const baseUrl = baseUrlInput.value.trim();
        if (!baseUrl) {
            sitemapOutput.value = 'Please enter a base URL.';
            return;
        }

        const today = new Date().toISOString().split('T')[0];
        let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        // Add base URL
        sitemapContent += '  <url>\n';
        sitemapContent += `    <loc>${baseUrl}</loc>\n`;
        sitemapContent += `    <lastmod>${today}</lastmod>\n`;
        sitemapContent += '    <priority>1.00</priority>\n';
        sitemapContent += '  </url>\n';

        // Add additional URLs
        const urls = urlsInput.value.split('\n').filter(url => url.trim() !== '');
        urls.forEach(url => {
            const fullUrl = new URL(url.trim(), baseUrl).href;
            sitemapContent += '  <url>\n';
            sitemapContent += `    <loc>${fullUrl}</loc>\n`;
            sitemapContent += `    <lastmod>${today}</lastmod>\n`;
            sitemapContent += '    <priority>0.80</priority>\n';
            sitemapContent += '  </url>\n';
        });

        sitemapContent += '</urlset>';
        sitemapOutput.value = sitemapContent;
    }

    generateBtn.addEventListener('click', generateSitemap);
});
