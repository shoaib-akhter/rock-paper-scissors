// script.js
// External JavaScript for Rock-Paper-Scissors Game

// Array of three choices
const arrayChoices = ["rock", "paper", "scissors"];

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to randomize Computer Choices
function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine winner for one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "You lose this round!";
    }
}

// Add event listeners for buttons
document.getElementById("rockButton").addEventListener("click", () => playGame("rock"));
document.getElementById("paperButton").addEventListener("click", () => playGame("paper"));
document.getElementById("scissorsButton").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const computerChoice = getComputerChoice(arrayChoices);
    const roundResult = playRound(playerChoice, computerChoice);

    // Check if someone has won the game
    if (humanScore === 5 || computerScore === 5) {
        // Announce the winner
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        document.getElementById("resultDisplay").innerText = `
            ${roundResult}\n
            - Your choice: ${playerChoice}
            - Computer's choice: ${computerChoice}\n
            Final Scores:\n
            - You: ${humanScore}
            - Computer: ${computerScore}\n
            ${winner}\n\nRefresh the page to play again.
        `;

        // Disable buttons
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;

        return; // Exit the function
    }

    // Display round result and current scores
    document.getElementById("resultDisplay").innerText = `
        ${roundResult}\n
        - Your choice: ${playerChoice}
        - Computer's choice: ${computerChoice}\n
        Current Scores:\n
        - You: ${humanScore}
        - Computer: ${computerScore}
    `;
}
