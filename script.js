let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerMove(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('status').innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.getElementById('status').innerText = "Player X's turn";
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.innerText = '';
    });
}
