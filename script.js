//console.log("test")
const yourScore = document.querySelector('#yourscore');
const cmpScore = document.querySelector('#cmpscore');
const rndResult = document.querySelector('#rndresult');
const choices = document.querySelectorAll('button');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
function computerPlay() {
  let rndNumber = Math.floor(Math.random() * 3);
  console.log(rndNumber);
  switch (rndNumber) {
    case 0:
      cmpChoice = 'ROCK';
      break;
    case 1:
      cmpChoice = 'PAPER';
      break;
    case 2:
      cmpChoice = 'SCISSORS';
      break;
  }
  //console.log(cmpChoice)
  return cmpChoice;
}
function oneRound(playerSelection, computerSelection) {
  switch (playerSelection.toUpperCase()) {
    case 'ROCK':
      switch (computerSelection) {
        case 'PAPER':
          cmpScore.textContent = parseInt(cmpScore.textContent) + 1;
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
          rndResult.textContent = 'You lose';
          break;
        case 'SCISSORS':
          yourScore.textContent = parseInt(yourScore.textContent) + 1;
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
          rndResult.textContent = 'You win';
          break;
        case 'ROCK':
          rndResult.textContent = 'Tie';
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
      }
      break;
    case 'PAPER':
      switch (computerSelection) {
        case 'SCISSORS':
          cmpScore.textContent = parseInt(cmpScore.textContent) + 1;
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
          rndResult.textContent = 'You lose';
          break;
        case 'ROCK':
          yourScore.textContent = parseInt(yourScore.textContent) + 1;
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
          rndResult.textContent = 'You win';
          break;
        case 'PAPER':
          rndResult.textContent = 'Tie';
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
      }
      break;
    case 'SCISSORS':
      switch (computerSelection) {
        case 'ROCK':
          cmpScore.textContent = parseInt(cmpScore.textContent) + 1;
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
          rndResult.textContent = 'You lose';
          break;
        case 'PAPER':
          yourScore.textContent = parseInt(yourScore.textContent) + 1;
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
          rndResult.textContent = 'You win';
          break;
        case 'SCISSORS':
          rndResult.textContent = 'Tie';
          playerChoice.textContent = 'Your choice ' + playerSelection;
          computerChoice.textContent = 'Computer choice ' + computerSelection;
      }
      break;
  }
  if (parseInt(yourScore.textContent) == 5) {
    rndResult.textContent = 'YOU WON THE GAME';
    choices.forEach((choice) => {
      choice.disabled = true;
    });
  }

  if (parseInt(cmpScore.textContent) == 5) {
    rndResult.textContent = 'COMPUTER WON THE GAME';
    choices.forEach((choice) => {
      choice.disabled = true;
    });
  }
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Pick');
    computerSelection = computerPlay();
    let result = oneRound(playerSelection, computerSelection);
    if (result == 'You win') playerScore++;
    else if (result == 'You lose') computerScore++;
    console.log(
      result + ' score player: ' + playerScore + ' computer: ' + computerScore
    );
  }
  if (playerScore > computerScore) console.log('you won the game');
  else if (playerScore < computerScore) console.log('you lost the game');
  else console.log('tied game');
}

// add click listeners on rock paper scissors buttons
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    if (
      parseInt(yourScore.textContent) < 5 &&
      parseInt(cmpScore.textContent) < 5
    )
      oneRound(choice.textContent, computerPlay());
  });
});

//game()
/*computerPlay()
const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(oneRound(playerSelection, computerSelection));*/
