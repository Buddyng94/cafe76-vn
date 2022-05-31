let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let round = 0;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerRestartBtn = document.getElementById('playerRestartBtn');
const computerRestartBtn = document.getElementById('computerRestartBtn');

const playerWin = document.getElementById('playerWin');
const computerWin = document.getElementById('computerWin');

const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const roundMes = document.getElementById('roundMes');

const scoreMes = document.getElementById('scoreMes');
const playerScoreMes = document.getElementById('playerScoreMes');
const computerScoreMes = document.getElementById('computerScoreMes');

rockBtn.addEventListener('click', () => userClick('rock'));
paperBtn.addEventListener('click', () => userClick('paper'));
scissorsBtn.addEventListener('click', () => userClick('scissors'));
playerRestartBtn.addEventListener('click', () => restartGame());
computerRestartBtn.addEventListener('click', () => restartGame());

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    roundMes.textContent = 'Ván: 0';
    scoreMes.textContent = 'Pạn nhớ là cứ bình tĩnh mà xiên ló!';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    playerScoreMes.textContent = 'Pạn: 0';
    computerScoreMes.textContent = 'Vida: 0';
    document.getElementById("playerWin").style.display = "none";
    document.getElementById("computerWin").style.display = "none";
}

function userClick(playerSelection) {   
    const computerSelection = computerChoice();
    playRound(playerSelection,computerSelection);
    updateChoices(playerSelection,computerSelection);
    updateScore();

    if (checkWinner()) {
        declareWinner();        
    }
}

function computerChoice() {
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

function checkWinner() {
    return playerScore === 5 || computerScore === 5;
}

function declareWinner() {
    if (playerScore === 5) {
        document.getElementById("playerWin").style.display = "flex";
    } 
    if (computerScore === 5) {
        document.getElementById("computerWin").style.display = "flex";
        compVid();
    }
}

function compVid() {
    let compVid = document.getElementById("compVid");
    compVid.play();
}

function playRound(playerSelection,computerSelection) {    
    checkWinner();
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        ++round;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection = 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundWinner = 'player';
        ++playerScore;
        ++round;
    } else {
        roundWinner = 'computer';
        ++computerScore;
        ++round;
    } return roundWinner;
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        playerSign.textContent = '✊'
        break
      case 'paper':
        playerSign.textContent = '✋'
        break
      case 'scissors':
        playerSign.textContent = '✌'
        break
    }
  
    switch (computerSelection) {
      case 'rock':
        computerSign.textContent = '✊'
        break
      case 'paper':
        computerSign.textContent = '✋'
        break
      case 'scissors':
        computerSign.textContent = '✌'
        break
    }
  }  

  function updateScore() {
      if (roundWinner === 'tie') {
        scoreMes.textContent = 'Hòa! Nại nào!';
      } 
      if (roundWinner === 'player') {
          scoreMes.textContent = 'Win! Tiếp đi pạn!';
      } 
      if (roundWinner === 'computer') {
          scoreMes.textContent = 'Thua rồi! Cố nên pạn!';
      }
      roundMes.textContent = `Ván: ${round}`;
      playerScoreMes.textContent = `Pạn: ${playerScore}`;
      computerScoreMes.textContent = `Vida: ${computerScore}`;
  }