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

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);