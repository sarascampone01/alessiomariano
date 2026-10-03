const videos = [

    "../assets/archive/video/video1.mp4",
    "../assets/archive/video/video2.mp4",
    "../assets/archive/video/video3.mp4",
    "../assets/archive/video/video4.mp4",
    "../assets/archive/video/video5.mp4"

];


const lightboxVideos = [

    "https://res.cloudinary.com/o40vc5qd/video/upload/v1790970688/video1.mp4",
    "https://res.cloudinary.com/o40vc5qd/video/upload/v1790972545/video2-web.mp4",
    "https://res.cloudinary.com/o40vc5qd/video/upload/v1790972547/video3-web.mp4",
    "https://res.cloudinary.com/o40vc5qd/video/upload/v1790972547/video4-web.mp4",
    "https://res.cloudinary.com/o40vc5qd/video/upload/v1790972552/video5-web.mp4"

];


const thumbs = document.querySelectorAll(".archive-video");

const lightbox = document.getElementById("videoLightbox");

const video = document.getElementById("lightboxVideo");


let current = 0;



thumbs.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        current = index;

        openVideo();

    });

});



function openVideo(){

    lightbox.style.display = "flex";

    video.pause();

    video.currentTime = 0;


    /* usa il video Cloudinary solo nel Lightbox */

    video.src = lightboxVideos[current];


    video.removeAttribute("muted");

    video.muted = false;

    video.volume = 1;

    video.load();


    video.play()
    .then(() => {

        video.muted = false;

        video.volume = 1;

    })
    .catch(error => {

        console.log("Errore riproduzione:", error);

    });

}



document.getElementById("nextVideo").onclick = () => {

    current++;

    if(current >= videos.length){

        current = 0;

    }

    openVideo();

};



document.getElementById("prevVideo").onclick = () => {

    current--;

    if(current < 0){

        current = videos.length - 1;

    }

    openVideo();

};



document.getElementById("closeVideo").onclick = () => {

    lightbox.style.display = "none";

    video.pause();

    video.removeAttribute("src");

    video.load();

};



document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){

            document.getElementById("nextVideo").click();

        }


        if(e.key === "ArrowLeft"){

            document.getElementById("prevVideo").click();

        }


        if(e.key === "Escape"){

            document.getElementById("closeVideo").click();

        }

    }

});