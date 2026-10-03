const video = document.getElementById("projectVideo");

console.log(projectData);

const counter = document.getElementById("counter");

const next = document.getElementById("next");
const prev = document.getElementById("prev");


let currentVideo = 0;



function updateVideo() {

    const file = projectData.videos[currentVideo];


    // dissolvenza uscita
    video.style.opacity = 0;


    setTimeout(() => {


        // =========================================
        // VIDEO CLOUDINARY — SOLO RAS / MIO12
        // =========================================

      if (file.startsWith("http")) {

    video.src = file;

} else {

    video.src = `../assets/${file}`;

}


        // carica nuovo video
        video.load();


        video.play()
        .catch(() => {

            console.log("Autoplay bloccato dal browser");

        });



        // aggiorna contatore
        counter.innerHTML =
        `${String(currentVideo + 1).padStart(2, "0")} / ${String(projectData.totalVideos).padStart(2, "0")}`;



        // dissolvenza entrata
        video.style.opacity = 1;


    }, 150);

}




// =========================================
// FRECCIA AVANTI
// =========================================

next.addEventListener("click", () => {


    currentVideo++;


    if(currentVideo >= projectData.totalVideos){

        currentVideo = 0;

    }


    updateVideo();


});





// =========================================
// FRECCIA INDIETRO
// =========================================

prev.addEventListener("click", () => {


    currentVideo--;


    if(currentVideo < 0){

        currentVideo = projectData.totalVideos - 1;

    }


    updateVideo();


});





// =========================================
// CARICA IL PRIMO VIDEO ALL'APERTURA
// =========================================

updateVideo();





// =========================================
// TASTI FRECCIA DA TASTIERA
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {

        next.click();

    }


    if (event.key === "ArrowLeft") {

        prev.click();

    }

});