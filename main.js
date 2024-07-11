/*
input: function call
output: prompt win or lose

1. declare empty obj for scoreboard & declare a variable count
2. create computer logic, to choose r,p,s.
3. create human logic with prompt, to choose r,p,s.
   if 0, return rock
   if 1, return paper
   if 2, return scissor
4. create a loop with counter of 5.
   if count is under or equal to 5, check between cpu and human and update score
   if count is equal to 5, check value in scoreboard.
      if player > cpu, player wins!
      else, cpu wins
5. 
*/

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const getComputerChoice = function () {
  let cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice === 0) {
    return 'rock'
  } else if (cpuChoice === 1) {
    return 'paper'
  } else if (cpuChoice === 2) {
    return 'scissor'
  }
}

const playRound = function (playerSelection,computerSelection) {
  if ((computerSelection === 'rock' && playerSelection === 'scissor') || 
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissor' && playerSelection === 'paper')) {
      computerScore += 1;
      // console.log('current player score',playerScore);
      // console.log('current computer score',computerScore);
      // console.log('current draw score',drawScore);
      // console.log('----------------------');
  } else if ((computerSelection === playerSelection)) {
      drawScore += 1;
      // console.log('current player score',playerScore);
      // console.log('current computer score',computerScore);
      // console.log('current draw score',drawScore);
      // console.log('----------------------');
  } else {
      playerScore += 1;
      // console.log('current player score',playerScore);
      // console.log('current computer score',computerScore);
      // console.log('current draw score',drawScore);
      // console.log('----------------------');
  }
  updateScore();
};

const checkWinner = function () {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      alert('You Win!')
    } else if (playerScore === computerScore) {
      alert('Draw!')
    } else {
      alert('Computer Win!')
    }
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  }
}

const updateScore = function () {
  const score = document.getElementById('score').innerHTML = `
    <div>Current player score: ${playerScore}</div>
    <div>Current computer score: ${computerScore}</div>
    <div>Current draw score: ${drawScore}</div>`
}

const rock = document.getElementById('rock').addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkWinner();
});
const paper = document.getElementById('paper').addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkWinner();
});
const scissor = document.getElementById('scissor').addEventListener('click', () => {
  const playerSelection = 'scissor';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkWinner();
});