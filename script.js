//console.log("test")
function computerPlay(){
    let rndNumber=Math.floor(Math.random()*3);
    console.log(rndNumber);
    switch(rndNumber){
        case 0:
            cmpChoice="ROCK";
            break;
        case 1:
            cmpChoice="PAPER";
            break;
        case 2:
            cmpChoice="SCISSORS";
            break;
    }
    //console.log(cmpChoice)
    return cmpChoice;

}
function oneRound(playerSelection, computerSelection){
  
    switch (playerSelection.toUpperCase()){
        case "ROCK":
            switch (computerSelection){
                case "PAPER":
                    return "You lose"
                    break;
                case "SCISSORS":
                    return "You win"
                    break;
                case "ROCK":
                    return "Tie"
            }
            break;
        case "PAPER":
            switch (computerSelection){
                case "SCISSORS":
                    return "You lose"
                    break;
                case "ROCK":
                    return "You win"
                    break;
                case "PAPER":
                    return "Tie"
            }
            break;
        case "SCISSORS":
            switch (computerSelection){
                case "ROCK":
                    return "You lose"
                    break;
                case "PAPER":
                    return "You win"
                    break;
                case "SCISSORS":
                        return "Tie"
            }
            break;
    }


}
function game(){
      let playerScore=0
       let computerScore=0
    for (let i = 0; i < 5; i++) {
       let playerSelection=prompt("Pick")
       computerSelection = computerPlay();
       let result=oneRound(playerSelection, computerSelection)
       if(result=="You win")
        playerScore++;
       else if(result=="You lose")
       computerScore++;
       console.log(result+" score player: "+playerScore+" computer: "+computerScore)
     }
     if(playerScore>computerScore)
        console.log("you won the game")
     else if(playerScore<computerScore)
        console.log("you lost the game")
     else
        console.log("tied game")
}
game()
/*computerPlay()
const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(oneRound(playerSelection, computerSelection));*/