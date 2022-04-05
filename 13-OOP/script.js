'use strict';

class PersonCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    
    }

    calcAge() {
        const age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
    // leap year by age
    leapYearbyAge() {
        const age = new Date().getFullYear() - this.birthYear;
        if (age % 4 === 0) {
            console.log('Leap year');
        } else {
            console.log('Not a leap year');
        }
    }
    
    get age(){
        return new Date().getFullYear() - this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')){
            const names = name.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
    // introduce
    introduce() {
        console.log(`Hi, I'm ${this.fullName}`);
    }

}

class StudentCL extends PersonCL{
    constructor(fullName, birthYear, course){
// always need to happen first
        super(fullName, birthYear);
        this.course = course;
    }
}

const martha = new StudentCL('Martha', 1990, 'JS');

// coding challenge





/*
// challenge
const Car = function(make, speed){
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.charge = charge


}
// link to prototype
EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;

}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla','20',23)
tesla.chargeBattery(90)
console.log(tesla);
tesla.brake()
tesla.accelerate()







const Person = function(firstname, birthYear){
    this.firstname = firstname;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    this.age = new Date().getFullYear() - this.birthYear;
};

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`Hi, I am ${this.firstName}, a ${this.course} student`);
};


const mike = new Student('mike', 1990, 'JS');



mike.introduce()
mike.calcAge();
console.log(mike); 





// create es6 class 
class Car {
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    // add a getter speedUS
    get speedUS(){
        return this.speed / 1.6;
    }   
    // add a setter speedUS
    set speedUS(speedUS){
        this.speed = speedUS * 1.6;
    }

}

const newCar = new Car('Ford', 120);
console.log(newCar.speedUS);
newCar.speedUS = 50;
console.log(newCar.speed);


const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;

}


const jonas = new Person('Jonas', 1992);
console.log(jonas);



// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function() {
    const age = new Date().getFullYear() - this.birthYear;
    console.log(age);
    }

jonas.calcAge();

console.log(jonas.__proto__);

Person.prototype.leapYearbyAge = function() {
    const age = new Date().getFullYear() - this.birthYear;
    if (age % 4 === 0) {
        console.log('Leap year');
    } else {
        console.log('Not a leap year');
    }
}

jonas.leapYearbyAge();


console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

// .prototypeofLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


console.log(jonas.__proto__.__proto__);

console.log(Person.prototype.constructor);


// coding challenge
const Car = function(brand, speed) {
    // speed in km/h
    this.brand = brand;
    this.speed = speed;

}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.brand} current speed is Accelerate to ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.brand} current speed is Decrease to ${this.speed} km/h`);
}

const BMW = new Car('BMW', 100);

console.log(BMW)
BMW.accelerate()
BMW.brake()

const Mercedes = new Car('Mercedes', 95);
Mercedes.accelerate()
Mercedes.brake()


class PersonCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    
    }

    calcAge() {
        const age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
    // leap year by age
    leapYearbyAge() {
        const age = new Date().getFullYear() - this.birthYear;
        if (age % 4 === 0) {
            console.log('Leap year');
        } else {
            console.log('Not a leap year');
        }
    }
    
    get age(){
        return new Date().getFullYear() - this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')){
            const names = name.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }


}

const jessica = new PersonCL('Jessica', 1996);
jessica.fullName = 'Jessica Smith';


console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

jessica.leapYearbyAge()

PersonCL.prototype.greet = function() {
    console.log(`Hello, my name is ${this.firstName}`);
}
jessica.greet()

const account = {
owner : 'Jessica',
movements : [200, -100, -300, 500],

get latest(){
    return this.movements.slice(-1).pop();

},

set latest(mov){
    this.movements.push(mov);
}

}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

*/


