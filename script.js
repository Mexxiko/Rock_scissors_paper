 // function to let PC randomly pick + array
 function getComputerChoice() {
    const items = ["rock", "scissors", "paper"];
    const randomChoice = Math.floor(Math.random() * items.length); 
    return items[randomChoice];
 }
 console.log (getComputerChoice("items")); // test - working

 // function to play 1 round of game + return string with winner
 function playRound(playerSelection, computerSelection) {
    
 }
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
 