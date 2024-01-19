document.addEventListener('DOMContentLoaded', function () {
    // Functie om items te filteren op basis van geselecteerde categorieën
    function filterArticles() {
        // Alle checkboxes verzamelen in het menu
        var checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
        // Alle artikelen met een 'data-category'-attribuut verzamelen in het menu
        var articles = document.querySelectorAll('.grid-item[data-category]');

        checkboxes.forEach(function (checkbox) {
            // Voeg een eventlistener toe aan elke checkbox om te checken of er iets is veranderd
            checkbox.addEventListener('change', function () {
                // Verzamel geselecteerde categorieën uit de checkboxes
                var selectedCategories = Array.from(checkboxes)
                    .filter(c => c.checked)
                    .map(c => c.value);

                // Verberg of toon artikelen op basis van geselecteerde categorieën
                articles.forEach(function (article) {
                    var articleCategory = article.getAttribute('data-category');
                    article.style.display = selectedCategories.includes(articleCategory) ? 'block' : 'none';
                });
            });
        });
    }

    // Sluit het dropdown-menu als er buiten wordt geklikt
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
            // Verberg alle dropdown-content elementen
            var contents = document.querySelectorAll(".dropdown-content");
            contents.forEach(function (content) {
                content.classList.remove('show');
            });
        }
    });

    // Roep de filterArticles functie aan om de portfolio items te filteren op categorie.
    filterArticles();
});
