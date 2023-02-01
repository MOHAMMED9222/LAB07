'use strict'


// console.log(hi)
// our window into the DOM

let profileContainer = document.getElementById('storesinformation');

console.log(profileContainer);

let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m', '6 p.m.', '7 p.m.'];

function Store(city, min, max, avg, arrayofcookiesphr) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesperhour = arrayofcookiesphr
  this.renderList = function () {
    let ul = document.createElement('ul');
    storesinformation.appendChild(ul);

  for (let i = 0; i < hour.length; i++) {
  }
 }
}


let storesinformation = document.createElement('article')

profileContainer.appendChild(storesinformation)



let Firststore = {
  city: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  arrayofcookiesphr: [],

}
//console.log(Firststore);

let Secondstore = {
  city: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  arrayofcookiesphr: [],
 
}
//console.log(Secondstore);

let Thirdstore = {
  city: 'Dubai',
  min: 11,
  max: 38,
  avg: 2.3,
  arrayofcookiesphr: [],
  
}
//console.log(Thirdstore);

let Fourthstore = {
  city: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  arrayofcookiesphr: [],
 
}
//console.log(Fourthstore);

let Fifthstore =  {
  city: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  arrayofcookiesphr: [],

}
//console.log(Fifthstore);


// constructor function - a function that will create objects
// capitalize the name of function

// 




