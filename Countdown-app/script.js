const countDownDate = new Date('Aug 10, 2023 03:00:00').getTime()
const updateTimerSeconds = setInterval(function(){


const dateNow = new Date().getTime();
const timeLeft = countDownDate - dateNow;

let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); 
let hours  = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.floor( timeLeft % (1000 * 60) / 1000);

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds ;
},1000);