function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
  }
}

let playerScore = 0;
let computerScore = 0;
let winner;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    playerSelection = prompt("Rock paper or scissor?");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    winner = "Computer";
    computerScore++;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    winner = "Player";
    playerScore++;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore === 5) {
    console.log(`You Win!`);
  } else if (computerScore === 5) {
    console.log(`Computer Win!`);
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
console.log(game());
console.log(computerScore);
console.log(playerScore);
console.log(winner);
