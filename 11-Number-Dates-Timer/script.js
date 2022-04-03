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
  movementsDates: [
    '01/01/2019',
    '01/02/2019',
    '01/03/2019',
    '01/04/2019',
    '01/05/2019',
    '01/06/2019',
    '01/07/2019',
    '01/08/2019',
    '01/08/2019',
  ],
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
const movements_dates = document.querySelector('.movements__dates');
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

const displayMovements = function(movements, sort = false){
containerMovements.innerHTML='';
// .textContent = 0

const movs = sort? movements.slice().sort((a,b)=>b-a): movements;

movs.forEach(function(mov, i){
const type = mov > 0 ? 'deposit' : 'withdrawal'
// round movements
const roundedMov = Math.round(mov * 100) / 100;


const html=` 
<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${roundedMov.toFixed(2)}€</div>
</div>
`
containerMovements.insertAdjacentHTML('afterbegin', html);

})
}

displayMovements(account1.movements)



// Display Balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)

// round balance

labelBalance.textContent = `${acc.balance.toFixed(2)}€`;

}



// Display Sums
const calcDisplaySummary = function(acc) {

const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

labelSumIn.textContent = `${incomes.toFixed(2)}€`;

const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
labelSumOut.textContent = `${Math.abs(outcomes.toFixed(2))}€`;

const interest = acc.movements.filter(mov => mov > 0).map(deposit=> deposit * acc.interestRate /100).filter((int, i, arr) => {
  // console.log(arr);
  return int >= i;

}).reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interest.toFixed(2)}€`;

}

// display date text content
const displayDate = function() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  movements_dates.textContent = `${day}/${month}/${year}`;
}



// const update UI
const updateUI = function(acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);

}

// create user
const user = 'Steven Thomas Williams'; // stw

const createUsernames = function(accs){

accs.forEach(function(acc){
  acc.username = acc.owner.toLowerCase().split(' ').map(name=> name[0]).join('');



}
)


}



createUsernames(accounts);



// event handler
let currentAccount;



// Fake always logged in
currentAccount = account1
updateUI(currentAccount);
displayDate();
labelDate.textContent = new Date().toLocaleDateString();

// create timer countdown for logout five minutes
const timer = function(){
  const time = new Date();
  const timeLeft = new Date(time.getTime() + 300000);
  const timer = setInterval(function(){
    const now = new Date();
    const diff = timeLeft - now;
    const minutes = Math.floor(diff / 1000 / 60);
    const seconds = Math.floor(diff / 1000 % 60);
    labelTimer.textContent = `${minutes}:${seconds}`;
    if(diff < 0){
      clearInterval(timer);
      labelTimer.textContent = '00:00';
      containerApp.classList.add('app--logged-out');
      labelWelcome.textContent = 'Welcome to the Bank of the Future!';
      labelWelcome.classList.add('welcome--logged-out');
      labelDate.textContent = '';
      labelBalance.textContent = '';
      labelSumIn.textContent = '';
      labelSumOut.textContent = '';
      labelSumInterest.textContent = '';
      inputLoginUsername.value = '';
      inputLoginPin.value = '';
      inputTransferTo.value = '';
      inputTransferAmount.value = '';
      inputLoanAmount.value = '';
      inputCloseUsername.value = '';
      inputClosePin.value = '';
      btnLogin.classList.remove('login__btn--hidden');
      btnTransfer.classList.add('form__btn--hidden');
      btnLoan.classList.add('form__btn--hidden');
      btnClose.classList.add('form__btn--hidden');
      btnSort.classList.add('btn--hidden');
      containerMovements.innerHTML = '';
    }
  }, 1000);
}





btnLogin.addEventListener('click', function(e){
// preven form from submitting
  e.preventDefault();
 accounts.find
currentAccount = accounts.find(acc=> acc.username === inputLoginUsername.value)
console.log(currentAccount);

if(currentAccount?.pin === Number(inputLoginPin.value)){
  containerApp.style.opacity = 100;  
  labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
  labelDate.textContent = new Date().toLocaleDateString();
  
  labelBalance.textContent = `${currentAccount.movements.reduce((acc, mov) => acc + mov, 0)}€`;

displayMovements(currentAccount.movements);

calcDisplayBalance(currentAccount);

calcDisplaySummary(currentAccount);

timer()

//clear form
inputLoginPin.blur();
inputLoginUsername.value = '';
inputLoginPin.value = '';
} else{

  alert('Wrong pin');
  

}



});


btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc=> acc.username === inputTransferTo.value);
inputTransferAmount.value = inputTransferTo.value =  ''


if(amount > 0 && receiverAcc &&
  currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username)
{  
// doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
// update UI 

// create date transfer
const date = new Date();
const dateString = date.toLocaleDateString();

label.textContent = dateString;


updateUI(currentAccount);

} 
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1))
  {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);

  } else{
    alert('You can not loan more than 10% of your balance');
  }
});


btnClose.addEventListener('click', function(e){
  e.preventDefault();
if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){

  const index = accounts.findIndex(
    acc => acc.username === currentAccount.username
  );
// remove from array
  accounts.splice(index, 1);
console.log(index)
labelWelcome.textContent = 'Goodbye';
containerApp.style.opacity = 0;
} else {
  alert('Wrong pin');
}
})

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  
  displayMovements(currentAccount.movements, !sorted);
 sorted = !sorted;

})


labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row , i){
    if ( i % 2 === 0){
      row.style.backgroundColor = '#f0f0f0';
  
      if(i % 3 === 0)
      row.style.backgroundColor = 'blue';
  
    }})}
  )

  
accounts.forEach(function(acc){
  acc.date = new Date();
})

console.log(accounts);







/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));

console.log(2 ** 53 - 1);

// create new properties Date called in accounts array

console.log(new Date(account1.Date));

console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 11, 31, 23, 59, 59);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(Date.now());

future.setFullYear(2038);
console.log(future);
/*

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

const isEven = function(num){
  return num % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(6));



console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); 

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number(parseInt('23.5', 10)));

console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(20));

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+20));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2))

console.log(Math.max(5,18,23,11,2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);


const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);

console.log(randomInt(10, 20));

// Rounding Integers


// rounding decimals
console.log((2.7).toFixed(1));


// Base 10 - 0 to 9 
// Binary Base 2 - 0 and 1


const dogs = [{ weight: 22, curFood:250, owners: ['Alice', 'Bob']},
{weight: 8, curFood: 200, owners: ['Matilda']},
{weight: 13, curFood: 275, owners: ['Sarah', 'John']},
{weight: 32, curFood: 340, owners: ['Michael']},
]

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'too much' : 'not enough'}`);


// 3. new array eat too much
const eatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(eatTooMuch);

const eatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(eatTooLittle);

// 4. new array names of the dogs that eat too much and too little
console.log(`Dogs that eat too much: ${eatTooMuch.join(', ')}` );
console.log(`Dogs that eat too little: ${eatTooLittle.join(', ')}` );

// 5. log to the console whether the is any dog exactly the amount of food that is recommended (just true or false)

const isExactly = dogs.some(dog => dog.curFood === dog.recFood);
console.log(isExactly);

// 6. log to console whether the is any dog eating an okay amount of food (try to reuse the condition from 5) 
const checkEatingOkay = dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)

console.log(checkEatingOkay);

// 7. create an array containing the dogs that are eating an okay amount of food
const eatingOkay = dogs.filter(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1);
console.log(eatingOkay);


// create a shallow copyof the dogs array and sort it by recommended food portion is an ascending order
const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);




// 1
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => (cur >= 1000 ? ++count : count) , 0)

console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000)
);
console.log(numDeposits1000);


let a = 10;
console.log(++a);
console.log(a++);

// 3
const {deposit, withdrawals} = accounts
.flatMap(acc => acc.movements)
.reduce(
  (sums, cur) => {
sums[cur > 0 ? 'deposit' : 'withdrawals'] += cur;

    // cur > 0 ? (sums.deposit += cur) : (sums.
//   withdrawals += cur); 
return sums;
}, 
{deposit: 0, withdrawals:0}
);  

console.log(deposit, withdrawals);

// 4
// this is a nice title -> This Is A Nice Title

const convertToTitleCase = function(str) {
const exceptions = ['a', 'an','the','but','or','on','in','with']
const words = str.split(' ');
const titleCased = words.map(word => { 
  if(exceptions.includes(word)){
    return word.toLowerCase();
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
});
return titleCased.join(' ');
}
console.log(convertToTitleCase('this is a nice title'));




const arr = ([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7));

const x = new Array(7)
console.log(x);
// console.log(x.map(() => 5))
x.fill(1,3,5)
console.log(x);

arr.fill(23,2,6)
console.log(arr);

// Array.from 

const y = Array.from({length: 7}, () => 1)
console.log(y);

const z = Array.from({length : 7}, (_, i) => i + 1)

console.log(z)

labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value')
  
)
const abc  = movementsUI.map(mov => Number(mov.textContent.replace('€', '')));
console.log(abc);

}); 



// Strings
const owners = ['jonas','zach ', 'adam', 'martha']
console.log(owners.sort())
console.log(owners);


// Numbers
console.log(movements);
console.log(movements.sort());

//  return < 0, A, B (keep order)
// return > 0, B, A ( switch order)

// ascending order
movements.sort((a, b)=> {
  if(a > b)
    return 1;
    if(b >a)
      return -1;
    }
)
console.log(movements);

// descending order
movements.sort((a, b)=> {
  if(a > b)
    return -1;
    if(b >a)
      return 1;
    }
)
    console.log(movements);

    // ascending 
    movements.sort((a, b)=> a - b);
   // descending
    movements.sort((a, b)=> b - a);

    console.log(movements);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const arr = [[1,2,3], [4,5,6], [7,8]]
console.log(arr.flat());

const arrDepp = [[1,2], 3, [4,5], 7, [8,9]]
console.log(arrDepp.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);



console.log(movements)
// Equality
console.log(movements.includes(-130));


// SOME : CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposites = movements.some(mov => mov > 0)
console.log(anyDeposites);

// Every : CONDITION
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))





const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal)
console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams')
console.log(account)


// const account6 = accounts.find(function(acc){
//   return acc.owner === 'Steven Thomas Williams';
// })
// console.log(account6)



// PIPELINE

const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * 1.1).reduce((acc, mov )=>acc + mov, 0)
console.log(totalDepositsUSD)



const calcAverageHumanAge = ages => ages
.map(age =>(age <= 2 ? 2 * age : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i ,arr ) => acc + age / arr.length, 0)
const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3])

console.log(avg1)


const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <=2 ? 2 * age : 16 + age * 4);
const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges)
  console.log(adults)
const average = adults.reduce((acc, age, i, arr) => acc + age, 0) / adults.length;
console.log(average)
}
calcAverageHumanAge([5,2,4,1,15,8,3]);

console.log(movements)
// acumulator -> snowball
const balance = movements.reduce(function(acc, cur, i, arr){
console.log(`Iteraation ${i}: ${acc}`);
return acc + cur 


}, 0)



const balance2 = movements.reduce((acc, cur, i , arr) => acc + cur, 0)

console.log(balance2)


// maximum value
console.log(Math.max(...movements))
const max = movements.reduce((acc, mov) => {
if (acc > mov)
return acc;
else 
return mov;
}, movements[0])

console.log(max
  
)






const deposits = movements.filter(function(mov) {
return mov > 0
})

console.log(deposits);

const withdrawals = movements.filter(mov=> mov < 0) 
console.log(withdrawals)






const user = 'Steven Thomas Williams'; // stw

const createUsernames = function(accs){

accs.forEach(function(acc){
  acc.username = acc.owner.toLowerCase().split(' ').map(name=> name[0]).join('');

}
)


}


createUsernames(accounts);
console.log(accounts)





const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd); 
console.log(movementsUSD);

const movmeentsUSDfor = []
for(const mov of movements){
  movmeentsUSDfor.push(mov * eurToUsd)
}
console.log(movmeentsUSDfor)


const movementsDescriptions = movements.map((movement, i , arr) => {

return `Movement ${i+1}: you ${movement > 0? 'deposit': 'withdrew '} ${Math.abs(movement)}`

  // if(movement > 0) {
  //   return `movement ${i + 1} : you deposited ${movement}`
  // } else{
  //   return `movement ${i + 1} : You withdrew ${Math.abs(movement)}`;
  // }
}

)

console.log(movementsDescriptions);



const checkdogs = function(dogsJulia, dogsKate){
const dogsJuliaCorrected = dogsJulia.slice();
dogsJuliaCorrected.splice(0, 1)
dogsJuliaCorrected.splice(-2)

const dogs = dogsJuliaCorrected.concat(dogsKate)
console.log(dogs)

dogs.forEach(function(dog, i){
if(dog>=3) {
  console.log(`dog number ${i+1} | is an adult, and is ${dog} years old`);
} else {
  console.log(`dog number ${i+1} is still a puppy`);
}
})
}

checkdogs([3,5,2,12,7], [4,1,15,8,3])






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
