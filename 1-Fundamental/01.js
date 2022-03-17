/* let js = 'amazing';
console.log(40+8+23+10);

console.log("james");
console.log(23);

let firstNamePerson = "byl";


console.log(firstNamePerson);


let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

if (myFirstJob === 'Programmer') {
   alert(myCurrentJob = 'Nice')
}



let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof javascriptIsFun)
console.log(typeof 'jone')


javascriptIsFun = 'Yes'

console.log(javascriptIsFun)

let year;

year = 3
console.log(year)
console.log(typeof year)

console.log(typeof null)

let age = 30;
age = 2

console.log(age)

const birthYear = 1991;

var job = 'programmer';
job = 'teacher'
console.log(job)

const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3 )


//assignment operators

const firstName = 'Byl';
const lastName = 'ZXC';
console.log(firstName + ' '  + lastName)

let x  = 10 + 5; //15
console.log(x);

x +=10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 100
x--;
console.log(x);


console.log(ageJonas > ageSarah);

console.log(ageSarah>=18)


const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018)



const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)


let x, y;
x = y = 25-10-5
console.log(x,y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageJonas, averageAge);



const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / heightJohn ** 2

console.log(BMIMark, BMIJohn);


const HigherBMI = BMIMark > BMIJohn
console.log(HigherBMI)


const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + ' ' +  job +'!'

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`


console.log(jonasNew)

console.log(`testing
multiline`);




const age = 15;


if(age>=18){console.log('Sarah can start driving license 🐱‍🏍')} else {
    const yearLeft = 18 - age
    console.log(`Sarah is too young. wait another ${yearLeft} years 😘` )

}



const birthYear = 2012;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)


const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / heightJohn ** 2
const HigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn, HigherBMI);


if (BMIMark>BMIJohn) {
    console.log(`Mark's BMI is ${BMIMark} higher than John's  ${BMIJohn}`)
    } else{ 
        console.log(`John's BMI is higher than Mark's`)
    }

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23);

// type coercion
console.log(' I am '+ 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' / '2')
console.log('23' > '18')

let n = '1' + 1 //'11'
n = n - 1;

console.log(n)



//  5 falsy values: 0, ``, undefined, null, NaN,

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))

console.log(Boolean(``))


const money = 100;
if (money) {
    console.log("Don't spend it all;")
} else {
    console.log('You Should get a job!')
}

let height = '0';
if(height) {
    console.log('Yay! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}

const age = 18 ;
if(age === 18){console.log('strict')}
if(age == 18){console.log('loose')}

const favourite  = Number(prompt("What's your favorite number?"))
console.log(typeof (favourite))

if(favourite === 23) {
    console.log('Cool 23 is an amazing number!')
} else if (favourite === 7) {
    console.log(`Cool 7 is an amazing number`)
} else if (favourite === 5) {
    console.log('Cool 6 is also a cool number')

} else {
    console.log(`${favourite} is not 23 or 7 or 6`)
}

if(favourite !== 23) console.log('Why not 23');



const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision
//     ){
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);


if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive')
}



const dolphins = (1) / 3
const koalas = (1) / 3
console.log(dolphins, koalas)

const dolphins1 = (97+112+101) / 3
const koalas1 = (109+95+123) / 3
console.log(dolphins1, koalas1)

const doplhins2 = (97+112+101) / 3
const koalas2 = (109+95+106) / 3
console.log(doplhins2, koalas2)


minimumScore = 100

if (dolphins > koalas &&  dolphins >= 100){
console.log(`dolphins win`) 
} else if (dolphins < koalas && koalas >=100) {
    console.log('koalas win')
} else if (dolphins === koalas && dolphins >=100 && koalas 
    >=100) {
    console.log('its a draw')
} else { 
    console.log(`No team reached ${minimumScore} score`)
}



const day = 'monday';
switch (day){
    case 'monday':
    console.log('nice')
    console.log('go to bali')
    break

    case 'tuesday':
        console.log('go to spain')
        break

        case 'wednesday':
            case 'thursday':
            console.log('go to navi')
        break

            case 'friday':
                console.log('Record Videos')
                break

                case 'saturday':
                case 'sunday':
                    console.log('Happy Weekend')
                break
    
                default:
                    console.log('not a valid day')
}


if (day === 'monday') {
    console.log('nice')
    console.log('go to bali')

} else if (day ==='tuesday'){
    console.log('go to spain')
    
} else if (day ==='wednesday' || day === 'thursday') {
    console.log('go to navi')

} else if (day === 'friday') {
    console.log('record videos')

} else if (day === 'saturday' || day === 'sunday') {
    console.log('Happy Weekend ')

} else {
    console.log('Not a valid day')
}


const age = 18;
age >= 18 ? console.log('I like to drink wine') :
console.log('i like to drink water')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2; 
if(age >= 18){
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2)

console.log(`I like to drink ${age >=18 ? 'wine': 'water'}`)
*/


const  billValues = 430

const tip = billValues >= 50 && billValues <= 300 ? (billValues*15)/100 : (billValues*20)/100


console.log(tip)

const totalBill = billValues + tip
console.log(`The bill was ${billValues}, the tip was ${tip} and the total value is ${totalBill}`)



