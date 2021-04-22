const canvas = document.querySelector("#draw")
const ctx = canvas.getContext("2d")             //painting will actually happen here

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;
// ctx.globalCompositeOperation = "multiply"    // blend mode

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    
    if (!isDrawing) return;                     //stop the function running when they are not mouse down
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`  //stars with hue=0 and then hue++ => look at line31
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);                   //go to where mouse is actually moving
    // go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]     // ES6 syntax => insteadf of lastX = e.offsetX; lastY = e.offsetY

    hue++
    if (hue >= 360) {
        hue = 0
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {   
        direction = !direction                                  //flipping the direction
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener("mousedown", (e) => {                   //ready to draw when mousedown
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]                     //start drawing from where the mouse is on.
})



canvas.addEventListener("mousemove", draw)                      //drawing when mousemove
canvas.addEventListener("mouseup", () => isDrawing = false)     //stop drawing when mouseup
canvas.addEventListener("mouseout", () => isDrawing = false)    //stop drawing when mouseout