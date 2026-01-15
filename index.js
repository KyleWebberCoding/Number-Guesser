let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let randomNumber = Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Your number is out of range!');
  }
  let humanDistance = getAbsoluteDistance(userGuess, secretTargetNumber);
  let computerDistance = getAbsoluteDistance(computerGuess, secretTargetNumber);

  if (humanDistance <= computerDistance) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
}

console.log(compareGuesses(9, 5, 7));