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
const setAlarm = select('.alarm-btn')
const enterAlarm = select('#enteralarm');
const alarmSound = ('OOJ\Enjae_Antonio_OOP_Assignment_one\assets\img\Wecker-sound.mp3');

const clock = setInterval(() => {
    let todaysDate = new Date();

    let hr = todaysDate.getHours().toString();
    let min = todaysDate.getMinutes().toString();
    let sec = todaysDate.getSeconds().toString().padStart(2, '0');

    display.innerText = `${hr}: ${min}: ${sec}`

}, 1000 )

onEvent('click', setAlarm, function(){
    let a = enterAlarm.value;
    
    output.innerText = `${a}`
    if (output.innerText === display.innerText) {

    }
});

alarmSound.play()
