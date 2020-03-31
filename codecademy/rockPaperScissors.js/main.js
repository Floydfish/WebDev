const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Please type a valid choice: rock, paper, or scissors.');
    }
  }
  
  const getComputerChoice = () => {
    switch (Math.floor(Math.random()*3)) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
     }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It was a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer has won';
      } else {
        return 'The user has won';
      };
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer has won';
      } else {
        return 'The user has won';
      };
    } else if (userChoice === ' scissors') {
      if (computerChoice === 'rock') {
        return 'The computer has won';
      } else {
        return 'The user has won';
      }
    };
  }
  
  function playGame(cheat = 0) {
    if (cheat === 'bomb') {
      console.log('The user has won')
    } else {
    let userChoice = getUserChoice('paper');
    console.log(userChoice)
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
    }
  }
  
  playGame()
  