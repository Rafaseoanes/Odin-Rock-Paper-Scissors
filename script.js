const userRock = document.querySelector('#rock')
const userPaper = document.querySelector('#paper')
const userScissors = document.querySelector('#scissors')

userRock.addEventListener('click', ()=>{
  
  console.log(playRound('rock', getComputerChoice()))
  console.log('Good, rock')
})

// getComputerChoice is a function that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let getComputerChoice = function () {
  let availableOptions = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);

  return availableOptions[index];
};

// getPlayerChoice is a function that prompt the player to choose between ‘Rock’, ‘Paper’ or ‘Scissors’.
let getPlayerChoice = function () {
  let playerChoice;

  while (
    !(
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    )
  ) {
    playerChoice = prompt(
      "Choose from 'rock', 'paper' or 'scissors'"
    ).toLowerCase();
  }
  return playerChoice;
};

let computerScore = 0,
  playerScore = 0;

// playRound is a function that takes the two player choices and defines who wins’.
let playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You chose ${playerSelection} and the computer chose ${computerSelection}, is a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`;
  } else {
    computerScore += 1;
    return `You chose ${playerSelection} and the computer chose ${computerSelection}, you lose!`;
  }
};

//getWinner is a function that keeps defines who wins base on playerScore and computerScore
function getWinner() {
  if (playerScore === computerScore) {
    return `You have ${playerScore} points and the computer have ${computerScore} points. it's a tie!`;
  } else if (playerScore > computerScore) {
    return `You have ${playerScore} points and the computer have ${computerScore} points. You win!`;
  } else {
    return `You have ${playerScore} points and the computer have ${computerScore} points. You lose!`;
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//   }
//   console.log(getWinner());
// }

// game();
