function getComputerChoice() {
	var choice = ["rock", "paper", "scissors"];
	let x = Math.floor(Math.random() * 3);

	return (choice[x]);
}

const player = document.querySelector("#player");
const computer = document.querySelector("computer");
const p = document.querySelector("#scc");
const button = document.querySelector("button");

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return (2);
	}

	else if ((computerSelection == "rock") && (playerSelection == "paper") || (computerSelection == "scissors") && (playerSelection == "rock") || (computerSelection == "paper") && (playerSelection == "scissors"))
	{
		playerScore++;
		player.textContent = playerScore;
		return (1);
	}

	else {
		computerScore++;
		computer.textContent = computerScore;
		return (0);
	}
}

while (playerScore != 5 || computerScore != 5) {
	var playerSelection = button.value;
	var computerSelection = getComputerChoice();
	var gamePlay = playRound(playerSelection, computerSelection);
	if (gamePlay == 2)
	{
		gamePlay = playRound(playerSelection, computerSelection);
	}
}
