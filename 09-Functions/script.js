'use strict';
/*
const bookings = []

const createBooking = function(flightNum, 
    numPassengers = 1,
     price = 199 * numPassengers) {
// numPassengers = numPassengers || 1;
// price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}


createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', undefined, 1000) 




//  store functions in variables or properties
const add = (a,b) => a + b 
console.log(add(5,3))

const counter = {
    value: 23,
    inc: function(){ console.log(this.value++) }

}


counter.inc.bind(add)



const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
console.log(oneWord('niASDFASdfdcedDFDFD111'))

const upperFirstWord = function(str) {
const [first, ...others] = str.split(' ');
return [first.toUpperCase(), ...others].join(' '); 
}
console.log(upperFirstWord('dfsdZX'))


// higher-order function
const transformer = function(str, fn){
console.log(`Original String: ${str}`);
    console.log(`Tranformed string: ${fn(str)}`);
console.log(`transformed by: ${fn.name}`);
}

transformer('Java is the best!', upperFirstWord);
 transformer('Java is the best', oneWord)

 
//  js uses callbacks all the time
 const high5 = function() {
 console.log('nice');
}
 document.body.addEventListener('click', high5)

 ['jonas','martha','adam'].forEach(high5);


 const greet = function(greeting){
     return function(name) {
         console.log(`${greeting} ${name}`);
     }
 }


 const greeterHey = greet('hey')
greeterHey('Jonas')
greeterHey('Steven')

greet('Hello')('Jonas')


//challenge 
const greetArr = greeting=> name => console.log(`${greeting} ${name}`);
*/

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings : [],
    book(flightNum, name) {
console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

this.bookings.push({flight: `${this.iataCode}${flightNum}`, name })    

}

 
}

console.log(lufthansa)
lufthansa.book(12, ' jonas')

const eurowings= {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};


const book = lufthansa.book;
// doesnt work
// book(23, 'sarah williams');

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 239, 15)


console.log(eurowings)

const swiss = {
    airline: 'Swiss air lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss,23,'23')

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData)

//blind method
// book.call(eurowings, 23, 'Sarah Williams')

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Steven Williams')
const bookEW23 = book.bind(eurowings, 23)

bookEW23('Jonas Schmedtmann')
bookEW23('Martha Cooper')

//  with Event Listeners
lufthansa.planes = 300
lufthansa.buyPlane = function(){
   console.log(this)
    this.planes++
    console.log(this.planes)
};
// lufthansa.buyPlane()
document.querySelector('.buy').addEventListener('click',
lufthansa.buyPlane.bind(lufthansa))

