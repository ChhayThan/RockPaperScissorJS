function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
  updateScore();
}

function updateScore() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  playerScoreInfo.textContent = `Player Score: ${playerScore}`;
  computerScoreInfo.textContent = `Computer Score: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const scoreMessage = document.querySelector(".scoreMessage");
const scoreInfo = document.querySelector(".scoreInfo");
const playerScoreInfo = document.querySelector(".playerScoreInfo");
const computerScoreInfo = document.querySelector(".computerScoreInfo");
const endgameMsg = document.querySelector(".endgameMsg");

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));

function handleClick(playerSelection) {
  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);

  if (isGameOver()) {
    return playerScore > computerScore
      ? alert("You won!")
      : alert("You lost...");
  }
}
