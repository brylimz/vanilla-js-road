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

// score
let score = 20
document.querySelector('.score').textContent = score


// generate secret number

let secretNumber = Math.trunc(Math.random() *20) + 1;
let highscore = 0;


// high score


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


// button check
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
console.log(typeof guess)





// when there is no input
if(! guess){
    // document.querySelector('.message').textContent = 'No Number'
    displayMessage('No number!')

// when correct
} else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 
    // 'Correct Number!';

    displayMessage('Correct Number!')
    score++
    document.querySelector('.score').textContent  = score
    document.querySelector('body').style.backgroundColor ='#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
    
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore
    }



 // when too high   
} else if(guess > secretNumber) {
    if(score > 1 ) {
    // document.querySelector('.message').textContent = 'Too High!'
    displayMessage('Too High')
    score --
    document.querySelector('.score').textContent  = score
} else {
    // document.querySelector('.message').textContent = 'You lose the game !'
displayMessage('You Lose the game')

    document.querySelector('.score').textContent  = 0

}
// when too lower
} else if(guess < secretNumber) {
    if(score > 1 ) {
    // document.querySelector('.message').textContent = 'Too Low!'

    displayMessage('Too Low')
    score--
    document.querySelector('.score').textContent = score
    

} else {
    // document.querySelector('.message').textContent = 'You lose the game !'
    displayMessage('you lose the game')

    document.querySelector('.score').textContent  = 0
}


}

});


// button again


document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() *20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing'
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222' 
    document.querySelector('.number').style.width = '15rem' 

    document.querySelector('.number').textContent = '?'

    document.querySelector('.score').textContent = score

})


