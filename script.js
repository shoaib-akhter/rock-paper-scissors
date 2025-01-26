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

// Prompt-based user input
function getHumanChoice() {
    let humanChoice;
    const validChoices = ["rock", "paper", "scissors"];

    do {
        // Get user input and convert it to lowercase
        humanChoice = prompt("What's your choice? Enter one of 'Rock', 'Paper', or 'Scissors': ");

        // Handle cancel button
        if (humanChoice === null) {
            alert("You clicked Cancel. Please try again.");
            continue;
        }

        humanChoice = humanChoice.toLowerCase();

        // Check if the input is valid
        if (!validChoices.includes(humanChoice)) {
            alert("Invalid choice! Please enter 'Rock', 'Paper', or 'Scissors'.");
        }
    } while (!validChoices.includes(humanChoice)); // Repeat until valid input

    return humanChoice;
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

// Main game logic: run five rounds
function startGame() {
    // Reset scores each time the game starts
    humanScore = 0;
    computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const userPick = getHumanChoice();
        const compPick = getComputerChoice(arrayChoices);

        const result = playRound(userPick, compPick);
        // Show round results in an alert
        alert(`${result}\n\n- Your choice: ${userPick}\n- Computer's choice: ${compPick}`);
    }

    // Construct final result
    let finalMessage = `Final Scores:\n- You: ${humanScore}\n- Computer: ${computerScore}\n`;
    if (humanScore > computerScore) {
        finalMessage += "\nYou win the game!";
    } else if (computerScore > humanScore) {
        finalMessage += "\nYou lose the game!";
    } else {
        finalMessage += "\nThe game is a tie!";
    }

    // Display final result in the #resultDisplay div
    document.getElementById("resultDisplay").innerText = finalMessage;
}
