

'use strict';
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

*/

