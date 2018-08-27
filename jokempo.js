var userInput = 'Rock';
userInput = userInput.toLowerCase();

function getComputerChoice(){

  switch (Math.floor(Math.random() *3)) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
    case 2:
      return 'scissor';
  }  
};

function determineWinner(getUserChoice, getComputerChoice){
 if (getUserChoice === getComputerChoice){
   return 'The game is a tie!';
 } 
  if (getUserChoice === 'rock') {
  if (getComputerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (getUserChoice === 'paper') {
  if (getComputerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (getUserChoice === 'scissors') {
  if (getComputerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
};

function playGame(){
  var getUserChoice = userInput;
  var computerChoice = getComputerChoice();
    console.log('You threw: ' + getUserChoice);
    console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(getUserChoice, getComputerChoice));
}

playGame();