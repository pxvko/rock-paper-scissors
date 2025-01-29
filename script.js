function getHumanChoice() {
    let number = prompt("Select 1 for rock, 2 for paper, 3 for scissors","");

    switch (number) {
        case "1": console.log("rock");
        break;
        case "2": console.log("paper");
        break;
        case "3": console.log("scissors");
        break;
        default: console.log("I SAID 1, 2 OR 3!");
    } 
}

getHumanChoice();
