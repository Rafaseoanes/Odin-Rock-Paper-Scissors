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
const gameText = document.querySelector('#game')

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

// playRound is a function that takes the two player choices and defines who wins’.
let playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    gameText.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}, is a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    gameText.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`;
  } else {
    computerScore += 1;
    gameText.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}, you lose!`;
  }
};

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
    } else {
      winnerText.textContent = "You loose!";
      winner.classList.remove("hideWinnerContainer");
    }
  }
};

playAgainBtn.addEventListener("click", () => {
  winner.classList.add("hideWinnerContainer");
  results.classList.add("hideResults");
  gameText.textContent = ""
  computerScore = 0;
  playerScore = 0;
});

