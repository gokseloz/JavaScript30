// ----------------------
// * With Keydown Event *
// ----------------------
const play = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!key) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", play)


// --------------------
// * With Click Event *
// --------------------
const keyBtn = [...document.querySelectorAll(".key")]
const audio = [...document.querySelectorAll(`audio`)]

keyBtn.forEach((key) => {
    key.addEventListener("click", () => {
        audio[keyBtn.indexOf(key)].play()
        audio[keyBtn.indexOf(key)].currentTime = 0
        key.classList.add("playing")
    })
})