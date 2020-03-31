let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (human, computer, secret) => (Math.abs(human - secret) <= Math.abs(computer - secret));

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = currentRoundNumber => {
    return currentRoundNumber += 1
}