document.addEventListener("DOMContentLoaded", function() {
   

    // Додаємо функціонал для відкриття іншого зображення при натисканні
    var items = document.querySelectorAll('.grid-item img');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            // Беремо шлях до зображення з атрибута data-large
            var imgSrc = this.getAttribute('data-large');
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
