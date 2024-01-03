function getComputerChoice() {
	var choice = ["rock", "paper", "scissors"];
	let x = Math.floor(Math.random() * 3);

	return (choice[x]);
}

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		console.log(`It is a tie, please play again`);
		return (2);
	}

	else if ((computerSelection == "rock") && (playerSelection == "paper") || (computerSelection == "scissors") && (playerSelection == "rock") || (computerSelection == "paper") && (playerSelection == "scissors"))
	{
		playerScore++;
		console.log(`You: ${playerScore} , computer: ${computerScore}`);
		return (1);
	}

	else {
		computerScore++;
		console.log(`You: ${playerScore} , computer: ${computerScore}`);
		return (0);
	}
}

var inc = 0;

while (inc < 5) {
	var playerSelection = (prompt("Enter Your Play (rock paper scissors): ")).toLowerCase();
	var computerSelection = getComputerChoice();
	var gamePlay = playRound(playerSelection, computerSelection);
	if (gamePlay == 2)
	{
		gamePlay = playRound(playerSelection, computerSelection);
	}

	inc++;
}
