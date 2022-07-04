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
    computerSelection=computerPlay();
    switch (playerSelection.toUpperCase()){
        case "ROCK":
            switch (computerSelection){
                case "PAPER":
                    return "You lose"
                    break;
                case "SCISSORS":
                    return "You win"
                    break;
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
            }
            break;
    }


}
computerPlay()