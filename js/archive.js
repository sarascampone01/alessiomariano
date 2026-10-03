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

    lightboxImage.src = photos[current].src;

}


/* =========================
   FOTO SUCCESSIVA
   ========================= */

next.addEventListener("click", function () {

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    openPhoto();

});


/* =========================
   FOTO PRECEDENTE
   ========================= */

prev.addEventListener("click", function () {

    current--;

    if (current < 0) {
        current = photos.length - 1;
    }

    openPhoto();

});


/* =========================
   CHIUDI
   ========================= */

close.addEventListener("click", function () {

    lightbox.style.display = "none";

});


/* =========================
   TASTIERA
   ========================= */

document.addEventListener("keydown", function (e) {

    if (lightbox.style.display !== "flex") {
        return;
    }

    if (e.key === "ArrowRight") {
        next.click();
    }

    if (e.key === "ArrowLeft") {
        prev.click();
    }

    if (e.key === "Escape") {
        close.click();
    }

});