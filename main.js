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
const scoreboard = {
  player: 0,
  computer: 0,
}

let playerScore = scoreboard['player'];
let computerScore = scoreboard['computer'];

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

const getHumanChoice = function () {
  let humanChoice = parseInt(prompt("Choose the following: \nrock : 0\npaper : 1\nscissor : 2"));
  if (humanChoice === 0) {
    return 'rock'
  } else if (humanChoice === 1) {
    return 'paper'
  } else if (humanChoice === 2) {
    return 'scissor'
  } else {
    alert("Please choose number from 0 to 2");
    return getHumanChoice();
  }
}

const playRounds = function () {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(computerChoice);
    console.log(humanChoice);
    console.log('-------')
    if ((computerChoice === 'rock' && humanChoice === 'paper') || 
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissor' && humanChoice === 'paper')) {
        computerScore = computerScore+=1;
    } else if ((computerChoice === 'rock' && humanChoice === 'rock') || 
      (computerChoice === 'paper' && humanChoice === 'paper') ||
      (computerChoice === 'scissor' && humanChoice === 'scissor')) {
        continue;
    } else {
        playerScore = playerScore+=1;
    }
  }
  if (playerScore > computerScore) {
    alert('You Win!')
  } else if (playerScore === computerScore) {
    alert('Draw!')
  } else {
    alert('Computer Win!')
  }
  console.log('current player score',playerScore);
  console.log('current computer score',computerScore);
}

playRounds();





