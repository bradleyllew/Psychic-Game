
var winsSelector = document.getElementById('wins');
var lossesSelector = document.getElementById('loss');
var leftSelector = document.getElementById('left');
var soFarSelector = document.getElementById('soFar');

var computerChoices = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
var wins = 0;
var losses = 0;
var left = 9;
var soFar;




document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log('event', event);
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('user guess', userGuess);
    console.log('computer guess', computerGuess);

    for (i = 0; i < 27; i++) {
        console.log(i);

        if (userGuess === computerGuess) {
            wins++;
            winsSelector.innerText = wins;
            left - 1;
            leftSelector.innerText = left;
            break
        } else {
            losses++;
            lossesSelector.innerText = losses;
            left - 1;
            leftSelector.innerText = left;
            soFar.push(computerChoices);
            // soFar.return = userGuess;

        } if (left === 0) {
            losses++;
            lossesSelector.innerText = losses;
            left = 9;
            leftSelector.innerText = left;
        };

    };
}
