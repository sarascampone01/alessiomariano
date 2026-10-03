const video = document.getElementById("projectVideo");
const counter = document.getElementById("counter");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentVideo = 0;


/* =========================
   PRELOAD
   ========================= */

video.preload = "auto";


/* =========================
   AGGIORNA VIDEO
   ========================= */

function updateVideo() {

    const file = projectData.videos[currentVideo];

    // dissolvenza uscita
    video.style.opacity = 0;

    setTimeout(() => {

        // =========================
        // SORGENTE VIDEO
        // =========================

        if (file.startsWith("http")) {

            video.src = file;

        } else {

            video.src = `../assets/${file}`;

        }

        // prepara il video
        video.preload = "auto";

        // carica il nuovo video
        video.load();

        // avvia la riproduzione
        video.play().catch(() => {

            console.log("Autoplay bloccato dal browser");

        });

        // =========================
        // CONTATORE
        // =========================

        counter.innerHTML =
            `${String(currentVideo + 1).padStart(2, "0")} / ${String(projectData.totalVideos).padStart(2, "0")}`;

        // dissolvenza entrata
        video.style.opacity = 1;

    }, 150);

}


/* =========================
   FRECCIA AVANTI
   ========================= */

next.addEventListener("click", () => {

    currentVideo++;

    if (currentVideo >= projectData.totalVideos) {
        currentVideo = 0;
    }

    updateVideo();

});


/* =========================
   FRECCIA INDIETRO
   ========================= */

prev.addEventListener("click", () => {

    currentVideo--;

    if (currentVideo < 0) {
        currentVideo = projectData.totalVideos - 1;
    }

    updateVideo();

});


/* =========================
   CARICA PRIMO VIDEO
   ========================= */

updateVideo();


/* =========================
   TASTIERA
   ========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        next.click();
    }

    if (event.key === "ArrowLeft") {
        prev.click();
    }

});