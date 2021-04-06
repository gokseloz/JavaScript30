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
document.querySelector("#spacing").addEventListener("input", createSpace)
document.querySelector("#blur").addEventListener("input", createBlur)
document.querySelector("#base").addEventListener("input", createColor)

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

// --------------------------
// * Get the Output's Value *
// --------------------------
document.querySelector(".outputSpacing").addEventListener("blur", changeSpace)
document.querySelector(".outputBlur").addEventListener("blur", changeBlur)
document.querySelector(".outputColor").addEventListener("blur", changeColor)

function changeSpace() {
    if (document.querySelector(".outputSpacing").value > 200 || document.querySelector(".outputSpacing").value < 0) {
        alert("please type a number between 0 and 200")
        return
    }
    const suffix = document.querySelector("#spacing").getAttribute("data-sizing");
    document.querySelector("#spacing").value = document.querySelector(".outputSpacing").value
    document.querySelector("#img").style.padding = `${document.querySelector("#spacing").value}${suffix}`
}

function changeBlur() {
    if (document.querySelector(".outputBlur").value > 25 || document.querySelector(".outputBlur").value < 0) {
        alert("please type a number between 0 and 25")
        return
    }
    const suffix = document.querySelector("#blur").getAttribute("data-sizing");
    document.querySelector("#blur").value = document.querySelector(".outputBlur").value
    document.querySelector("#img").style.filter = `blur(${this.value}${suffix})`
}

function changeColor() {
    document.querySelector("#base").value = document.querySelector(".outputColor").value
    document.querySelector("#img").style.background = `${this.value}`

}