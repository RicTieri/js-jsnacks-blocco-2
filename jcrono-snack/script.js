const displayCount = document.getElementById('counter');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let clock;

startBtn.addEventListener('click', function(){
 clock = setInterval(function () {displayCount.innerHTML = parseInt(displayCount.innerText, 10) + 1;}, 1000);
})

stopBtn.addEventListener('click', function (){
  clearInterval(clock);
})

resetBtn.addEventListener('click', function (){
  clearInterval(clock);
  displayCount.innerHTML = 00;
})