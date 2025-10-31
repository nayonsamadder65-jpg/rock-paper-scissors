
function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function PlayRound(getHumanChoice, computerChoice) {
    if (getHumanChoice === computerChoice) {
        return 'It\'s a tie!';
    }  else if (    (getHumanChoice === 'rock' && computerChoice === 'scissors') ||
                 (getHumanChoice === 'paper' && computerChoice === 'rock') ||
                 (getHumanChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function score() {
    let YourScore = 0;
    let ComputerScore = 0;
    if (getHumanChoice === computerChoice) {
       return `You: ${YourScore}\nComputer: ${ComputerScore}`;
    } else if (    (getHumanChoice === 'rock' && computerChoice === 'scissors') ||
                 (getHumanChoice === 'paper' && computerChoice === 'rock') ||
                 (getHumanChoice === 'scissors' && computerChoice === 'paper')) {
      return `You: ${++YourScore}\nComputer: ${ComputerScore}`;
    } else {
       return `You: ${YourScore}\nComputer: ${++ComputerScore}`;
        
    }
    
}  

const getHumanChoice = prompt('rock paper scissors?',); 
const computerChoice = getcomputerChoice();
console.log(`User choice: ${getHumanChoice}`);
console.log(`Computer choice: ${computerChoice}`);
console.log(PlayRound(getHumanChoice, computerChoice)); 
console.log(score());
