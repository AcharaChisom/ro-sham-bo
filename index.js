const buttons = document.querySelectorAll('.hand')
const message = document.querySelector('.message')
const playersScore = document.querySelector('.player')
const computersScore = document.querySelector('.computer')
const container = document.querySelector('.container')
const playerHand = document.querySelector('.player-hand')
const computerHand = document.querySelector('.computer-hand')

let playerScore = 0
let computerScore = 0

const round = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const hands = {
                rock: '✊',
                paper: '✋',
                scissors: '✌️'
            }
            const playerVal = button.textContent.toLowerCase()
            const [roundMessage, playerWon, playerLost, computerChoice] = playRound(playerVal)
            const computerVal = computerChoice

            if(playerScore == 5 || computerScore == 5) {
                message.textContent = message.textContent
                playerHand.textContent = playerHand.textContent
                computerHand.textContent = computerHand.textContent
            } else {
                message.textContent = roundMessage
                switch (playerVal){
                    case 'rock':
                        playerHand.textContent = hands.rock
                        break;
                    case 'paper':
                        playerHand.textContent = hands.paper
                        break;
                    case 'scissors':
                        playerHand.textContent = hands.scissors
                        break;
                }    
                computerHand.textContent = hands.paper
                switch (computerVal){
                    case 'rock':
                        computerHand.textContent = hands.rock
                        break;
                    case 'paper':
                        computerHand.textContent = hands.paper
                        break;
                    case 'scissors':
                        computerHand.textContent = hands.scissors
                        break;
                } 
            }

            if (playerWon === playerLost) {
                playerScore = playerScore
                computerScore = computerScore
            } else {
                if (playerWon) {
                    if(playerScore == 5 || computerScore == 5) {
                        playerScore = playerScore
                    } else {
                        playerScore += 1
                    }
                } else {
                    if(playerScore == 5 || computerScore == 5) {
                        computerScore = computerScore
                    } else {
                        computerScore += 1
                    }
                }
            }
            
            playersScore.textContent = playerScore
            computersScore.textContent = computerScore
            if (playerScore > 4 || computerScore > 4) {
                setTimeout(() => {
                    container.innerHTML = `<div class='win'>${playerScore > computerScore ? 'You' : 'The computer'} Won!!!</div>`
                }, 1500)
            }
        })
    })
}


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}

function playRound(playerSelection, computerChoice = getComputerChoice(), isWon = false, isLose = false) {
    computerChoice = computerChoice.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerChoice) {
        return [`It's a draw!!!`, isWon, isLose, computerChoice]
    } else if (playerSelection == 'rock' && computerChoice == 'paper') {
        isLose = true
        return [`You lose! Paper beats Rock`, isWon, isLose, computerChoice]
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        isWon = true
        return [`You Win! Rock beats Scissors`, isWon, isLose, computerChoice]
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        isWon = true
        return [`You Win! Paper beats Rock`, isWon, isLose, computerChoice]
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        isLose = true
        return [`You lose! Scissors beats paper`, isWon, isLose, computerChoice]
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        isWon = true
        return [`You Win! Scissors beats Paper`, isWon, isLose, computerChoice]
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        isLose = true
        return [`You lose! Rock beats Scissors`, isWon, isLose, computerChoice]
    }
}

round()

