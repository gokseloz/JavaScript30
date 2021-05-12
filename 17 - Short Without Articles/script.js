const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// ----------------------------------------------------------------
// How I tried to code. Not as beautiful as original code, huh? 🤣
// ----------------------------------------------------------------
const list = document.querySelector("#bands");

const sortedList = bands.sort((a, b) => (trim(a) > trim(b) ? 1 : -1));

function trim(name) {
  const bannedWords = ["the", "an", "a"];

  if (bannedWords.includes(name.split(" ")[0].toLowerCase())) {
    return name.split(" ").slice(1).join(" ");
  } else {
    return name;
  }
}
const listItems = sortedList.map(band => `<li>${band}</li>`).join("");

list.innerHTML = listItems;

// -----------------------
// Original Project Codes
// -----------------------
// function strip(bandName) {
//     return bandName.replace(/^(a |the |an )/i, '').trim();
//   }

//   const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

//   document.querySelector('#bands').innerHTML =
//     sortedBands
//       .map(band => `<li>${band}</li>`)
//       .join('');
