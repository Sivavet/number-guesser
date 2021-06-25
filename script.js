let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random()*9)
}

const compareGuesses = (user, com, target) => {
    if (user >= 0 && user < 10) {
        let userGuess = Math.abs(user - target);
        let comGuess = Math.abs(com - target);
        return userGuess < comGuess || userGuess === comGuess ? true : false
    } else {
        alert('Please input only number between 0-9')
    }
    
}

const updateScore = (winnerName) =>{
    return winnerName === 'human' ? humanScore+=1 : computerScore +=1;
}

const advanceRound = () => {
    currentRoundNumber+=1;
}
    