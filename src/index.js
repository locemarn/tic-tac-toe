const message = document.querySelector('.message')
let gameOn = true;
let currentPlayer = 'X';
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameState = ['', '', '', '', '', '', '', '', '']

const winningMessage = () => `${currentPlayer} has won!`;
const drawMessage = () => `Draw Game!`;
const currentPlayerTurn = () => `${currentPlayer}'s turn`;

message.innerHTML = currentPlayerTurn()

function handlePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < 8; i++) {
        const winCondition = winningConditions[i]         
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        message.innerHTML = winningMessage();
        gameOn = false;
        return;
    }

    if (!gameState.includes('')) {
        message.innerHTML = drawMessage();
        gameOn = false;
        return false;
    }

    handlePlayer()
}

function handleCellClick(event) {
    const clickedCell = event.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))

    if (gameState[clickedCellIndex] !== '' || !gameOn) return;
    
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    handleResultValidation();
}

function handleRestart() {
    gameOn = true;
    gameState = ['', '', '', '', '', '', '', '', '']
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
    currentPlayer = 'X';
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestart)
