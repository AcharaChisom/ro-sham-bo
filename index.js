function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}

function playRound(playerSelection, computerChoice = getComputerChoice(), isWon = false, isLose = false) {
    computerChoice = computerChoice.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerChoice) {
        return [`It's a draw!!!`, isWon, isLose]
    } else if (playerSelection == 'rock' && computerChoice == 'paper') {
        isLose = true
        return [`You lose! Paper beats Rock`, isWon, isLose]
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        isWon = true
        return [`You Win! Rock beats Scissors`, isWon, isLose]
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        isWon = true
        return [`You Win! Paper beats Rock`, isWon, isLose]
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        isLose = true
        return [`You lose! Scissors beats paper`, isWon, isLose]
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        isWon = true
        return [`You Win! Scissors beats Paper`, isWon, isLose]
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        isLose = true
        return [`You lose! Rock beats Scissors`, isWon, isLose]
    }
}

function game() {
    let playerWin = 0
    let computerWin = 0
    for(let i = 0; i < 5; i++) {
        const playerChoice = prompt('Enter a value("rock", "paper", "scissors")')
        const [message, win, lose] = playRound(playerChoice)
        if (win == lose) {
            playerWin = playerWin 
            computerWin = computerWin 
        } else if (win) {
            playerWin += 1
        } else {
            computerWin += 1
        }
        console.log(message)
    }

    if (playerWin > computerWin) {
        console.log(`You Won!!!  ${playerWin} - ${computerWin}`)
    } else if (computerWin > playerWin) {
        console.log(`Computer Won!!!  ${playerWin} - ${computerWin}`)
    } else {
        console.log(`It's a draw!!!  ${playerWin} - ${computerWin}`)
    }
}

game()