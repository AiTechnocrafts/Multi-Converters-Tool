document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const robotsOutput = document.getElementById('robotsOutput');
    const sitemapUrl = document.getElementById('sitemapUrl');
    const restrictedDirs = document.getElementById('restrictedDirs');

    function generateRobotsTxt() {
        let content = "User-agent: *\n";
        
        const defaultAccess = document.querySelector('input[name="defaultAccess"]:checked').value;
        if (defaultAccess === 'allow') {
            content += "Disallow:\n";
        } else {
            content += "Disallow: /\n";
        }

        const dirs = restrictedDirs.value.split('\n').filter(dir => dir.trim() !== '');
        dirs.forEach(dir => {
            content += `Disallow: ${dir.trim()}\n`;
        });

        if (sitemapUrl.value.trim() !== '') {
            content += `\nSitemap: ${sitemapUrl.value.trim()}\n`;
        }

        robotsOutput.value = content;
    }

    generateBtn.addEventListener('click', generateRobotsTxt);

    // Initial generation
    generateRobotsTxt();
});
