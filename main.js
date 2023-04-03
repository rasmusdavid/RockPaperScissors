let playerScore = 0;
let computerScore = 0;
const rock = 1;
const paper = 2;
const scissor = 3;
let playerScoreUpdate = document.getElementById('playerScore');
let computerScoreUpdate = document.getElementById('computerScore');
let firstStep = document.getElementById('enterName')
let choice = document.getElementById('playerChoice')
let youWon = document.getElementById('youWon')
let compWon = document.getElementById('compWon')
let tryAgain = document.getElementById('tryAgain')
let tryAgainComp = document.getElementById('tryAgainComp')
let noThanks = document.getElementById('noThanks')
let noThanksComp = document.getElementById('noThanksComp')
let displayResult = document.getElementById('displayResult')

function lose(message) {
    choice.style.visibility = 'hidden'
    displayResult.style.visibility = 'visible'

    displayResult.innerHTML = message

    if (computerScore < 1) {
        setTimeout(() => {
            displayResult.style.visibility = 'hidden'
            choice.style.visibility = 'visible'
        }, "2000")
    }
    computerScore++;
    computerScoreUpdate.innerHTML = computerScore
    if (computerScore === 2) {

        setTimeout(() => {
            displayResult.style.visibility = 'hidden'
            compWon.style.visibility = 'visible'
            playerScore = 0;
            computerScore = 0;
            playerScoreUpdate.innerHTML = playerScore;
            computerScoreUpdate.innerHTML = computerScore

        }, "2000")
        tryAgainComp.addEventListener('click', function () {
            compWon.style.visibility = 'hidden'
            choice.style.visibility = 'visible'
        })
        noThanksComp.addEventListener('click', function () {
            window.location.reload();
        })
    }
}
function win(message) {
    choice.style.visibility = 'hidden'
    displayResult.style.visibility = 'visible'

    displayResult.innerText = message

    if (playerScore < 1) {
        setTimeout(() => {
            displayResult.style.visibility = 'hidden'
            choice.style.visibility = 'visible'
        }, "2000")
    }

    playerScore++;
    playerScoreUpdate.innerHTML = playerScore;
    if (playerScore === 2) {

        setTimeout(() => {
            displayResult.style.visibility = 'hidden'
            youWon.style.visibility = 'visible'
            playerScore = 0;
            computerScore = 0;
            playerScoreUpdate.innerHTML = playerScore;
            computerScoreUpdate.innerHTML = computerScore

        }, "2000")
        tryAgain.addEventListener('click', function () {
            youWon.style.visibility = 'hidden'
            choice.style.visibility = 'visible'
        })
        noThanks.addEventListener('click', function () {
            window.location.reload();
        })
    }
}
function draw(message) {
    choice.style.visibility = 'hidden'
    displayResult.style.visibility = 'visible'
    displayResult.innerText = message

    setTimeout(() => {
        displayResult.style.visibility = 'hidden'
        choice.style.visibility = 'visible'
    }, "2000")
}

function computerChoice() {
    let compPick = Math.floor(Math.random() * 3 + 1)
    return compPick;
}

function start() {
    let playerName = document.getElementById('playerName')
    document.querySelector('#nameHolder').addEventListener('submit', function (event) {
        event.preventDefault();
        if (event.target.elements.Playername.value == '') {
            playerName.innerHTML = Player
        }
        else {
            playerName.innerHTML = event.target.elements.Playername.value
        }

        stageOne()
    })
}

function stageOne() {

    let playerPickRock = document.getElementById('playerPickRock')
    let playerPickPaper = document.getElementById('playerPickPaper')
    let playerPickScissor = document.getElementById('playerPickScissor')
    firstStep.style.visibility = 'hidden'
    choice.style.visibility = 'visible'
    youWon.style.visibility = 'hidden'
    compWon.style.visibility = 'hidden'

    playerPickRock.addEventListener('click', function () {
        secondStep(rock, computerChoice());
    })
    playerPickPaper.addEventListener('click', function () {
        secondStep(paper, computerChoice());
    })
    playerPickScissor.addEventListener('click', function () {
        secondStep(scissor, computerChoice())
    })
}

function secondStep(playerchoice, compPick) {

    switch (playerchoice) {

        case 1:
            if (compPick === 1) {
                draw("Computer also picked rock. It's a draw")
            }
            if (compPick === 2) {
                lose('Computer picked paper. You lose')
            }
            if (compPick === 3) {
                win('Computer picked scissor. You win')
            }
            break;

        case 2:
            if (compPick === 1) {
                win('Computer picked rock. You win')
            }
            if (compPick === 2) {
                draw("Computer also picked paper. It's a draw")
            }
            if (compPick === 3) {
                lose('Computer picked scissor. You lose')
            }
            break;
        case 3:
            if (compPick === 1) {
                lose('Computer picked rock. You lose')
            }
            if (compPick === 2) {
                win('Computer picked paper. You win')
            }
            if (compPick === 3) {
                draw("Computer also picked scissor. It's a draw")
            }
            break;
    }
}

start()


