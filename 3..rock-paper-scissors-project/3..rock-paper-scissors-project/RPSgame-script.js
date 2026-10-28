// 0-1/3 -> rock
// 1/3 - 2/3 -> paper
// 2/3 - 1 -> scissors
// console.log("JavaScript is connected!");
let wins = 0
let losses = 0
let ties = 0

function computerMove() {
    const randomNumber = Math.random();
    let Move = '';


    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        Move = 'Rock'
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        Move = 'paper'
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        Move = 'scissors'
    }

    return Move;
}

function myMove(playerMove, computerChoice) {
    let result = '';

    if (computerChoice === playerMove) {
        result = 'tie';
        ties++;
    }
    else if ((playerMove === 'Rock' && computerChoice === 'scissors') ||
        (playerMove === 'paper' && computerChoice === 'Rock') ||
        (playerMove === 'scissors' && computerChoice === 'paper')) {
        result = 'you win';
        wins++;
    }
    else {
        result = 'you lose';
        losses++;
    }

    alert(`you picked ${playerMove}. computer picked ${computerChoice}.${result}.`);
}

function playGame(playerMove) {

    const computerChoice = computerMove();
    myMove(playerMove, computerChoice);
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('ties').innerHTML = ties;
}

function resetScore() {
    wins = 0;
    losses = 0;
    ties = 0;

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('ties').innerHTML = ties;
}