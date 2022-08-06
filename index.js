function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}

function playRound(playerSelection, computerChoice = getComputerChoice()) {
    computerChoice = computerChoice.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerChoice) {
        return `It's a draw!!!`
    } else if (playerSelection == 'rock' && computerChoice == 'paper') {
        return `You lose! Paper beats Rock`
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        return `You Win! Rock beats Scissors`
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        return `You Win! Paper beats Rock`
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        return `You lose! Scissors beats paper`
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        return `You Win! Scissors beats Paper`
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        return `You lose! Rock beats Scissors`
    }
}

console.log(playRound('roCk'))
console.log(playRound('paPeR'))
console.log(playRound('scissors'))