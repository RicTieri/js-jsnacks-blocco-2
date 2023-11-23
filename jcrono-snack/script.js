const displayCount = document.getElementById('counter');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const second = 1000;
const timing = second / 1000;

playBtn.addEventListener('click', function(){
  setInterval(function () {displayCount.innerHTML+=timing}, second);
})

stopBtn.addEventListener('click', )