// Ініціалізація Masonry після завантаження всіх зображень
document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.portfolio');
    var msnry = new Masonry(grid, {
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 10
    });
});
