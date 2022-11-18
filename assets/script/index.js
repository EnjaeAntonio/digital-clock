'use strict';

// Utility Functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
 }
    

function select(selector, parent = document) {
    return parent.querySelector(selector);
 }

 function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
 }


 function create(element, parent = document) {
   return parent.createElement(element);
 }

 function log(content) {
   console.log(content);
 }

const display = select('.display h1');
const output = select('.output p');
const hours = select('.hours');
const minutes = select('.minutes');
const seconds = select('.seconds')
const setAlarm = select('.alarm-btn')
const enterAlarm = select('#enteralarm');
const alarmSound = new Audio('./assets/img/alarm.mp3');



const clock = setInterval(() => {
    let todaysDate = new Date();

    let hr = todaysDate.getHours().toString().padStart(2, '0');
    let min = todaysDate.getMinutes().toString().padStart(2, '0');
    let sec = todaysDate.getSeconds().toString().padStart(2, '0');

    if (hr > 12) {
        hr -= 12;
    } else if (hr === 0) {
       hr = 12;
    }

    display.innerText = hr + ':' + min + ':' + sec;


}, 1000 );

onEvent('click', setAlarm, function(){
    let alarmHours = hours.value.toString();
    let alarmMinutes = minutes.value.toString().padStart(2, '0');
    let alarmSeconds = seconds.value.toString().padStart(2, '0');
    let alarmTime = alarmHours + ':' + alarmMinutes + ':' + alarmSeconds;

   

    setInterval(() => {
        let todaysDate = new Date();
    
        let hr = todaysDate.getHours().toString().padStart(2, '0');
        let min = todaysDate.getMinutes().toString().padStart(2, '0');
        let sec = todaysDate.getSeconds().toString().padStart(2, '0');
    
        if (hr > 12) {
            hr -= 12;
        } else if (hr === 0) {
           hr = 12;
        }
    
       let currentTime =  display.innerText = hr + ':' + min + ':' + sec;
       
        if (alarmTime === currentTime){
            alarmSound.play();
            let element = document.body;
            element.classList.toggle("dark-mode");
        } else if (alarmHours === '' || isNaN(alarmTime)) {
            output.innerText = 'Please enter an alarm!'
        }else {
            output.innerText = alarmTime
        } 

           
    }, 1000 );
});






