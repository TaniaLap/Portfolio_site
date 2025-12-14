document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MASONRY — тільки index-page
     ========================= */
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

        imagesLoaded(grid).on("progress", function () {
          msnry.layout();
        });

        grid.querySelectorAll("img[loading='lazy']").forEach(function (img) {
          img.addEventListener("load", function () {
            msnry.layout();
          }, { once: true });
        });

        grid.querySelectorAll(".grid-item video").forEach(function (v) {
          ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"].forEach(function (ev) {
            v.addEventListener(ev, function () {
              msnry.layout();
            }, { once: true });
          });
        });

        window.addEventListener("pageshow", function (e) {
          if (e.persisted) msnry.layout();
        });
      });
    }
  }

  /* =========================
     СТАРА МОДАЛКА ДЛЯ IMG
     (НЕ чіпає long-case)
     ========================= */
  document.querySelectorAll(".grid-item img").forEach(function (item) {
    item.addEventListener("click", function () {

      // ❗ ВАЖЛИВО: long-case пропускаємо
      if (this.classList.contains("long-case")) return;

      var imgSrc = this.getAttribute("data-large");
      if (!imgSrc) return;

      var modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.inset = "0";
      modal.style.background = "rgba(0,0,0,0.8)";
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modal.style.cursor = "pointer";
      modal.style.zIndex = "9999";

      modal.innerHTML =
        '<img src="' + imgSrc + '" style="max-width:90%; max-height:90%; border-radius:8px;">';

      modal.addEventListener("click", function () {
        document.body.removeChild(modal);
      });

      document.body.appendChild(modal);
    });
  });

  /* =========================
     FULLSCREEN ДЛЯ LONG CASE
     ========================= */
  document.querySelectorAll(".long-case").forEach(function (img) {
    img.addEventListener("click", function () {

      var src = this.dataset.large;
      if (!src) return;

      var modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.inset = "0";
      modal.style.background = "rgba(0,0,0,0.95)";
      modal.style.zIndex = "9999";
      modal.style.overflowY = "auto";
      modal.style.cursor = "zoom-out";

      modal.innerHTML = `
        <img
          src="${src}"
          style="
            display:block;
            width:100%;
            max-width:1400px;
            margin:40px auto;
            height:auto;
          "
        />
      `;

      modal.addEventListener("click", function () {
        document.body.removeChild(modal);
      });

      document.body.appendChild(modal);
    });
  });

  /* =========================
     ВІДЕО (без змін)
     ========================= */
  document.querySelectorAll(".open-video").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();

      const src = this.dataset.video;
      if (!src) return;

      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.inset = "0";
      modal.style.background = "rgba(0,0,0,0.8)";
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modal.style.zIndex = "9999";
      modal.style.cursor = "pointer";

      modal.innerHTML = `
        <video
          src="${src}"
          controls
          autoplay
          playsinline
          style="max-width:90%; max-height:90%; border-radius:16px;"
        ></video>
      `;

      modal.addEventListener("click", function () {
        document.body.removeChild(modal);
      });

      document.body.appendChild(modal);
    });
  });
});

/* =========================
   LOGO — без змін
   ========================= */
function updateLogoText() {
  const logo = document.querySelector(".logo");
  if (!logo) return;
  const screenWidth = window.innerWidth;
  logo.textContent = (screenWidth <= 768)
    ? "TETI VAIY"
    : "TETIANA VAITSEKHOVYCH";
}

window.addEventListener("load", updateLogoText);
window.addEventListener("resize", updateLogoText);


/* =========================
   MODAL FOR VIDEOS (index-page)
   ========================= */
document.querySelectorAll('.grid-item video').forEach(function (video) {
  video.addEventListener('click', function () {

    var src = this.getAttribute('data-large');
    if (!src) return;

    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.background = 'rgba(0,0,0,0.85)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.cursor = 'pointer';
    modal.style.zIndex = '9999';

    modal.innerHTML = `
      <video
        src="${src}"
        controls
        
        playsinline
        style="max-width:90%; max-height:90%; border-radius:12px;"
      ></video>
    `;

    modal.addEventListener('click', function () {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  });
});


/* =========================
   Для відкриття проєкту через кнопку  в Graphic Design
   ========================= */
document.querySelectorAll(".open-image").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const src = this.dataset.image;
    if (!src) return;

    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.95)";
    modal.style.zIndex = "9999";
    modal.style.overflowY = "auto";
    modal.style.cursor = "zoom-out";

    modal.innerHTML = `
      <img
        src="${src}"
        style="
          display:block;
          width:100%;
          max-width:1400px;
          margin:40px auto;
          height:auto;
        "
      />
    `;

    modal.addEventListener("click", function () {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  });
});
