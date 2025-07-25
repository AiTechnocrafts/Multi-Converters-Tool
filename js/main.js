document.addEventListener('DOMContentLoaded', function() {
    const toolSearch = document.getElementById('toolSearch');
    const toolCards = document.querySelectorAll('.card'); // Assuming each tool is within a .card element

    if (toolSearch) {
        toolSearch.addEventListener('keyup', function() {
            const searchTerm = toolSearch.value.toLowerCase();

            toolCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const text = card.querySelector('.card-text').textContent.toLowerCase();

                if (title.includes(searchTerm) || text.includes(searchTerm)) {
                    card.closest('.col').style.display = ''; // Show the card's parent column
                } else {
                    card.closest('.col').style.display = 'none'; // Hide the card's parent column
                }
            });
        });
    }
});
