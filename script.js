// select DOM elements
const yourScore = document.querySelector('#yourscore');
const cmpScore = document.querySelector('#cmpscore');
const rndResult = document.querySelector('#rndresult');
const choices = document.querySelectorAll('button');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
//generate a random play
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
//logic for deciding who wins the round
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
  //checks for win
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
