/* 'use strict';

let hasDriversLicense =  false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


'use strict'

function logger() {
    console.log('My name is jonas');
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
console.log(apples, oranges)
const juice = `Juice with ${apples} apples and ${oranges} oranges`
return juice;
}

const appleJuice =  fruitProcessor(5, 0);
console.log(appleJuice)

console.log(fruitProcessor (5,0))


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)




// function declaration
'use strict'

const age = calcAge1(1950);



function calcAge1 (birthYear){
   return 2037 - birthYear;
    }


console.log(age)

// function expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
      }

      const age2 = calcAge1(1950)
      console.log(age, age)
      

// arrow function 
'use strict'


const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years` 
}


console.log(yearsUntilRetirement(1996, 'jonas'));

function cutFruitPieces(fruit){
    return fruit * 4
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
    }

    console.log(fruitProcessor(10,3));



const calcAge = function(birthYear) {
    return 2037 - birthYear;

}

    const yearsUntilRetirement = function (birthYear, firstname) {
        const age = calcAge(birthYear)
        const retirement = 65 - age;


        if(retirement > 0) {
            console.log( `${firstname} retires in ${retirement} years`)
            return retirement;
        } else {
            console.log( `${firstname} has already retired`)
            return -1;
            
        }



        
    }

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1970, 'Jonas'))




const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years` 
}




const calcAverage = (a,b,c) => (a+b+c) / 3;
console.log(calcAverage(3,4,5))

// test 1
let scoreDoplhins = calcAverage (44, 23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDoplhins, scoreKoalas)

const checkWinner = function(avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Doplhins win ${avgDolphins}, vs ${avgKoalas})`) 
   } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgDolphins}, vs ${avgKoalas})`)
   } else {
       console.log('Nobody Wins')
   }

}

checkWinner(scoreDoplhins, scoreKoalas)


// test 2
scoreDoplhins = calcAverage (85, 54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDoplhins, scoreKoalas)
checkWinner(scoreDoplhins, scoreKoalas)



 

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length -1]);

friends[2] = 'Jay'
console.log(friends)

const firstName = 'Jonas'
const jonas = [firstName, 'Schemdtmann', 2037 - 1991,
'teacher', friends ];

console.log(jonas)
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const newYears = [1990, 1967, 2002, 2010, 2018];


const age1 = calcAge(newYears[0])
const age2 = calcAge(newYears[1])
const age3 = calcAge(newYears[newYears.length -3])
console.log(age1, age2, age3)

const ages = [calcAge(newYears[0]), calcAge(newYears[1])]
console.log(ages)



const friends = ['Michael', 'Steven','Peter'];
// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength)

friends.unshift('John')
console.log(friends)

// Remove elements

friends.pop(); // Last
const popped = friends.pop()
console.log(popped);
console.log(friends)

friends.shift() // first
console.log(friends)

friends.push(23)
console.log(friends.indexOf(23))
console.log(friends.includes('Michael'))

if (friends.includes('Steven'))
console.log('you have a friend')





const tip = function(bill) {
return bill >= 50 && bill <= 300 ? bill * 15 / 100: bill * 20 / 100

}
console.log(tip(111))
const bills = [125, 555, 44]
const tips = [tip (bills[0]), tip (bills[1]), tip (bills[2])]
console.log(bills, tips)


const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(total)





const calcTip = function(bill) {
    return bill >= 50 && bill <= 300? bill * 15/100: bill * 20/100
}

console.log(calcTip(100))

bills = [125, 555, 44]

tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]

total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2] ]

console.log(total)


const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Learn', 'To Rock']
};


console.log(jonas)

console.log(jonas.lastName);
console.log(jonas['age'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, Age, Job, and Friends')

console.log(jonas[interestedIn]);

if (jonas[interestedIn]){
    console.log(jonas.interestedIn)
} else {
    console.log('Wrong Request')
}

jonas.location = 'Portugal'
jonas['twitter'] = '@Jonasschmedtman'
console.log(jonas);


// challenge
// 'jonas has 3 friends and his best friend is caled michael'

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Learn', 'To Rock']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called  ${jonas.friends[0]}`)


const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job: 'teacher',
    friends: ['Michael', 'Learn', 'To Rock'],
    hasDriverLicense: false,



    // calcAge: function(){
    //     return 2037 - this.birthYear
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear
        return this.age
    } , 
    hDLicense : function(){
        return this.hasDriverLicense === true? this.hasDriverLicense = 'Has Driver License': this.hasDriverLicense = 'has no driver license'
    }
};

console.log(jonas.calcAge())
console.log(jonas.age)
// console.log(jonas['calcAge'](jonas.birthYear))

// challenge
console.log(jonas.hDLicense())

console.log(`${jonas.firstName} is a ${jonas.age}-year old teacher, and he ${jonas.hasDriverLicense} `)



const mark = {
    fullName : 'Mark Miller',
    mass :78 ,
    height : 1.69,
    calcBMI : function(){
    this.bmi = this.mass/this.height**2
        return this.bmi 
    }

}

const john = {
    fullName : 'John Smith',
    mass : 92 ,
    height : 1.95,
    calcBMI : function(){
    this.bmi = this.mass/this.height **2
    return this.bmi
}
}

console.log(john.calcBMI())
console.log(mark.calcBMI())


nice = john.bmi >= mark.bmi? console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}) !`): console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)


'use strict'
console.log('lifting weights repetition 1 ')
console.log('lifting weights repetition 2 ')


// for loop keeps running while condiiton is TRUE
for(let rep = 1; rep <= 10; rep ++) {
    console.log(`Lifting weights ${rep}`)
}


for(let repetition = 5; repetition <=10; repetition++){
    console.log(repetition)
}



const jonas = ['Jonas', 
'Schemdtmann',
 2037 - 1991,

'teacher',
 ['Michael', 'Peter', 'Steven'],
true ];

const types = [];


for (let i = 0; i < jonas.length; i++){
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i])

    // Filling types array

    types.push(typeof jonas[i])

}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
   ages.push(2037 - years[i])
}
console.log(ages)

// continue and break

console.log(' --- only strings ---- ')
for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string')continue;

    console.log(jonas[i], typeof jonas[i])

}

console.log(' --- break with number ---- ')
for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number')break;

    console.log(jonas[i], typeof jonas[i])

}



const jonas = ['Jonas', 
'Schemdtmann',
 2037 - 1991,

'teacher',
 ['Michael', 'Peter', 'Steven']]

 for (let i = jonas.length-1; i>= 0; i--){
     console.log(i,jonas[i])
 }



for(let exercise = 1; exercise < 4; exercise++){
    console.log(`------ Starting exercise ${exercise}`)

for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise: ${exercise} Lifting weight repetition ${rep} `)
    
}
}

for(let rep = 1; rep <= 10; rep ++) {
    console.log(`Lifting weights ${rep}`)
}
let rep = 1;
while(rep <= 10) {
    console.log(`Lifting weights ${rep}`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)

while(dice !== 6); {
console.log(`You rolled a ${dice}`)
dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) console.log('log about to end')
}
*/

    const calcTip = function(bill) {
        return bill >= 50 && bill <= 300? bill * 15/100: bill * 20/100
    }
    
    
const bills = [22,295,176,440,37,105,10,1100,86,52]
    
    // tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]
    
    // total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2] ]
    
    // console.log(total)
 const tips = []
 const total = []


for(let y = 0; y < bills.length; y++) {
    const tip = calcTip(bills[y])
    tips.push(tip)
    total.push(tip + bills[y])
}  
console.log(bills, tips, total)

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]
    sum += arr[i]

}
return sum / arr.length

}

console.log(calcAverage([2,3,7]))
console.log(calcAverage(total))
console.log(calcAverage(tips))


