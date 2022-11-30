const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {e.preventDefault();})

let chronometer;

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

document.formTag.start.onclick = () => start();
document.formTag.pause.onclick = () => pause();
document.formTag.reset.onclick = () => reset();

function start() {
  pause();
  chronometer = setInterval(() =>{timer(); }, 10)
}

function pause(){
  clearInterval(chronometer);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
}

function timer() {
  if ((millisecond += 10) === 1000) {
    millisecond = 0;
    second++;
  }
  if(second === 60) {
    second = 0;
    minute++;;
  }
  if(minute === 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText= returnData(hour);
  document.getElementById('minute').innerText= returnData(minute);
  document.getElementById('second').innerText= returnData(second);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}