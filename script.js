// getComputerChoice is a function that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let getComputerChoise = function () {
  let availableOptions = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);

  return availableOptions[index];
};

// getPlayerChoice is a function that prompt the player to choose between ‘Rock’, ‘Paper’ or ‘Scissors’.
let getPlayerChoise = function () {
  let playerChoise = prompt(
    "Choose from 'rock', 'paper' or 'scissors'"
  ).toLocaleLowerCase();
  return playerChoise;
};

let computerScore = 0, playerScore = 0

// playRound is a function that takes the two player choises and defines who wins’.
let playRound = function (playerSelection, computerSelection) {
  if (
    playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissor"
  ) {
    if (playerSelection === computerSelection) {
      return `You chose ${playerSelection} and the computer chose ${computerSelection}, is a tie!`;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        playerScore += 1;
      return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`;
    } else {
        computerScore += 1;
      return `You chose ${playerSelection} and the computer chose ${computerSelection}, you lose!`;
    }
  } else {
    alert("Please enter a valid option: 'rock', 'paper' or 'scissors'");
  }
};

//getWinner is a function that keeps defines who wins base on playerScore and computerScore
function getWinner() {
    if(playerScore > computerScore){
        return `You have ${playerScore} points and the computer have ${computerScore} points. You win!`
      }else{
        return `You have ${playerScore} points and the computer have ${computerScore} points. You lose!`
      }
}

function game() {
    
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoise(), getComputerChoise()));
  }
  console.log(getWinner())
}

game();
//  console.log(playRound(getPlayerChoise(), getComputerChoise()))
