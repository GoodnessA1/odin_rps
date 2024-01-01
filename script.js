function getComputerChoice() {
	var choice = ["Rock", "paper", "scissors"];
	let x = Math.floor(Math.random() * 3);

	console.log(x);
	console.log(choice[x]);

	return (choice[x]);
}

let i = 0;

while (i <= 10) {
	getComputerChoice();
	i++;
}
