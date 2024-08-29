document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.grid');
    
    imagesLoaded(grid, function() {
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: 10
        });
    });
});
