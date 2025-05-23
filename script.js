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
    let choice = prompt("Choose rock, paper, or scissors.");
    return choice.toLowerCase();
}