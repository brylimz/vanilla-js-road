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


// Partial application 
const addTax = (rate, value) => (value + value) * rate;
console.log(addTax(10 , 200))

const addVAT = addTax.bind(null, 0.23)
// addVAT = value => value  + value * 0.23
console.log(addVAT(23))

const addTaxRate = function(rate){
    return function(value){
        return (value + value) * rate
    }
}
const addvat2 = addTaxRate(0.23)
console.log(addvat2(10))


const poll = {
    question: 'what is your favourite programming language',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

    answers: new Array(4).fill(0),
    registerNewAnswer(){
        // get answer
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')} \n(write option number)`))
    
        console.log(answer)
    // register answer

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer] ++; 
this.displayResults();
this.displayResults('String');
},

displayResults(type = 'array') {
    if(type=== 'array'){
        console.log(this.answers);
    } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }

}



};

// poll.registerNewAnswer()

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))


poll.displayResults.call({answers: [5,2,3]}, 'string' )

const runOnce = function(){
    console.log('this will never run again')
}
runOnce();

//IIFE
(function() {
    console.log('this will never run again')
    const isPrivate = 23;

})();


(() => console.log('this will also never run again'))();

{
    const isPrivate = 23;
var notPrivate = 46
}

console.log(notPrivate)

*/