let video = document.getElementById("video");
function ret(){
    video.currentTime -=15
}
function avanc(){
    video.currentTime +=15
}
function mais(){
    video.playbackRate +=0.1;
}
function menos(){
    video.playbackRate -=0.1;    
}
function play(){
    video.play();
}
function stop(){
    video.pause();
    video.currentTime =0;

}