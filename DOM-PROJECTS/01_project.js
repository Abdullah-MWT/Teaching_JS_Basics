const randomNumber = Math.round((Math.random() * 100) + 1)

const userInput = document.querySelector('.guessField');
const submitbtn = document.querySelector('.btn-center');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submitbtn.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
       validateGuess(guess)
        
    })
}

function validateGuess(guess) {
     if (isNaN(guess)) {
        alert('Please Enter a Valid Number');
     } else if(guess < 1){
        alert('Please Enter a number greater than 1')
     } else if(guess > 100){
        alert('Please Enter a number less than Hundred')
     } else{
        prevGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number Was ${randomNumber}`)
            endGame();
        } else{
          displayGuess(guess);
          checkGuess(guess);
        }
     }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You Guessed it Right');
        endGame();
    } else if(guess < randomNumber){
        displayMessage('Your Guess is Too Low')
    } else if(guess > randomNumber){
        displayMessage('Your Guess is Too High')
    }
}

function displayGuess(guess) {
     userInput.value = '';
     guessSlot.innerHTML += guess + ' ';
     numGuesses++
     remaining.innerHTML = `${11 - numGuesses}`
   }

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    console.log(message);
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled')
}