
// getComputerChoice is a function that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let getComputerChoise = function(){
    let availableOptions = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3)
    
    return availableOptions[index]
}

// getPlayerChoice is a function that prompt the player to choose between ‘Rock’, ‘Paper’ or ‘Scissors’.
 let getPlayerChoise = function(){
    let playerChoise = prompt("Choose from 'rock', 'paper' or 'scissors'").toLocaleLowerCase()
    return playerChoise
 }

 // playRound is a function that takes the two player choises and defines who wins’.
 let playRound = function(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, is a tie!`
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissor" && computerSelection === "paper"){
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you win!`
    }else{
        return `You chose ${playerSelection} and the computer chose ${computerSelection}, you lose!`
    }

 }
//  console.log(playRound(getPlayerChoise(), getComputerChoise()))