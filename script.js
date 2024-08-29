document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.grid');
    
    // Перевірка, чи всі зображення завантажились
    imagesLoaded(grid, function() {
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            gutter: 10
        });
    });
});
