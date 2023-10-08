let computerScore = 0,
  playerScore = 0;

const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");

const computerPoints = document.querySelector("#computerScore");
const playerPoints = document.querySelector("#playerScore");
const results = document.querySelector("#resultsContainer");
const winner = document.querySelector("#hideWinnerContainer");
const winnerText = document.querySelector("#winnerText");
const playAgainBtn = document.querySelector("#playAgain");

userRock.addEventListener("click", () => {
  console.log(playRound("rock", getComputerChoice()));
  setResults();
  setWinner();
});

userPaper.addEventListener("click", () => {
  console.log(playRound("paper", getComputerChoice()));
  setResults();
  setWinner();
});

userScissors.addEventListener("click", () => {
  console.log(playRound("scissors", getComputerChoice()));
  setResults();
  setWinner();
});

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

let setResults = function () {
  computerPoints.textContent = computerScore;
  playerPoints.textContent = playerScore;

  results.classList.remove("hideResults");
};

let setWinner = function () {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      winnerText.textContent = "You won!!";
      winner.classList.remove("hideWinnerContainer");
      console.log("there is a winner");
      return `You have ${playerScore} points and the computer have ${computerScore} points. You win!`;
    } else {
      winnerText.textContent = "You loose!";
      winner.classList.remove("hideWinnerContainer");
      console.log("there is a winner");
      return `You have ${playerScore} points and the computer have ${computerScore} points. You lose!`;
    }
  }
};

playAgainBtn.addEventListener("click", () => {
  winner.classList.add("hideWinnerContainer");
  results.classList.add("hideResults");
  computerScore = 0;
  playerScore = 0;
});
// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
//   }
//   console.log(getWinner());
// }

// game();
