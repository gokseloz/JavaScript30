// --------
// MY CODE
// --------
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

//making full screen and hide controls
const fullScreen = () => {
   video.requestFullscreen()
   
}
fullScreenBtn.addEventListener("click", fullScreen)
video.addEventListener("dblclick", fullScreen)



// ---------------------
// ORIGINAL PROJECT CODE 
// ---------------------

/* Get Our Elements */
// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');

// /* Build out functions */
// function togglePlay() {
//   const method = video.paused ? 'play' : 'pause';
//   video[method]();
// }

// function updateButton() {
//   const icon = this.paused ? '►' : '❚ ❚';
//   console.log(icon);
//   toggle.textContent = icon;
// }

// function skip() {
//  video.currentTime += parseFloat(this.dataset.skip);
// }

// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }

// function handleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }

// /* Hook up the event listeners */
// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', handleProgress);

// toggle.addEventListener('click', togglePlay);
// skipButtons.forEach(button => button.addEventListener('click', skip));
// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);

