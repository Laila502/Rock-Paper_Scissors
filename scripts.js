

function getComputerChoice(){
    
    let arr = ["Rock", "Paper", "Scissors"];
    let randomChoice  =  Math.floor(Math.random() * arr.length);
    return arr[randomChoice];
}

function getPlayerChoice () {
    let playerSelection = prompt('Do you choose Rock, Paper or Scissors?')
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
            console.log("You chose " + `${playerSelection}`);
        return playerSelection
        } else {
        console.log('Error! Pick Rock, Paper or Scissors')
        return getPlayerChoice()
        }
  }


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
    playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Rock" ){
        return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper"){
        return (`You Win! ${playerSelection} beats ${computerSelection}!`)
    } else return "Draw";
    
}

let playerScore = 0;
let computerScore = 0;
let i;

function theWinnerIs(){
    if(playerScore > computerScore && i === 5 ) {
        console.log(`You won!`);
    }else if (playerScore < computerScore && i === 5 ) {
        console.log(`Computer wins!`);
    }else if  (playerScore === computerScore && i === 5 ) {
        console.log (`It's a tie!`);
    }
}


function countScore(playerSelection, computerSelection){
        if(playerSelection === "Rock" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Rock" ){
            computerScore++;
        } else if(playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper"){
                    playerScore++;
        };
}


function game() {

    for (i = 1; i < 6; i++){

        console.log('Round ' + i)
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        countScore(playerSelection, computerSelection);

        console.log("Computer chose " + `${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score is ${playerScore}. Computer score is ${computerScore}.`)
        theWinnerIs();

    }   
}

game();






