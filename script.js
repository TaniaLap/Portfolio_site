document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 10 // Відступ між елементами
    });
});
