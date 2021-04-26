bool = true
const player = document.querySelector(".player");
const playPauseBtn = document.querySelector(".toggle");

const video = document.querySelector(".player__video");
const skipBackBtn = document.querySelector("[data-skip='-10']");
const skipForwardBtn = document.querySelector("[data-skip='25']");

const volumeBar = document.querySelector("[name='volume']");
const volumeText = document.querySelector(".volumeText");
const volumeIcon = document.querySelector(".volumeIcon");

const speedBar = document.querySelector("[name='playbackRate']");
const speedText = document.querySelector(".speedText");

const progressBar = document.querySelector(".progress__filled");
const progressCont = document.querySelector(".progress");

const current = document.querySelector(".current");
const duration = document.querySelector(".duration");

const fullScreenBtn = document.querySelector(".fullScreen")


//displayig current time and total duration
function currentTime() { 
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if(cursecs < 10){ cursecs = `0${cursecs}`};
    if(dursecs < 10){ dursecs = `0${dursecs}`};
    if(curmins < 10){ curmins = `0${curmins}`};
    if(durmins < 10){ durmins = `0${durmins}`};
    current.textContent = `${curmins}:${cursecs}`;
    duration.textContent = `${durmins}:${dursecs}`;
}
video.addEventListener("timeupdate", currentTime);


// play pause and icon
const playPause = () => {
    if (bool) {
        playPauseBtn.innerHTML = "❚ ❚"
        video.play()
        bool = false
    } else {
        playPauseBtn.innerHTML = "►"
        video.pause()
        bool = true
    }
};
playPauseBtn.addEventListener("click", playPause);
video.addEventListener("click", playPause);


//skipping back or forward
const skipBack = () => {
    video.currentTime -= 10
};
const skipForward = () => {
    video.currentTime += 25
};
skipBackBtn.addEventListener("click", skipBack);
skipForwardBtn.addEventListener("click", skipForward);


//volume adjusting
const volume = () => {
    video.volume = volumeBar.value
    volumeText.textContent = volumeBar.value
    video.volume === 0 ? volumeIcon.textContent = "🔉" : volumeIcon.textContent = "🔊"
    volumeIcon.classList.remove("mute")
};
volumeBar.addEventListener("input", volume);

const mute = () => {
    volumeIcon.textContent = "🔉"
    volumeBar.value = 0
    video.volume = volumeBar.value
    volumeText.textContent = volumeBar.value
};

volumeIcon.addEventListener("click", () => {
    volumeIcon.classList.add("mute")
    volumeIcon.classList.contains("mute") ? mute() : volume()
});


//video speed adjusting
const speed = () => {
    video.playbackRate = speedBar.value
    speedText.textContent = speedBar.value
};
speedBar.addEventListener("input", speed);


//progress bar adjusting
setInterval(() => {
    progressBar.style.cssText = `flex-basis:${(video.currentTime / video.duration)*100}%`
}, 250);


//clicking progressbar and 
const seek = (e) => {
    let percent = (e.offsetX / progressCont.offsetWidth);
    video.currentTime = percent * video.duration
};

progressCont.addEventListener("click", seek);


//full screen
const fullScreen = () => {
   video.requestFullscreen()
   
}
fullScreenBtn.addEventListener("click", fullScreen)
video.addEventListener("dblclick", fullScreen)


