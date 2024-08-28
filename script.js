// Отримуємо модальне вікно та елементи
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Всі зображення сітки
const images = document.querySelectorAll(".grid-item img");

// Додаємо подію кліку для кожного зображення
images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Кнопка закриття модального вікна
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Закриття модального вікна при кліку за межами зображення
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
