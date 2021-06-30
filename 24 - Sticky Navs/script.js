const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;
const fromClientTop = nav.getBoundingClientRect().top;

function fixNav() {
  //****************************************
  //ALTERNATIVE with getBoundingClientRect()
  //****************************************
  if (fromClientTop <= scrollY) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  }
  if (fromClientTop > scrollY) {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }

  //*************
  //WES BOS' CODE
  //*************
  //   if (window.scrollY >= topOfNav) {
  //     document.body.style.paddingTop = nav.offsetHeight + "px";
  //     document.body.classList.add("fixed-nav");
  //   } else {
  //     document.body.classList.remove("fixed-nav");
  //     document.body.style.paddingTop = 0;
  //   }
}

window.addEventListener("scroll", fixNav);
