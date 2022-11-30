const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {e.preventDefault();})
const getNumber = document.querySelector('#number');
const styleBody = getComputedStyle(document.body);
const colorPause = 'red';
const colorP = 'black'

let chronometer;

let hour = 0;
let minute = 0;
let second = 0;

document.formTag.start.onclick = () => start();
document.formTag.pause.onclick = () => pause();
document.formTag.reset.onclick = () => reset();

function start() {
  pause();
  getNumber.style.color = colorP;
  chronometer = setInterval(() =>{timer(); }, 1000)
}

function pause(){
  getNumber.style.color = colorPause;  
  clearInterval(chronometer);
}

function reset() {
  pause();
  getNumber.style.color = colorP;
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
}

function timer() {
  if((second++) === 60) {
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