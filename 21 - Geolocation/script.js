const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
    alert("Hey! You have to allow that to happen!!")
  }
);


if(navigator.geolocation){
    navigator.geolocation.watchPosition(position => console.log(position))
}