
let time = 60; 
const timerElement = document.getElementById('timer');

function updateTimer() {
  let minutes = Math.floor(time / 60);
  // console.log(minutes);
  
  let seconds = time % 60;
  // console.log(seconds);
  

  // Format time
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timerElement.innerHTML = `${minutes}:${seconds}`;

  if (time > 0) {
    time--;
  } else {
    clearInterval(countdown);
    timerElement.innerHTML = "Time's up!";
  }
}

updateTimer(); 
const countdown = setInterval(updateTimer, 1000);
