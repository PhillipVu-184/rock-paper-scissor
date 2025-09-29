//create a function that gets computer choice
//create a variable for the computer choice
//create a variable that generate random number from 0 to 1
//if the variable is between 0-0.33 select and return rock
//if the variable is between 0.33-0.66 select and return scissor
//if the variable is between 0.66-1 select and return paper

let computerChoice
let chance = Math.floor(Math.random()*100)
function getcomputerChoice(){
    if (chance < 33 ){
        computerChoice = "rock"
    }
    else if (chance < 66) {
        computerChoice = "scissor"
    }
    else {
        computerChoice = "paper"
    }
    return computerChoice
    
}
console.log(getcomputerChoice())


function gethumanChoice(){
    return humanChoice = prompt("Enter your choice", "")
}
gethumanChoice()
let humanScore = 0
let computerScore = 0
humanChoice = humanChoice.toLowerCase();
console.log(humanChoice)
function playround( humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("You tied")
    }
    else if (humanChoice === "rock" && computerChoice === "scissor"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = ++humanScore
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}` )
        humanScore = --humanScore
    }
    else if (humanChoice === "scissor" && computerChoice === "rock"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        humanScore = --humanScore
    }
    else if (humanChoice === "scissor" && computerChoice === "paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = ++humanScore
    }
    else if (humanChoice === "paper" && computerChoice === "scissor"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        humanScore = --humanScore
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = ++humanScore
    }
    else (
        console.log("Yo there is something wrong")
    )
    

    console.log(`Your score is ${humanScore}`)
    console.log (`The computer's score is ${computerScore}`)
}
playround(humanChoice, computerChoice)