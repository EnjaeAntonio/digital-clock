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
const clear = select('.clear');


const clock = setInterval(() => {
    let todaysDate = new Date();

    let hr = todaysDate.getHours().toString().padStart(2, '0');
    let min = todaysDate.getMinutes().toString().padStart(2, '0');
    let sec = todaysDate.getSeconds().toString().padStart(2, '0');


    display.innerText = hr + ':' + min + ':' + sec;


}, 1000 );

onEvent('click', setAlarm, function(){
    let alarmHours = hours.value.toString().padStart(2, '0');
    let alarmMinutes = minutes.value.toString().padStart(2, '0');
    let alarmSeconds = seconds.value.toString().padStart(2, '0');
    let alarmTime = alarmHours + ':' + alarmMinutes + ':' + alarmSeconds;

   

    setInterval(() => {
        let todaysDate = new Date();
    
        let hr = todaysDate.getHours().toString().padStart(2, '0');
        let min = todaysDate.getMinutes().toString().padStart(2, '0');
        let sec = todaysDate.getSeconds().toString().padStart(2, '0');
    
    
       let currentTime =  display.innerText = hr + ':' + min + ':' + sec;
       
       if(isNaN(alarmHours) || isNaN(alarmMinutes) || isNaN(alarmSeconds)){
        output.innerText = 'Refresh and enter a valid Number!'

        } else if (alarmTime === currentTime){
            alarmSound.play();
            let element = document.body;
            element.classList.toggle("dark-mode");

        } else if (alarmHours >= 24 || alarmMinutes >= 60 || alarmSeconds >= 60) {
            output.innerText = 'Refresh and enter an hour between 0-23!'

        } else 
            output.innerText = alarmTime

           
    }, 1000 );
});


onEvent('click', clear, () => {
    location.reload()
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
})


