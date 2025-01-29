function getComputerChoice () {
    let computerNumber = Math.random();

    if (computerNumber < 0.33) {
        console.log("Computer selected: rock");
        return "rock";
    } else if (computerNumber > 0.66) {
        console.log("Computer selected: paper")
        return "paper";
    } else {
        console.log("Computer selected: scissors")
        return "scissors";
    }
}

// getComputerChoice();

function getHumanChoice() {
    let humanNumber = prompt("Select 1 for rock, 2 for paper, 3 for scissors","");

    switch (humanNumber) {
        case "1": 
            console.log("Human selected: rock");
            return "rock";
        break;
        case "2": 
            console.log("Human selected: paper");
            return "paper";
        break;
        case "3": 
            console.log("Human selected: scissors");
            return "scissors";
        break;
        default:
        throw new Error("I SAID 1, 2 OR 3! Stopping execution.");
    } 
}

// getHumanChoice();

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Draw!");
            humanScore +=1;
            computerScore +=1;

        } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log("Computer wins!");
            computerScore +=1

        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("Human wins!");
            humanScore +=1

        } else {
            console.log("error!");
        }
        console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
    }
    
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
}

playGame();
console.log("Thanks for playing!")