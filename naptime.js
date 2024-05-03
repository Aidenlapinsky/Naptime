const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timeLeftDisplay = document.getElementById('time-left');

let timeLeft = 60;
let timerId;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  timerId = setInterval(() => {
    timeLeft--;
    timeLeftDisplay.textContent = formatTime(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timerId);
      startButton.disabled =$@$v=v1.16$@$false;
      stopButton.disabled = true;
      resetButton.disabled = true;
    }
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(timerId);
  timeLeft = 60;
  timeLeftDisplay.textContent = formatTime(timeLeft);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
