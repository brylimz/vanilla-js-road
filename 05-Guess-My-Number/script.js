'use strict';

/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'Correct number!'

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 16

document.querySelector('.guess').value = 23;
console.log(document.querySelectorAll('.guess').value)

*/

const number = Math.trunc(Math.random() *20) + 1;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
console.log(typeof guess)

if(! guess){
    document.querySelector('.message').textContent = 'No Number'
} else {

}


});
