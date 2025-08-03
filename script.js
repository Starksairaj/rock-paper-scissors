function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `Your choice: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').textContent = `Computer's choice: ${capitalize(computerChoice)}`;

  const result = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = `Result: ${result}`;
}

function getWinner(user, comp) {
  if (user === comp) return "It's a Draw!";
  if (
    (user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
