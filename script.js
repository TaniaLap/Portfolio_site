// Відкрити модальне вікно
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll('.grid-item img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Закрити модальне вікно
const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закриття при натисканні за межами зображення
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
