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

function gethumanChoice(){
    return humanChoice = prompt("Enter your choice", "")
}
let humanScore = 0
let computerScore = 0
function playround( humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert("You tied")
    }
    else if (humanChoice === "rock" && computerChoice === "scissor"){
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = ++humanScore
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}` )
        humanScore = --humanScore
    }
    else if (humanChoice === "scissor" && computerChoice === "rock"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`)
        humanScore = --humanScore
    }
    else if (humanChoice === "scissor" && computerChoice === "paper"){
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = ++humanScore
    }
    else if (humanChoice === "paper" && computerChoice === "scissor"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`)
        humanScore = --humanScore
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = ++humanScore
    }
    else (
        alert("Yo there is something wrong")
    )
    

    console.log(`Your score is ${humanScore}`)
    console.log (`The computer's score is ${computerScore}`)
}
for ( let i = 0; i < 5; i++){
    chance = Math.floor(Math.random()*100)
    console.log(` The computer chose ${getcomputerChoice()}`)
    console.log(` You chose ${gethumanChoice()}`)
    humanChoice = humanChoice.toLowerCase();
    playround(humanChoice, computerChoice)
}
if (humanScore === computerScore){
    alert(`You fought hard but it was a tie \n Your score is ${humanScore} \n The computer's score is ${computerScore} `)
}
else if (humanScore > computerScore){
    alert(`Congratulation! You are the winner! \n Your score is ${humanScore} \n The computer's score is ${computerScore} `)
}
else {
    alert(`Unfortunately you lost this time \n Your score is ${humanScore} \n The computer's score is ${computerScore}` )
}