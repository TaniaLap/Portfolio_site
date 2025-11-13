document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains("index-page")) {
    var grid = document.querySelector(".grid");
    if (grid) {
      imagesLoaded(grid, function () {
        var msnry = new Masonry(grid, {
          itemSelector: ".grid-item",
          percentPosition: true,
          gutter: 10,
          transitionDuration: 0
        });

        // 1) Перекладати сітку у міру завантаження КАРТИНОК (у т.ч. lazy)
        imagesLoaded(grid).on('progress', function () { msnry.layout(); });
        grid.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
          img.addEventListener('load', function () { msnry.layout(); }, { once: true });
        });

        // 2) Перекладати, коли ВІДЕО дає розміри
        grid.querySelectorAll('.grid-item video').forEach(function (v) {
          ['loadedmetadata','loadeddata','canplay','canplaythrough'].forEach(function (ev) {
            v.addEventListener(ev, function () { msnry.layout(); }, { once: true });
          });
        });

        // 3) При поверненні зі сторінки з bfcache (Safari)
        window.addEventListener('pageshow', function (e) {
          if (e.persisted) msnry.layout();
        });
      });
    }
  }

  // Модалка (для зображень, як і було)
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
      modal.addEventListener('click', function () { document.body.removeChild(modal); });
      document.body.appendChild(modal);
    });
  });
});

// Функція логотипа (додав перевірку на існування елемента)
function updateLogoText() {
  const logo = document.querySelector('.logo');
  if (!logo) return;
  const screenWidth = window.innerWidth;
  logo.textContent = (screenWidth <= 768) ? 'TETI VAIY' : 'TETIANA VAITSEKHOVYCH';
}
window.addEventListener('load', updateLogoText);
window.addEventListener('resize', updateLogoText);
