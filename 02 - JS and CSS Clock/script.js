const hourHand = document.querySelector(".hour-hand")
const minutehourHand = document.querySelector(".min-hand")
const secondhourHand = document.querySelector(".second-hand")

function setDate(){
    const now = new Date()

    const hour = now.getHours() 
    const minute = now.getMinutes()
    const second = now.getSeconds()

    const hourDegree = ((hour / 12) * 360) + ((minute/60)*30)
    const minDegree = ((minute / 60) * 360) + ((second/60)*6)
    const secondDegree = ((second/60) * 360)

    hourHand.style.transform = `rotate(${hourDegree}deg)`
    minutehourHand.style.transform = `rotate(${minDegree}deg)`
    secondhourHand.style.transform = `rotate(${secondDegree}deg)`

    hourDegree == 0 ? hourHand.style.transition = "none" : hourHand.style.transition = "all 1s"
    minDegree == 0 ? minutehourHand.style.transition = "none" : minutehourHand.style.transition = "all 1s"
    secondDegree == 0 ? secondhourHand.style.transition = "none": secondhourHand.style.transition = "all 1s"
}

setInterval(setDate, 1000)