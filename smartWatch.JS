const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const timerElement = document.getElementById("timer");



startButton.textContent = "START";
stopButton.textContent = "STOP";
resetButton.textContent = "RESET";

// let defaultMinutes = '00';
// let defaultSeconds = '00';

let intervalId;
let secondsPassed = 0;
let minutesPassed = 0;

timerElement.textContent = `${formatTime(minutesPassed)}:${formatTime(secondsPassed)}`;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
 
  timerElement.textContent = `${formatTime(minutesPassed)}:${formatTime(secondsPassed)}`; //to display 30 
//   let numSeconds = parseInt(secondsPassed);
//   let numMinutes = parseInt(minutesPassed);

    intervalId = setInterval(() => {
     secondsPassed++;
     if(secondsPassed === 60){
        minutesPassed++;
        secondsPassed = 0;
     }
    timerElement.textContent = `${formatTime(minutesPassed)}:${formatTime(secondsPassed)}`; //to display
  }, 1000);
});



function formatTime(value){
    return value < 10 ? '0' + value : value;
}


stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    startButton.disabled = false;
});

resetButton.addEventListener("click", () => {
  secondsPassed = 0;
  minutesPassed = 0;
  startButton.disabled = false;
  clearInterval(intervalId);
  timerElement.textContent = `${formatTime(minutesPassed)}:${formatTime(secondsPassed)}`;
});
