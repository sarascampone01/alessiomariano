const videos = [

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video1.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video2.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video3.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video4.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_1800k/w_720/video5.mp4"

];


const lightboxVideos = [

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_3000k/w_1080/video1.mp4",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_3000k/w_1080/video2.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_3000k/w_1080/video3.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_3000k/w_1080/video4.mov",

    "https://res.cloudinary.com/o40vc5qd/video/upload/q_auto/br_3000k/w_1080/video5.mp4"

];


const thumbs = document.querySelectorAll(".archive-video");

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