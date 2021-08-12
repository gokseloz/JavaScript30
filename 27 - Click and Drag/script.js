const slider = document.querySelector(".items");
const grapPointFromLeft = document.querySelector(".grapPointFromLeft");
const startPointFromLeft = document.querySelector(".startPointFromLeft");
const moveSlide = document.querySelector(".moveSlide");
const items = [...document.querySelectorAll(".item")];

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the function from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
  console.log("startX", startX);
  console.log("x", x);
  grapPointFromLeft.innerHTML = `grab point from the left: ${x}px`;
  startPointFromLeft.innerHTML = `start point from the left: ${startX}px`;
  moveSlide.innerHTML = `scroll left: ${walk}px`;
});

//***********
//Add Images
//***********
for (let i = 0; i < items.length; i++) {
  items[
    i
  ].style.background = `url('images/${i}.jpg') no-repeat 50% 50% / cover`;
}
