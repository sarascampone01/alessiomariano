const videos = [

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video1.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video2.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video3.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video4.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video5.mp4"

];


const lightboxVideos = [

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto:good/f_mp4/br_5000k/w_1440/video1.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto:good/f_mp4/br_5000k/w_1440/video2.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto:good/f_mp4/br_5000k/w_1440/video3.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto:good/f_mp4/br_5000k/w_1440/video4.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto:good/f_mp4/br_5000k/w_1440/video5.mp4"

];


const thumbs = document.querySelectorAll(".archive-video");
/* =========================
   AUTOPLAY PREVIEW
   ========================= */

const previewVideos = document.querySelectorAll(".archive-video video");

previewVideos.forEach((preview) => {

    preview.muted = true;
    preview.autoplay = true;
    preview.loop = true;
    preview.playsInline = true;

    preview.play().catch(() => {

        preview.addEventListener("loadeddata", () => {

            preview.play().catch(() => {});

        }, { once: true });

    });

});

const lightbox = document.getElementById("videoLightbox");

const video = document.getElementById("lightboxVideo");

const nextButton = document.getElementById("nextVideo");

const prevButton = document.getElementById("prevVideo");

const closeButton = document.getElementById("closeVideo");

const archiveBack = document.getElementById("archiveBack");


let current = 0;


/* =========================
   APERTURA VIDEO
   ========================= */

thumbs.forEach((item, index) => {

    item.addEventListener("click", () => {

        current = index;

        openVideo();

    });

});


/* =========================
   APERTURA LIGHTBOX
   ========================= */

function openVideo() {

    lightbox.style.display = "flex";

    video.pause();

    video.currentTime = 0;

    video.src = lightboxVideos[current];

    video.load();

    video.play().catch(error => {

        console.log("Errore riproduzione:", error);

    });

}


/* =========================
   VIDEO SUCCESSIVO
   ========================= */

nextButton.addEventListener("click", () => {

    current++;

    if (current >= lightboxVideos.length) {

        current = 0;

    }

    openVideo();

});


/* =========================
   VIDEO PRECEDENTE
   ========================= */

prevButton.addEventListener("click", () => {

    current--;

    if (current < 0) {

        current = lightboxVideos.length - 1;

    }

    openVideo();

});


/* =========================
   TORNA AL VIDEO ARCHIVE
   ========================= */

function closeLightbox() {

    lightbox.style.display = "none";

    video.pause();

    video.removeAttribute("src");

    video.load();

}


archiveBack.addEventListener("click", () => {

    closeLightbox();

});


/* =========================
   CHIUDI
   ========================= */

closeButton.addEventListener("click", () => {

    closeLightbox();

});


/* =========================
   TASTIERA
   ========================= */

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") {

        return;

    }

    if (e.key === "ArrowRight") {

        nextButton.click();

    }

    if (e.key === "ArrowLeft") {

        prevButton.click();

    }

    if (e.key === "Escape") {

        closeLightbox();

    }

});