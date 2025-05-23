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

console.log(`The player chose: ${getHumanChoice()}`);

let humanScore = 0;
let computerScore = 0;