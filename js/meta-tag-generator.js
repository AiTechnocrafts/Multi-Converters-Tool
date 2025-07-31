document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const metaOutput = document.getElementById('metaOutput');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const keywordsInput = document.getElementById('keywords');
    const authorInput = document.getElementById('author');
    const charsetSelect = document.getElementById('charset');

    function generateMetaTags() {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const keywords = keywordsInput.value.trim();
        const author = authorInput.value.trim();
        const charset = charsetSelect.value;

        let metaTags = `<meta charset="${charset}">\n`;
        metaTags += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
        
        if (title) {
            metaTags += `<title>${title}</title>\n`;
        }
        if (description) {
            metaTags += `<meta name="description" content="${description}">\n`;
        }
        if (keywords) {
            metaTags += `<meta name="keywords" content="${keywords}">\n`;
        }
        if (author) {
            metaTags += `<meta name="author" content="${author}">\n`;
        }

        metaOutput.value = metaTags;
    }

    generateBtn.addEventListener('click', generateMetaTags);
});
