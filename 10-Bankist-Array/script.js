'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements){
containerMovements.innerHTML='';
// .textContent = 0
  movements.forEach(function(mov, i){
const type = mov > 0 ? 'deposit' : 'withdrawal'

const html=` 
<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}</div>
</div>
`
containerMovements.insertAdjacentHTML('afterbegin', html);

})
}

displayMovements(account1.movements)


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const checkdogs = function(dogsJulia, dogsKate){
const dogsJuliaCorrected = dogsJulia.slice();
dogsJuliaCorrected.splice(0, 1)
dogsJuliaCorrected.splice(-2)

const dogs = dogsJuliaCorrected.concat(dogsKate)
console.log(dogs)

dogs.forEach(function(dog, i){
if(dog>=3) {
  console.log(`dog number | is an adult, and is 5 years old`);
}
})
}

checkdogs([3,5,2,12,7], [4,1,15,8,3])









/*

currencies.forEach(function(value, key, map){
console.log(`${key}: ${value}`);

})

// set 
const curreniesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(curreniesUnique)
curreniesUnique.forEach(function(value,_,map) {
  console.log(`${value}, ${value}`);
})

//  for(const movement of movements) {
for(const [i, movement] of movements.entries()){
if(movement > 0) {
    console.log(`movement ${i + 1} : you deposited ${movement}`)
  } else{
    console.log(`movement ${i + 1} : you deposited ${Math.abs(movement)}`);
  }
}
console.log(`for each`);

movements.forEach(function(movement, i, arr){
 
  if(movement > 0) {
    console.log(`movement ${i + 1} : you deposited ${movement}`)
  } else{
    console.log(`movement ${i + 1} : you deposited ${Math.abs(movement)}`);
  }
})



/////////////////////////////////////////////////


// SLICE
let arr= ['a','b','c','d','e']
console.log(arr.slice(2,4))
console.log(arr.slice(-2));
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log([...arr])

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1)
arr.splice(1, 2)

console.log(arr);

// REVERSE

arr= ['a','b','c','d','e']
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());


// CONCAT
const letters = arr.concat(arr2)
console.log(letters);

// JOIN

console.log(letters.join(''));

*/
