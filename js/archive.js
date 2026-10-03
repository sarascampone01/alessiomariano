const photos = document.querySelectorAll(".archive-photo");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const next = document.getElementById("nextPhoto");
const prev = document.getElementById("prevPhoto");
const close = document.getElementById("close");

let current = 0;


/* =========================
   APERTURA FOTO
   ========================= */

photos.forEach((photo, index) => {

    photo.addEventListener("click", function () {

        current = index;
        openPhoto();

    });

});


function openPhoto() {

    lightbox.style.display = "flex";
    lightbox.classList.add("is-open");

    lightboxImage.src = photos[current].src;

}


/* =========================
   CHIUDI LIGHTBOX
   ========================= */

function closeLightbox() {

    lightbox.style.display = "none";
    lightbox.classList.remove("is-open");

}


/* =========================
   FOTO SUCCESSIVA
   ========================= */

next.addEventListener("click", function (e) {

    e.preventDefault();

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    openPhoto();

});


/* =========================
   FOTO PRECEDENTE
   ========================= */

prev.addEventListener("click", function (e) {

    e.preventDefault();

    current--;

    if (current < 0) {
        current = photos.length - 1;
    }

    openPhoto();

});


/* =========================
   CHIUDI CON X
   ========================= */

close.addEventListener("click", function (e) {

    e.preventDefault();

    closeLightbox();

});


/* =========================
   HOME
   =========================
   
   Se il lightbox è aperto:
   HOME chiude il lightbox e
   resta nella Photo Archive.

   Se il lightbox è chiuso:
   HOME funziona normalmente
   e porta al portfolio.
*/

document.addEventListener("click", function (e) {

    const home = e.target.closest(".home");

    if (!home) {
        return;
    }

    if (lightbox.classList.contains("is-open")) {

        e.preventDefault();
        e.stopPropagation();

        closeLightbox();

    }

}, true);


/* =========================
   TASTIERA
   ========================= */

document.addEventListener("keydown", function (e) {

    if (!lightbox.classList.contains("is-open")) {
        return;
    }

    if (e.key === "ArrowRight") {

        e.preventDefault();
        next.click();

    }

    if (e.key === "ArrowLeft") {

        e.preventDefault();
        prev.click();

    }

    if (e.key === "Escape") {

        e.preventDefault();
        closeLightbox();

    }

});