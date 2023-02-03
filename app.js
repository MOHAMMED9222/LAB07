'use strict'
// Globals
let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m', '6 p.m.', '7 p.m.'];

let allstores = [];

let Firststore = new City('Seattle', 23, 65, 6.3);
//console.log(Firststore);

let Secondstore = new City('Tokyo', 3, 24, 1.2);
//console.log(Secondstore);

let Thirdstore = new City('Dubai', 11, 38,2.3);

//console.log(Thirdstore);

let Fourthstore = new City('Paris', 20, 38, 2.3);

//console.log(Fourthstore);

let Fifthstore = new City('Lima', 2, 16, 4.6);

allstores.push(Firststore, Secondstore, Thirdstore, Fourthstore, Fifthstore);

// console.log(hi)


// D O M 
// create an element
// declare a variable and then call createelement and pass the html tag name as a string 


 
let cities = document.getElementById('cities');

let citiestablehead = document.querySelector('thead');

let citiesbody = document.querySelector('tbody');

let citiesfooter = document.querySelector('tfoot');



console.log(cities);

// helper functions
function tableHeader() {
  let row1 = document.createElement('tr');
  cities.appendChild(row1);
  let cityhead = document.createElement('th');
  cityhead.textContent = 'City Name'
  row1.appendChild(cityhead);
  for ( let i = 0; i < hour.length; i++) {
  let ThirdElement = document.createElement('th');
  ThirdElement.textContent = hour[i];
  row1.appendChild(ThirdElement);
  }
let totalCities = document.createElement('th');
totalCities.innerText = 'Daily Cities Total';
}
tableHeader();









// constructor function - a function that will create objects
// capitalize the name of function
function City(city, min, max, avg, arrayofcookiesphr) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.renderList = function () {
    let ul = document.createElement('ul');
    storesinformation.appendChild(ul);

  for (let i = 0; i < hour.length[i]; i++); ul.appendChild(li);
  }
 }

 'use strict'

/*
EVENT HANDLING
Event — is FIRED or RAISED
When an event is fired
Code is TRIGGERED
EVENT TYPES
- click
- submit
Also
- input
- hover
- on change
- on page load
- on mouse over
- on key release
* Event listener
- code that is triggered when an event is fired
* Bind
- blind or tether an event listener to the event
* Event Handlers
- the code that runs in response to the event
There are lot of different ways of doing this.
Some are old - don't use thhem
What we will use:
****** DOM Level 2 Event Handlers ********
1 - I need an element from the DOM that I can attach an event to
use either
document.getElementById()
document.querySelector()
*/

let myContainer = document.getElementById('container');
let results = document.getElementById('results');

/*
3 -
Event handler
- the code that is envoked by the Event Listerner when an event is raised
*/

function handleClick(event) {
  console.log(event.target.id);
  let pTag = document.createElement('p');
  if (event.target.id) {
    pTag.textContent = `${event.target.id} was clicked.`
  } else {
    pTag.textContent = `Please click a box.`
  }
  results.appendChild(pTag);
}


/*
2 - Event Listener
- addEventListener take in 2 parameters
- 1 - the type of event as a string
- 2 - a callback function
elementName.addEventListener('typeOfEvent', functionName);
*/

myContainer.addEventListener('click', handleClick)

// addEventListener envokes the callback function when a click event occurs. It passing in an event object when it invokes the callback function
// handleClick(event)

/*
// CALLBACK FUNCTION EXAMPLE
function greeting(name) {
  console.log(`Hello ${name}`);
}
function capitalize(name) {
  let cap = name.toUpperCase();
  console.log(cap);
}
function processUserInput(callback) {
  let name = prompt('what is your name?');
  callback(name); // the function we passed gets invoked by this processUserInput function
}
processUserInput(greeting);
processUserInput(capitalize);
*/




/*
DO NOT DO THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
bad event listeners
older ways of doing this, that will only work 70% of the time.
- event listener in the HTML
Ex.:
<article onClick="handleClick">
- this type of event listener in the JavaScript
Ex:
button(document.getElementById('button')).onSubmit=handleEvent;
in HTML:
<div id="button"></div>
*/
