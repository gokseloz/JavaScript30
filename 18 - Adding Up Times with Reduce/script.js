// -----------------------------------
// How I tried to code and some extras
// -----------------------------------
const lists = [...document.querySelectorAll("li")];

const times = lists.map((list) => list.dataset.time); // whole array with times

const fullTimes = times.map((time) => time.split(":")); // split hours and seconds

const minutes = fullTimes.map((hour) => parseFloat(hour[0])); // array which shows first item which is minutes
const seconds = fullTimes.map((hour) => parseFloat(hour[1])); // array which shows second item which is seconds

const fullSeconds = seconds.reduce((a, b) => a + b); // total seconds
const minutesFromSeconds = seconds.reduce((a, b) => a + b) / 60; // how many minutes are in total seconds
let sumSeconds = seconds.reduce((a, b) => a + b) % 60; // how many seconds left in total seconds
if(sumSeconds < 10){
    sumSeconds = `0${seconds.reduce((a, b) => a + b) % 60}`
}

const fullMinutes = minutes.reduce((a, b) => a + b) + Math.floor(minutesFromSeconds);
const sumMinutes = fullMinutes % 60
const sumHours = Math.floor(fullMinutes / 60)

lists.forEach((list) => (list.innerHTML = `Video ${lists.indexOf(list)+1} <span>${list.dataset.time}</span>`)); // display video number, min and sec, therefore we can actually ignore whats manuelly written in HTML

document.querySelector(".total").innerHTML = `Total Time: ${sumHours}:${sumMinutes}:${sumSeconds}`


// -----------------------
// Original Project Codes
// -----------------------
// const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

//   const seconds = timeNodes
//     .map(node => node.dataset.time)
//     .map(timeCode => {
//       const [mins, secs] = timeCode.split(':').map(parseFloat);
//       return (mins * 60) + secs;
//     })
//     .reduce((total, vidSeconds) => total + vidSeconds);

//     let secondsLeft = seconds;
//     const hours = Math.floor(secondsLeft / 3600);
//     secondsLeft = secondsLeft % 3600;

//     const mins = Math.floor(secondsLeft / 60);
//     secondsLeft = secondsLeft % 60;

//     console.log(hours, mins, secondsLeft);


