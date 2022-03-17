let countdown;
let hourFormat = "24";
let isRunning = false;
let thenMock;
let secondsLeft;
let isTimerStarted = false;
const remainingTimerDisplay = document.querySelector(".display__time-left");
const daysDisplay = document.querySelector(".display__days-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const quickBtns = document.querySelectorAll("[data-time]");
const form = document.querySelector("#custom");
const formInput = document.querySelector(".formInput");
const hourFormatBtns = document.querySelectorAll(".hourFormat__button");
const hour24FormatBtn = document.querySelector("[data-format='24']");
const stopTimerBtn = document.querySelector(".stopTimer__button");
const continueTimerBtn = document.querySelector(".continueTimer__button");
const startStopBtns = document.querySelectorAll(".startStopBtns");
const restartBtn = document.querySelector(".restartTimer__button");

const timer = (seconds) => {
  isRunning = true;
  isTimerStarted = true;
  secondsLeft = seconds;
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  thenMock = then;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      isRunning = false;
      isTimerStarted = false;
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const adjustedTimes = (time) => {
  return time < 10 ? "0" : "";
};

// --------------- Displaying the remaining time --------------- //
const displayTimeLeft = (seconds) => {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const daysSec = seconds % (24 * 60 * 60);

  const hours = Math.floor(daysSec / (60 * 60));
  const hoursSec = seconds % (60 * 60);

  const minutes = Math.floor(hoursSec / 60);
  const minutesSec = seconds % 60;

  const remainedSeconds = Math.floor(minutesSec);
  const adjustedHours = adjustedTimes(hours);
  const adjustedMinutes = adjustedTimes(minutes);
  const adjustedRemainderSeconds = adjustedTimes(remainedSeconds);
  const displayDays = `${days} days`;
  const displayTime = `${adjustedHours}${hours}:${adjustedMinutes}${minutes}:${adjustedRemainderSeconds}${remainedSeconds}`;

  remainingTimerDisplay.textContent = displayTime;
  daysDisplay.classList.add(`${days > 0 ? "fadeIn" : "fadeOut"}`);
  daysDisplay.classList.remove(`${days > 0 ? "fadeOut" : "fadeIn"}`);

  daysDisplay.textContent = displayDays;
  document.title = `${displayDays} ${displayTime}`;
};

// --------------- Displaying the time that you need to be back --------------- //
const displayEndTime = (timeStamp) => {
  const end = new Date(timeStamp);
  const day = end.getDate();
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const month = end.getMonth() + 1;
  const year = end.getFullYear();
  const displayFullDate = `${day}.${month}.${year}`;
  const useHours = hourFormat === "12" && hour > 12 ? `${hour - 12}` : hour;
  const displayHour = `${adjustedTimes(useHours)}${useHours}:${adjustedTimes(
    minutes
  )}${minutes}${hourFormat === "12" && hour > 12 ? "pm" : ""}`;

  endTimeDisplay.classList.add("fadeIn");
  endTimeDisplay.innerHTML = `Be back on ${displayFullDate} at <b>${displayHour}</b>`;
};

// --------------- Functionality for QuickTimer buttons (20 secs 5min...) --------------- //
const startTimerQuickly = (btn) => {
  const time = btn.getAttribute("data-time");
  timer(time);
};

// --------------- Functionality for 12/24 Hour Format --------------- //
const hourFormatter = (e) => {
  hourFormat = e.target.dataset.format; // 12 or 14
  hourFormatBtns.forEach((btn) => (btn.disabled = false)); // //remove background from both hourformatters
  e.target.disabled = true; // add background only to clicked one

  if (isRunning) {
    displayEndTime(thenMock); // thenMock is a replicate to actual 'then'
  }
};

// --------------- Functionality for Star&Stop Button --------------- //
const startStopTimer = (e) => {
  const state = e.target.dataset.state; // stop or state
  startStopBtns.forEach((btn) => (btn.disabled = false)); //remove background from both start and stop

  switch (state) {
    case "stop":
      if (isRunning && isTimerStarted) {
        console.log("anb");
        e.target.disabled = true;
        isRunning = false;
        clearInterval(countdown);
        console.log(isRunning);
        console.log(isTimerStarted);
      }
      break;
    case "continue":
      if (!isRunning && isTimerStarted) {
        e.target.disabled = true;
        isRunning = true;
        timer(secondsLeft);
      }
  }
};

// --------------- Reset Timer and other stuff --------------- //
const restartTimer = () => {
  isRunning = false;
  isTimerStarted = false;
  hourFormat = "24";
  clearInterval(countdown);
  resetHours();
  resetEndTime();
  resetDays();
  resetStartStopBtns();
  resetHourFormatBtns();
};
const resetHours = () => {
  remainingTimerDisplay.textContent = "00:00:00";
};
const resetEndTime = () => {
  endTimeDisplay.classList.remove("fadeIn");
  endTimeDisplay.innerHTML = `Be back on`;
};

const resetDays = () => {
  daysDisplay.classList.remove("fadeIn", "fadeOut");
};

const resetStartStopBtns = () => {
  startStopBtns.forEach((btn) => (btn.disabled = false));
};
const resetHourFormatBtns = () => {
  hourFormatBtns.forEach((btn) => (btn.disabled = false));
  hour24FormatBtn.disabled = true;
};

// --------------- Event Listeners --------------- //
form.addEventListener("submit", (e) => {
  const formEl = e.target;
  e.preventDefault();
  if (formInput.value) {
    const minutes = formInput.value * 60;
    timer(minutes);
    formEl.reset();
  } else {
    alert("please type minutes");
  }
});

quickBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => startTimerQuickly(e.target))
);

hourFormatBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => hourFormatter(e))
);

startStopBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => startStopTimer(e))
);

restartBtn.addEventListener("click", restartTimer);
