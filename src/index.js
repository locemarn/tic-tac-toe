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

function handleCellClick(event) {
    const clickedCell = event.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))
    
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer

    console.log(gameState)

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))

