window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// makes sure that results are displaying while we are speaking not after we finish speaking
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

    p.textContent = transcript
    // each break between speechs, jumps to another paragraph
    if(e.results[0].isFinal){
        p = document.createElement("p");
        words.appendChild(p)
    }
    if(transcript.includes("weather")){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
              long = position.coords.longitude;
              lat = position.coords.latitude;
              const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=b29ce28bbc55ccd2748e0ce2e458781d`;
              fetch(api)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  const temp = Math.floor(data.main.temp);
                  p.textContent = `Currently ${temp}℃ `;
                });
            });
          }
    }
});

// speeches do not overwrite on themselves
recognition.addEventListener("end", recognition.start)

recognition.start();
