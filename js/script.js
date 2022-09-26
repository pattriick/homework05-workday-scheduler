
// declare variables from local storage
var sv7 = localStorage.getItem('7am task');
document.getElementById('task7').placeholder = sv7;
var sv8 = localStorage.getItem('8am task');
document.getElementById('task8').placeholder = sv8;
var sv9 = localStorage.getItem('9am task');
document.getElementById('task9').placeholder = sv9;
var sv10 = localStorage.getItem('10am task');
document.getElementById('task10').placeholder = sv10;
var sv11 = localStorage.getItem('11am task');
document.getElementById('task11').placeholder = sv11;
var sv12 = localStorage.getItem('12pm task');
document.getElementById('task12').placeholder = sv12;
var sv1 = localStorage.getItem('1pm task');
document.getElementById('task1').placeholder = sv1;
var sv2 = localStorage.getItem('2pm task');
document.getElementById('task2').placeholder = sv2;
var sv3 = localStorage.getItem('3pm task');
document.getElementById('task3').placeholder = sv3;


// make save buttons
var saveBtn7 = document.querySelector('#save7');
var saveBtn8 = document.querySelector('#save8');
var saveBtn9 = document.querySelector('#save9');
var saveBtn10 = document.querySelector('#save10');
var saveBtn11 = document.querySelector('#save11');
var saveBtn12 = document.querySelector('#save12');
var saveBtn1 = document.querySelector('#save1');
var saveBtn2 = document.querySelector('#save2');
var saveBtn3 = document.querySelector('#save3');

var taskIdx = 0;


// list current time
var today = moment();
today = today.format('MMMM Do YYYY, h:mm a');
var rootEl = $('#currentDay');
var newEl = $('<h2>');
newEl.text(today);
rootEl.append(newEl);



// tried to arrange past, present, future color schemes, was unsuccessful

// color.setAttribute('class', 'future');
var hour = moment().format('h');
var color = document.getElementsByTagName('thead')[taskIdx];
console.log(hour);
console.log(color);
color.setAttribute('class', 'present');



for (var i = 7; i < hour; i++){
    newColor = color[i];
    console.log(newColor);
    color.setAttribute('class', 'past');
//     console.log(color);
    
    
    // var hour = moment().format('h');
    // console.log(color);
    // if (i < hour) {
    //     color.setAttribute('class', 'past');
    // } else if (i > hour) {
    //     color.setAttribute('class', 'future');
    // } else if (i === hour) {
    //     color.setAttribute('class', 'present');
    // }
// }
}

// color.setAttribute('class', 'future');



// functions for each save button. repetetive, but it worked
function newTask7 () {
    var task = $('#task7').val();
    JSON.stringify(task);
    sv7 = task;
    localStorage.setItem('7am task', sv7);
    sv7 = $('sv7').placeholder = sv7;
}

function newTask8 () {
    var task = $('#task8').val();
    JSON.stringify(task);
    sv8 = task;
    localStorage.setItem('8am task', sv8);
    sv8 = $('sv8').placeholder = sv8;
}

function newTask9 () {
    var task = $('#task9').val();
    JSON.stringify(task);
    sv9 = task;
    localStorage.setItem('9am task', sv9);
    sv9 = $('sv9').placeholder = sv9;
}

function newTask10 () {
    var task = $('#task10').val();
    JSON.stringify(task);
    sv10 = task;
    localStorage.setItem('10am task', sv10);
    sv10 = $('sv10').placeholder = sv10;
}

function newTask11 () {
    var task = $('#task11').val();
    JSON.stringify(task);
    sv11 = task;
    localStorage.setItem('11am task', sv11);
    sv11 = $('sv11').placeholder = sv11;
}

function newTask12 () {
    var task = $('#task12').val();
    JSON.stringify(task);
    sv12 = task;
    localStorage.setItem('12pm task', sv12);
    sv12 = $('sv12').placeholder = sv12;
}

function newTask1 () {
    var task = $('#task1').val();
    JSON.stringify(task);
    sv1 = task;
    localStorage.setItem('1pm task', sv1);
    sv1 = $('sv1').placeholder = sv1;
}

function newTask2 () {
    var task = $('#task2').val();
    JSON.stringify(task);
    sv2 = task;
    localStorage.setItem('2pm task', sv2);
    sv2 = $('sv2').placeholder = sv2;
}

function newTask3 () {
    var task = $('#task3').val();
    JSON.stringify(task);
    sv3 = task;
    localStorage.setItem('3pm task', sv3);
    sv3 = $('sv3').placeholder = sv3;
}

// event listeners for save buttons
saveBtn7.addEventListener("click", newTask7);
saveBtn8.addEventListener("click", newTask8);
saveBtn9.addEventListener("click", newTask9);
saveBtn10.addEventListener("click", newTask10);
saveBtn11.addEventListener("click", newTask11);
saveBtn12.addEventListener("click", newTask12);
saveBtn1.addEventListener("click", newTask1);
saveBtn2.addEventListener("click", newTask2);
saveBtn3.addEventListener("click", newTask3);