document.addEventListener('DOMContentLoaded', function () {
    function filterArticles() {
        var checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
        var articles = document.querySelectorAll('.grid-item[data-category]');

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var selectedCategories = Array.from(checkboxes)
                    .filter(c => c.checked)
                    .map(c => c.value);

                articles.forEach(function (article) {
                    var articleCategory = article.getAttribute('data-category');
                    article.style.display = selectedCategories.includes(articleCategory) ? 'block' : 'none';
                });
            });
        });
    }

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
            var contents = document.querySelectorAll(".dropdown-content");
            contents.forEach(function (content) {
                content.classList.remove('show');
            });
        }
    });

    filterArticles();
});
