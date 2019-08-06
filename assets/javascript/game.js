
var winsSelector = document.getElementById('wins');
var lossesSelector = document.getElementById('loss');
var leftSelector = document.getElementById('guessesLeft');
var soFarSelector = document.getElementById('guessesSoFar');

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var guessesSoFar =[];





document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log('event', event);
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('user guess', userGuess);
    console.log('computer guess', computerGuess);




    


    if (userGuess === computerGuess) {
        wins++;
        // winsSelector.innerText = wins;
        leftSelector.innerText = 9;


    } else {
        guessesLeft--;
        // leftSelector.innerText = guessesLeft;
        guessesSoFar.push(userGuess);
        console.log('guesses so far', guessesSoFar);
        // soFarSelector.innerText = guessesSoFar;
    };

    if (guessesLeft === 0) {
        loss++;
        // lossesSelector.innerText = loss;
        guessesLeft = 9;
        // leftSelector.innerText = guessesLeft;
        guessesSoFar.length = 0;
        
    };


    winsSelector.innerText = wins;
    lossesSelector.innerText = loss;
    soFarSelector.innerText = guessesSoFar.join(" ");
    leftSelector.innerText = guessesLeft;


}

