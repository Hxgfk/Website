const div = document.getElementsByClassName("swiper-slide swiper-slide-active")[0];
clearInterval()
let video;
if (div !== undefined){
    let url = prompt("Please input video url(https)：")
    function load(){
        div.innerHTML = div.innerHTML+"<video src="+url+" controls='controls' id='v'></video>"
        video = document.getElementById("v");
        video.currentTime = 0;
        video.load();
        video.play();
    }
    load();
    setInterval(function (){
        if (document.getElementById("v") === undefined){
            load();
        }
    }, 100);
}else {
    console.error("Cannot find div");
}