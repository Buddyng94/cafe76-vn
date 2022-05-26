let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const scoreMes = document.getElementById('scoreMes');
const playerScoreMes = document.getElementById('playerScoreMes');
const computerScoreMes = document.getElementById('computerScoreMes');

rockBtn.addEventListener('click', () => userClick('rock'));
paperBtn.addEventListener('click', () => userClick('paper'));
scissorsBtn.addEventListener('click', () => userClick('scissors'));

function userClick(playerSelection) {   
    checkWinnder();
    const computerSelection = computerChoice();
    playRound(playerSelection,computerSelection);
    updateChoices(playerSelection,computerSelection);
    updateScore();
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

function checkWinnder() {
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (playerScore === 5) {
        
    }
}

function playRound(playerSelection,computerSelection) {    
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection = 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundWinner = 'player';
        ++playerScore;
    } else {
        roundWinner = 'computer';
        ++computerScore;
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

      playerScoreMes.textContent = `Pạn: ${playerScore}`;
      computerScoreMes.textContent = `Vida: ${computerScore}`;
  }