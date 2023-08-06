
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
//  console.log(getPlayerChoise(), getComputerChoise())