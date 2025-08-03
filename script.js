function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-choice").innerText = `Your choice: ${capitalize(playerChoice)}`;
  document.getElementById("computer-choice").innerText = `Computer's choice: ${capitalize(computerChoice)}`;

  const result = getResult(playerChoice, computerChoice);
  document.getElementById("result-text").innerText = `Result: ${result}`;
}

function getResult(player, computer) {
  if (player === computer) return "It's a Draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You Win!";
  }
  return "You Lose!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
