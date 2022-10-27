

let playerScore = 0;
let computerScore = 0;
let i = 1;

let plyrScoreDisplay = document.querySelector('#playerScore');
let compScoreDisplay = document.querySelector('#computerScore');
let announcement = document.querySelector("#announcement");
let winnerAnnouncement = document.querySelector('#winnerAnnounc');
const btnContainer = document.querySelector('#playAgain');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let compRock = document.getElementById("compRock");
let compPaper = document.getElementById("compPaper");
let compScissors = document.getElementById("compScissors");
let computerChoice = getComputerChoice();
let isFinished = false;
let noEffects = false;


function game(playerSelection, computerSelection) {
    
    const playRoundWinner = getWinner(playerSelection, computerSelection);
    countScore(playRoundWinner);
    displayWinner(computerSelection, playerSelection);
    setCompEffects(computerSelection);
    gameWinnerIs();
    playAgain();
    i++;
    
}

function getComputerChoice(){
    let arr = ["Rock", "Paper", "Scissors"];
    let randomChoice  =  Math.floor(Math.random() * arr.length);
    return arr[randomChoice];
}

function getWinner(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock" ){
            return("computer")
    } else if(playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper"){
            return("player")
    };
}

function displayWinner(computerSelection, playerSelection){
    const playRoundWinner = getWinner(playerSelection, computerSelection);
    if (playRoundWinner === "computer" ){
        announcement.textContent = `Round #${i}: You Lost! ${computerSelection} beats ${playerSelection}!`;
    } else if (playRoundWinner === "player"){
        announcement.textContent = `Round #${i}: You Won! ${playerSelection} beats ${computerSelection}!`;
    } else if(playerSelection === computerSelection){
        announcement.textContent =  `Round #${i}: Draw`;
    }
}

function countScore(winner){
    if(winner === "computer" ){
        computerScore++;
        compScoreDisplay.textContent = computerScore;
    } 
    if(winner === "player"){
        playerScore++;
        plyrScoreDisplay.textContent = playerScore;
    }
}

function gameWinnerIs(){
    if(playerScore === 5) {
        winnerAnnouncement.textContent = "You Won!";
        isFinished = true;
        
    }else if (computerScore === 5 ) {
        winnerAnnouncement.textContent = "Computer wins!";
        isFinished = true;
        
    }
}


function playAgain(){
    if (playerScore === 5 || computerScore === 5){
        const button = document.createElement('button');
        button.textContent = "Play Again";
        btnContainer.appendChild(button);
        button.addEventListener('click', () => {
            resetGame();
            button.remove(); 
        })
    }
}


function resetGame(){
    removeCompEffects();
    playerScore = 0;
    plyrScoreDisplay.textContent = 0;
    computerScore = 0;
    compScoreDisplay.textContent = 0;
    announcement.textContent = '';
    winnerAnnouncement.textContent = '';
    i = 1;
    isFinished = false;
    
}


function removeCompEffects() {
    compRock.classList.remove('compEffects');
    compPaper.classList.remove('compEffects');
    compScissors.classList.remove('compEffects');
}



function setCompEffects(computerSelection) {
    
    if (computerSelection === "Rock"){
        removeCompEffects();
        compRock.classList.add("compEffects");
    }
    if(computerSelection === "Paper"){
        removeCompEffects();
        compPaper.classList.add("compEffects")
    } 
    if(computerSelection === "Scissors"){
        removeCompEffects();
        compScissors.classList.add("compEffects")
    }
    
  }
         
        


const buttons = document.querySelector("#buttons");


rock.addEventListener('click', () => {
    if (isFinished === true){
        setCompEffects();
        return false;
    }
    game("Rock", getComputerChoice());
  });

paper.addEventListener('click', () => {
    if (isFinished === true){
        setCompEffects();
        return false;
    }
    game("Paper", getComputerChoice());
  });

scissors.addEventListener('click', () => {
    if (isFinished === true){
        setCompEffects();
        return false;
    }
    game("Scissors", getComputerChoice());
  });







