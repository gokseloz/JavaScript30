const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 200;

text.style.cssText = `text-shadow: 0px 0px 0px #000`;

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // should write this if there is nested elements inside the element which has eventlistener
  //   if(this !== e.target){
  //       x = x + e.target.offsetLeft
  //       y = y + e.target.offsetLeft
  //   }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

//   console.log(xWalk, yWalk)

  text.style.cssText = `text-shadow: ${xWalk}px ${yWalk}px 5px rgba(255, 0 ,255, 0.7), 
  ${xWalk * -1}px ${yWalk}px 5px rgba(0, 255 ,255, 0.7), 
  ${yWalk}px ${xWalk * -1}px 5px rgba(0, 255 ,0, 0.7), 
  ${yWalk * -1}px ${xWalk}px 5px rgba(0, 0 ,255, 0.7)`;
}

hero.addEventListener("mousemove", shadow);
