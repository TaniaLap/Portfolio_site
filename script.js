document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.grid');
    
    imagesLoaded(grid, function() {
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: 10
        });
    });

    // Додаємо функціонал для відкриття зображення у великому розмірі
    var items = document.querySelectorAll('.grid-item img');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var imgSrc = this.src;
            var modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.cursor = 'pointer';
            modal.innerHTML = '<img src="' + imgSrc + '" style="max-width: 90%; max-height: 90%; border-radius: 8px;">';

            // Закриття модального вікна при натисканні
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });

            document.body.appendChild(modal);
        });
    });
});
