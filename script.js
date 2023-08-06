
// getComputerChoice is a function that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let getComputerChoise = function(){
    let availableOptions = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3)
    
    return availableOptions[index]
}

// console.log(getComputerChoise())
