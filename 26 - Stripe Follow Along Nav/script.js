const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  // If we dont use "if" and try to hover fast between links, it makes problem(text shows earlier). try and see
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  console.log(navCoords.top, dropdownCoords.top);
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // prevents background's position problem when any other elements added before now. Ex:<h2> => look at html.
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
