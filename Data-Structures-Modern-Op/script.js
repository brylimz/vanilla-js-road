

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  

  order: function(starterIndex, mainIndex){
 return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];


},

orderDelivery: function({starterIndex = 1 , mainIndex = 0, time = '20:00', address}){
console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)


}
,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },



  orderPasta: function(ing1, ing2, ing3){
console.log(`Here is your delecition pasta with ${ing1}, ${ing2}, ${ing3}`)},

orderPizza: function(mainIngredient, ...otherIngredients){
  console.log(mainIngredient);
  console.log(otherIngredients)
}
};
//  DECONSTRUCT OPERATOR
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  

  order: function(starterIndex, mainIndex){
 return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];


},

orderDelivery: function({starterIndex = 1 , mainIndex = 0, time = '20:00', address}){
console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)


}
,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

};

console.log(restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21', 
  mainindex: 2,
  starterindex: 2,
}))

console.log(restaurant.orderDelivery({
  address : 'Via',
  starterIndex: 1,
}))


const {name, openingHours, categories} = restaurant;
console.log(name,openingHours,categories)

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags)
// default value
const {menu= [], starterMenu: starters = []} = restaurant
console.log (menu, starters)

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14}

// ({a, b} = obj)
console.log(a, b)

// nested object 
const {fri: {open:o, close:c}} = restaurant.openingHours 
console.log(o, c)

/*
const arr = [2,3,4]

const [x,y,z] = arr
console.log(x,y,z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

[main, secondary] = [secondary, main]
console.log(main, secondary)


console.log(restaurant.order(2, 0))
const [starter, mainCourse] = [restaurant.order(2, 0) ]
console.log(starter, mainCourse)

const nested = [ 2,5, [5,6]]
// const [i,,j] = nested;
// console.log(i, j)
const [i,  ,[j, k]] = nested
console.log(i, j, k)

// default values 
const [p, q, r] = [8, 9 ]
console.log(p,q,r)



// SPREAD OPERATOR

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  

  order: function(starterIndex, mainIndex){
 return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];


},

orderDelivery: function({starterIndex = 1 , mainIndex = 0, time = '20:00', address}){
console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)


}
,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },


orderPasta: function(ing1, ing2, ing3){
console.log(`Here is your delecition pasta with ${ing1}, ${ing2}, ${ing3}`)}
};

const arr = [7, 8, 9];
const badNewArr = [1,2, arr[0], arr[1]]
console.log(badNewArr)

const newArr = [1, 2, ...arr];
console.log(newArr)

console.log([1, 2, ...arr])

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu)

// Copy array
const mainMenuCopy = {...restaurant.mainMenu};
// join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu) 

const str = 'jonas'
const letters = [...str, '1']
console.log(letters[0])

// Real - world example
// const ingredients = [prompt('let\'s make pasta! Ingredient 1?'), 
// prompt('let\'s make pasta! Ingredient 2?'), 
// prompt('let\'s make pasta! Ingredient 3?')]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

// restaurant.orderPasta(...ingredients)

// objects 
const newRestaurant = {...restaurant, founder : 'Guze'}
console.log(newRestaurant)

const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy)
console.log(restaurant.name)


// REST OPERATOR


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  

  order: function(starterIndex, mainIndex){
 return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];


},

orderDelivery: function({starterIndex = 1 , mainIndex = 0, time = '20:00', address}){
console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)


}
,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },



  orderPasta: function(ing1, ing2, ing3){
console.log(`Here is your delecition pasta with ${ing1}, ${ing2}, ${ing3}`)},

orderPizza: function(mainIngredient, ...otherIngredients){
  console.log(mainIngredient);
  console.log(otherIngredients)
}
};


// 1(destructuring)

// SPREAD  because on right side of = 
const arr = [1,2, ...[3,4]];
console.log(arr)
//REST, because on left side of = 

const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others)

const [pizza, , Risotto, ...otherfood]  = [...restaurant.mainMenu, ...restaurant.starterMenu] 
console.log(pizza, Risotto, otherfood)

// Objects 
const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)

//2 

const add = function(...numbers){
let sum = 0;
for(let i = 0; i < numbers.length; i++) sum += numbers
[i];
console.log(sum)
};


add(2, 3)
add(5,3,7,2)
add(8,2,5,3,2,1,4)

const x = [23,5,7]
add(...x)

restaurant.orderPizza('mushroom', 'onion', 'olivers', 'spinach');

restaurant.orderPizza('mushroom')






// use any data type, return any data type short - circuiting

console.log(3  || 'jonas')
console.log('' || 'jonas');

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1)

const guest2 = restaurant.numGuest || 10
console.log(guest2);

console.log('----AND----')
console.log( 0 && 'jonas')
console.log( 7 && 'jonas')
console.log('hello' && 23 && null && 'jonas')

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')

}
restaurant.orderPizza && restaurant.orderPizza('nice', 'nice')

*/
// nullish operator
restaurant.numGuest = 10
const guest2 = restaurant.numGuest || 10

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect)


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = [...game.players[0]]
// const players2 =  [...game.players[1]]
// console.log(players1)
// console.log(players2)

// const gk1 = players1[0]
// const gk2 = players2[0]


// // const [a,b, ...others] = [1,2,3,4,5];
// // console.log(a,b,others)


// const [a, ...fieldPlayers] = [... players1]
// console.log(fieldPlayers)

// const [b, ...fieldPlayers1] = [... players2]
// console.log(fieldPlayers1)

// const [...allplayers] = [...players1, ...players2]
// console.log(allplayers)

// const[...players1final] = [...players1, 'thiago', 'coutinho', 'perisic']
// console.log(players1final)

// const team1 = game.odds['team1']
// const draw = game.odds['x']
// const team2 = game.odds['team2']


// const printGoal = function(number){
//  if(number[number] && game.scored[number]) {
//    plgame.players[number]
//    game.scored[number]
//   } 
//  console.log(`${players1[number]}, ${game.score[number]}`)
// }

// printGoal(11)

const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

const allplayers = [...players1, ...players2]
console.log(allplayers)
const playerFinal = [...players1, 'thiago', 'cooutinho', 'periscic']

const {odds: {team1, x: draw, team2}} = game
console.log(team1, draw, team2)

const printGoal = function(...players){
  console.log(`${players.length} goal were scored`)
 
}

// printGoal('davies', 'muller', 'lewandowski', 'kimmich')
// printGoal('davies', 'muller')
printGoal(...game.scored)


team1 < team2 && console.log('Team 1 is more likely to win')
