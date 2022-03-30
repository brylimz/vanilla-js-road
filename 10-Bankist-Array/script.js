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
  <div class="movements__value">${mov}€</div>
</div>
`
containerMovements.insertAdjacentHTML('afterbegin', html);

})
}

displayMovements(account1.movements)



// Display Balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance}€`;

}



// Display Sums
const calcDisplaySummary = function(acc) {

const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

labelSumIn.textContent = `${incomes}€`;

const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
labelSumOut.textContent = `${Math.abs(outcomes)}€`;

const interest = acc.movements.filter(mov => mov > 0).map(deposit=> deposit * acc.interestRate /100).filter((int, i, arr) => {
  // console.log(arr);
  return int >= i;

}).reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interest}€`;

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const arr = [[1,2,3], [4,5,6], [7,8]]
console.log(arr.flat());

const arrDepp = [[1,2], 3, [4,5], 7, [8,9]]
console.log(arrDepp.flat(2));

/*

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
