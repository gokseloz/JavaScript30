// ----------------------------------------------
// * How did I code with the HELP of the course *
// ----------------------------------------------
// const inputs = document.querySelectorAll(".controls input");

// function handleUpdate() {
//     const suffix = this.dataset.sizing || "";
//     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

// }
// inputs.forEach(input => input.addEventListener("input", handleUpdate))


// ----------------------------
// * How did I code by myself *
// ----------------------------
// Alternative code to the original one
let inputSpacing = document.querySelector("#spacing");
let inputBlur = document.querySelector("#blur");
let inputColor = document.querySelector("#base")

inputSpacing.addEventListener("input", createSpace)
inputBlur.addEventListener("input", createBlur)
inputColor.addEventListener("input", createColor)

function createSpace() {
    const suffix = this.getAttribute("data-sizing");
    document.querySelector("#img").style.padding = `${this.value}${suffix}`
    document.querySelector(".outputSpacing").value = this.value
}

function createBlur() {
    const suffix = this.getAttribute("data-sizing");
    document.querySelector("#img").style.filter = `blur(${this.value}${suffix})`
    document.querySelector(".outputBlur").value = this.value
}

function createColor() {
    document.querySelector("#img").style.background = this.value
    document.querySelector(".outputColor").value = this.value
}

// What I added is below => Get Output's value and change the input value by typing it
let outputSpacing = document.querySelector(".outputSpacing");
let outputBlur = document.querySelector(".outputBlur");
let outputColor = document.querySelector(".outputColor");

outputSpacing.addEventListener("blur", changeSpace)
outputBlur.addEventListener("blur", changeBlur)
outputColor.addEventListener("blur", changeColor)

function changeSpace() {
    if (outputSpacing.value > 200 || outputSpacing.value < 0) {
        alert("please type a number between 0 and 200")
        return
    }
    const suffix = inputSpacing.getAttribute("data-sizing");
    inputSpacing.value = this.value
    document.querySelector("#img").style.padding = `${this.value}${suffix}`
}

function changeBlur() {
    if (outputBlur.value > 25 || outputBlur.value < 0) {
        alert("please type a number between 0 and 25")
        return
    }
    const suffix = inputBlur.getAttribute("data-sizing");
    inputBlur.value = this.value
    document.querySelector("#img").style.filter = `blur(${this.value}${suffix})`
}

function changeColor() {
    if (outputColor.value.length != 7) {
        alert("please type 6 digit hex code")
        return
    }
    inputColor.value = this.value
    document.querySelector("#img").style.background = `${this.value}`
}