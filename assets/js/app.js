let cl = console.log;
"use strict";
//alert('hello');
//note>>  always write the code in function


let digitalClock = document.getElementById('digitalClock');
cl('digitalClock');

//hrs
//min
//sec
//session >> am or pm


let d = new Date(); //  object of current date
cl(d);

let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let session = "am"
let day = d.getDay();
let weekArray = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

cl(hr, min, sec, session, day);

if (hr>=12){
	session = "pm"
}

if(hr>=12){
	hr= hr - 12                 // 13-12 >> 1
}	                             // 14 - 12 >>2
								 //15 - 12 >> 3


/* if(hr <10){
	hr= "0" + hr  //0 +1 >>01  >> concatination >> coercian
}

if(min<10){
	min = "0" + min
}

if(sec<10){
	sec = "0" + sec
}
 */

//ternary operator
// condition ? "this code will get executed if condition is true" : "this code will get executed if condition is false"
/* hr = (hr < 10) ? ('0' + hr) : hr;       //dry principle that's why we used function
min = (min < 10) ? ('0' + min) : min;
sec = (sec < 10) ? ('0' + sec) : sec;
 */
function setZero(num){
	return (num < 10) ? ("0" + num) : num;
}
hr= setZero(hr);
min = setZero(min);
sec = setZero(sec);


let result = `<div class="clock">
					${hr} : ${min} : ${sec} ${session}
					<div class="day">${weekArray[day]}</div>
			</div>`;

cl(hr, min, sec, session, day);

digitalClock.innerHTML = result;

/* function setZero(num){
	return (num < 10) ? ("0" + num) : num;
}
hr= setZero(hr);
min = setZero(min);
sec = setZero(sec); */

//it takes two paramters
//1st >> function
//2nd >> millisec
//setTimeout(function, millisec)



// proper way of writing a code in function


function dClock(){
	let digitalClock = document.getElementById('digitalClock');
cl('digitalClock');

let d = new Date(); 

let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let session = "am"
let day = d.getDay();
let weekArray = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

cl(hr, min, sec, session, day);

if (hr>=12){
	session = "pm"
}
if(hr>=12){
	hr= hr - 12                 
}	              
function setZero(num){
	return (num < 10) ? ("0" + num) : num;   //<< // doubt >> why we are taking this function outside?
}
hr= setZero(hr);
min = setZero(min);
sec = setZero(sec);

let result = `<div class="clock">
					${hr} : ${min} : ${sec} ${session}
					<div class="day">${weekArray[day]}</div>
			</div>`;

cl(hr, min, sec, session, day);

digitalClock.innerHTML = result;
setTimeout(dClock, 1000);
}

dClock();