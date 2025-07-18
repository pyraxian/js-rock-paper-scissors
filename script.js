/* Score variables */
let humanScore = 0;
let computerScore = 0;

/* Button event listener */
const btn = document.querySelector("#buttonContainer");

btn.addEventListener("click", (event) => {
    console.log(`${event.target.id} was clicked`);
    playRound(event.target.id, getComputerChoice());
});

/* Generate computer's game choice */
function getComputerChoice() {

    let num = Math.floor(Math.random() * 3);
    
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Plays one round of rock, paper, scissors, incrementing correct score value */
function playRound(humanChoice, computerChoice) {

    const choicesDisplay = document.querySelector('#choices');
    const roundResults = document.querySelector('#roundResults');
    const scoreDisplay = document.querySelector('#score');
    const matchResults = document.querySelector('#matchResults');

    // Clear match results from previous match
    matchResults.textContent = '';

    // console.log(`Player chose ${humanChoice}. Computer chose ${computerChoice}.`);
    choicesDisplay.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}.`;
    
    if (((humanChoice === 'rock') && (computerChoice === 'scissors')) || 
        ((humanChoice === 'paper') && (computerChoice === 'rock')) || 
        ((humanChoice === 'scissors') && (computerChoice === 'paper'))) {
        // console.log("Player wins!");
        roundResults.textContent = 'Player wins!';
        humanScore++;
    } else if (((humanChoice === 'rock') && (computerChoice === 'paper')) || 
               ((humanChoice === 'paper') && (computerChoice === 'scissors')) || 
               ((humanChoice === 'scissors') && (computerChoice === 'rock'))) {
        // console.log("Computer wins!");
        roundResults.textContent = 'Computer wins!'
        computerScore++;
    } else {
        // console.log("Tie!");
        roundResults.textContent = 'Tie!';
    }

    scoreDisplay.textContent = `Player score: ${humanScore} | Computer Score: ${computerScore}`;

    // Check for victory threshold
    if (humanScore >= 5) {
        matchResults.textContent = 'Congratulations! You win!'
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        matchResults.textContent = 'Better luck next time! Computer wins.'
        humanScore = 0;
        computerScore = 0;
    }
}

/* Generate player's game choice, and set it to all lower case */
/* Deprecated with addition of UI */
function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}

/* Plays a 5-round game of rock, paper, scissors in the console. Sets score values to 0 at the start of each game. */
function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (i = 1; i < 6; i++) {
        console.log(`Round ${i}:`);

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("Game is a tie!");
    }
}