const pressed = []
const secretCode = "hello"
window.addEventListener("keyup", (e) => {
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
    if (pressed.join("").includes(secretCode)) {
        cornify_add()
        document.querySelector("p").innerHTML = "BAZINGAAA!"
    }
    console.log(pressed)
    

    // Alternative Solution
    // pressed.push(e.key)
    // if(pressed.length > secretCode.length){
    //     pressed.shift()
    // }
    // if(pressed.join("").includes(secretCode)){
    //     cornify_add()
    // }
    // console.log(pressed)
})