document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content into a placeholder
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => {
                console.error(`Error loading ${url}:`, error);
            });
    }

    // Load header and footer
    loadHTML('/multi-tools-website/components/header.html', 'header-placeholder');
    loadHTML('/multi-tools-website/components/footer.html', 'footer-placeholder');
});
