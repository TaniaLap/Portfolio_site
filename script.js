document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("index-page")) {
        var grid = document.querySelector(".grid");
        if (grid) {
            imagesLoaded(grid, function () {
                var msnry = new Masonry(grid, {
                    itemSelector: ".grid-item",
                    percentPosition: true,
                    gutter: 10
                });
            });
        }
    }

    // Цей блок працює для всіх сторінок (і index, і uxui)
    var items = document.querySelectorAll('.grid-item img');
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            var imgSrc = this.getAttribute('data-large');
            if (!imgSrc) return;
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
            modal.addEventListener('click', function () {
                document.body.removeChild(modal);
            });
            document.body.appendChild(modal);
        });
    });
});




// Функція для зміни тексту логотипу на мобільних пристроях
function updateLogoText() {
    // Отримати ширину екрану
    const screenWidth = window.innerWidth;

    // Отримати елемент логотипу
    const logo = document.querySelector('.logo');

    // Змінюємо текст логотипу на основі ширини екрану
    if (screenWidth <= 768) { // Для мобільних пристроїв (менше або рівно 768px)
        logo.textContent = 'TETI VAIY';
    } else { // Для великих екранів
        logo.textContent = 'TETIANA VAITSEKHOVYCH';
    }
}

// Викликаємо функцію при завантаженні сторінки
window.addEventListener('load', updateLogoText);

// Додаємо обробник подій для зміни розміру вікна
window.addEventListener('resize', updateLogoText);
