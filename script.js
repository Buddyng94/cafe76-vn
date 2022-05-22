
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

function computerPlay() {
    let computerRandom = Math.floor(Math.random()*3);
    switch (computerRandom) {
    case 0:
        return 'rock'
    case 1:
        return 'paper'
    case 2:
        return 'scissors'
    }
}

function userInput() {
    let playerSelection = prompt('rock,paper,scissor?','rock')
    if ( (playerSelection.toLowerCase() === 'rock') || (userInput.toLowerCase() === 'paper') || (userInput.toLowerCase() === 'scissors') ) {
    playRound(playerSelection,computerSelection);
    } else {
    alert('Invalid Choice!');
    userInput();
    }
}

function playRound(playerSelection,computerSelection) {
    computerSelection = computerPlay();
    if ( (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') ) {
    playerScore++;
    alert('Player Win!');
    console.log('Player Choice:'+playerSelection+'\nComputer Choice: '+computerSelection+'\nPlayer Win!\nScore: '+playerScore+' - '+computerScore);
    } else if ( (computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') ) {
    computerScore++;
    alert('Computer Win!');
    console.log('Player Choice:'+playerSelection+'\nComputer Choice: '+computerSelection+'\nComputer Win!\nScore: ' + playerScore + ' - ' + computerScore);
    } else if (playerSelection === computerSelection) {
    alert('Game Tie');
    console.log('Player Choice:'+playerSelection+'\nComputer Choice: '+computerSelection+'\nGame Tie!\nScore: ' + playerScore + ' - ' + computerScore);
    } else {
    console.log('Wrong Input');
    }
}

function game() {
    for (let i = 0; playerScore < 5 && computerScore < 5; i ++) {
    userInput();        
    }
    console.log('Final score: ' + playerScore + ' - ' + computerScore);
    if ( playerScore == computerScore ) {
    console.log('Game Tie!');
    } else if ( playerScore > computerScore ) {
    console.log('Player Win!');
    } else {
    console.log('Computer Win!');
    }
}

game();
