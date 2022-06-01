let playerChoiceContainer = document.querySelector('#playerChoice');
let playerChoiceImg = document.createElement('img');
let computerChoiceContainer = document.querySelector('#computerChoice');
let computerChoiceImg = document.createElement('img');

// Default image for player and computer selection
playerChoiceImg.src = './images/blank.svg';
playerChoiceContainer.append(playerChoiceImg);

computerChoiceImg.src = './images/blank.svg';
computerChoiceContainer.append(computerChoiceImg);

let roundWinner = document.querySelector('.winnerOfRound');
let roundWon = document.createElement('h3');


roundWon.textContent = 'Pick your element';
roundWinner.appendChild(roundWon);


let scores = document.querySelector('.score');
let pscore = document.querySelector('#pScore');
let cscore = document.querySelector('#cScore');

playerScore = 0;
computerScore = 0;


const choices = document.querySelectorAll('.choiceBtn');

// Event listener
choices.forEach(choice => choice.addEventListener('click', singleRound));


function computerPlay() {
    rps = ['water', 'fire', 'grass'];
    randomThrow = Math.floor(Math.random() * rps.length);
    return(rps[randomThrow]);
}

function singleRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();


    console.log("You played:", playerSelection);
    console.log("Computer played:", computerSelection);


    // Player choice icon
    if (playerSelection == "water") {
        playerChoiceImg.src = './images/water.svg';
        playerChoiceContainer.append(playerChoiceImg);
    } else if (playerSelection == "fire") {
        playerChoiceImg.src = './images/fire.svg';
        playerChoiceContainer.append(playerChoiceImg);
    } else if (playerSelection == "grass") {
        playerChoiceImg.src = './images/grass.svg';
        playerChoiceContainer.append(playerChoiceImg);
    }

    // Computer choice icon
    if (computerSelection == "water") {
        computerChoiceImg.src = './images/water.svg';
        computerChoiceContainer.append(computerChoiceImg);
    } else if (computerSelection == "fire") {
        computerChoiceImg.src = './images/fire.svg';
        computerChoiceContainer.append(computerChoiceImg);
    } else if (computerSelection == "grass") {
        computerChoiceImg.src = './images/grass.svg';
        computerChoiceContainer.append(computerChoiceImg);
    }
    

    if (playerSelection == computerSelection) {
        roundWon.textContent = 'It\'s a tie.';
        roundWinner.appendChild(roundWon);
    } else if (playerSelection == "water") {
        if (computerSelection == "fire") {
            roundWon.textContent = 'Player wins!';
            roundWinner.appendChild(roundWon);
            playerScore++;
        } else {
            roundWon.textContent = 'Computer wins!';
            roundWinner.appendChild(roundWon);
            computerScore++;
        }
    } else if (playerSelection == "fire") {
        if (computerSelection == "water") {
            roundWon.textContent = 'Computer wins!';
            roundWinner.appendChild(roundWon);
            computerScore++;
        } else {
            roundWon.textContent = 'Player wins!';
            roundWinner.appendChild(roundWon);
            playerScore++;
        }
    } else if (playerSelection == "grass") {
        if (computerSelection == "fire") {
            roundWon.textContent = 'Computer wins!';
            roundWinner.appendChild(roundWon);
            computerScore++;
        } else {
            roundWon.textContent = 'Player wins!';
            roundWinner.appendChild(roundWon);
            playerScore++;
        }
    }

    pscore.textContent = `Player score: ${playerScore}`;
    scores.appendChild(pscore);
    cscore.textContent = `Computer score: ${computerScore}`;
    scores.appendChild(cscore);

    if (playerScore == 5) {
        alert('Player won. Replay?');
        restart();
    } else if (computerScore == 5) {
        alert('Computer won. Replay?');
        restart();
    }
}


function restart() {
    window.location.reload();
}

