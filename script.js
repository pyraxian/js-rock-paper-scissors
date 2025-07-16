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

/* Generate player's game choice, and set it to all lower case */
function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}

    /* Yes, I could absolutely make these variables not global for better access, but 
    I didn't want to refactor my functions to do it. */
    // Score variables
    let humanScore = 0;
    let computerScore = 0;

/* Plays one round of rock, paper, scissors, incrementing correct score value */
function playRound(humanChoice, computerChoice) {

    console.log(`Player chose ${humanChoice}. Computer chose ${computerChoice}.`);
    
    if (((humanChoice === 'rock') && (computerChoice === 'scissors')) || ((humanChoice === 'paper') && (computerChoice === 'rock')) || ((humanChoice === 'scissors') && (computerChoice === 'paper'))) {
        console.log("Player wins!");
        humanScore++;
    } else if (((humanChoice === 'rock') && (computerChoice === 'paper')) || ((humanChoice === 'paper') && (computerChoice === 'scissors')) || ((humanChoice === 'scissors') && (computerChoice === 'rock'))) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("Tie!");
    }

    console.log(`Player score: ${humanScore} | Computer Score: ${computerScore}`);
}

/* Event listener */
const btn = document.querySelector("#buttonContainer");

btn.addEventListener("click", (event) => {
    console.log(`${event.target.id} was clicked`);
    playRound(event.target.id, getComputerChoice());
});



/* Plays a 5-round game of rock, paper, scissors. Sets score values to 0 at the start of each game. */
// function playGame() {

//     humanScore = 0;
//     computerScore = 0;

//     for (i = 1; i < 6; i++) {
//         console.log(`Round ${i}:`);

//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//     }

//     if (humanScore > computerScore) {
//         console.log("Player wins the game!");
//     } else if (humanScore < computerScore) {
//         console.log("Computer wins the game!");
//     } else {
//         console.log("Game is a tie!");
//     }
// }

// playGame();