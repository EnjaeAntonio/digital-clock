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
const alarmBtn = select('.alarm-btn')
const enterAlarm = select('#enteralarm');
const alarmSound = ('/alarm.mp3');


const clock = setInterval(() => {
    let todaysDate = new Date();

    let hr = todaysDate.getHours().toString().padStart(2, '0');
    let min = todaysDate.getMinutes().toString().padStart(2, '0');
    let sec = todaysDate.getSeconds().toString().padStart(2, '0');

    display.innerText = `${hr}: ${min}: ${sec}`

}, 1000 );

onEvent('click', alarmBtn, function(){
    let inputHours = hours.value;
    let inputMinutes = minutes.value;
    let inputSeconds = seconds.value;
} )