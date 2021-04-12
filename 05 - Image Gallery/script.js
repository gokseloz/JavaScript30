const panels = document.querySelectorAll(".panel")

panels.forEach(panel => panel.addEventListener("click", (e) => {
    console.log(e.propertyName)
    panel.classList.toggle("open")
    panel.classList.toggle("open-active")
}))