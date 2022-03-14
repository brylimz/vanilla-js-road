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
let score = 20

document.querySelector('.score').textContent = score

const secretNumber = Math.trunc(Math.random() *20) + 1;
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
console.log(typeof guess)


// when there is no input
if(! guess){
    document.querySelector('.message').textContent = 'No Number'

// when correct
} else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 
    'Correct Number!';
    
    score++
    document.querySelector('.score').textContent  = score
    document.querySelector('body').style.backgroundColor ='#60b347'
 // when too high   
} else if(guess > secretNumber) {
    if(score > 1 ) {
    document.querySelector('.message').textContent = 'Too High!'
    score --
    document.querySelector('.score').textContent  = score
} else {
    document.querySelector('.message').textContent = 'You lose the game !'
    document.querySelector('.score').textContent  = 0

}
// when too lower
} else if(guess < secretNumber) {
    if(score > 1 ) {
    document.querySelector('.message').textContent = 'Too Low!'
    score--
    document.querySelector('.score').textContent = score
    document.querySelector('.score').textContent  = 0

} else {
    document.querySelector('.message').textContent = 'You lose the game !'
}


}

});
