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
    let alarmHours = hours.value;
    let alarmMinutes = minutes.value;
    let alarmSeconds = seconds.value;
    let alarmTime = alarmHours + ':' + alarmMinutes + ':' + alarmSeconds;
    console.log(alarmTime)

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
           }
    }, 1000 );
});






