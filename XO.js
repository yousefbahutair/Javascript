// Initialize the game board
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// Function to display the board
function displayBoard() {
    console.log(board.map(row => row.map(cell => cell === null ? '_' : cell).join(' | ')).join('\n'));
}

// Function to check if there's a winner
function checkWinner(player) {
    // Check rows, columns, and diagonals for a winning pattern
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true; // Check rows
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; // Check columns
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; // Check diagonal \
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; // Check diagonal /
    return false;
}

// Function to check if the board is full (draw)
function checkDraw() {
    return board.flat().every(cell => cell !== null);
}

// Function to play the game
function playGame() {
    let currentPlayer = 'X'; // X starts first
    
    while (true) {
        // Display the board
        displayBoard();
        
        // Prompt the player for a move
        let move = prompt(`${currentPlayer}'s turn! Enter your move as row,column (e.g., 1,2):`);
        let [row, col] = move.split(',').map(Number);
        
        // Validate the move
        if (board[row][col] !== null) {
            console.log("Invalid move! That space is already taken.");
            continue;
        }

        // Make the move
        board[row][col] = currentPlayer;
        
        // Check for a win
        if (checkWinner(currentPlayer)) {
            displayBoard();
            console.log(`${currentPlayer} wins!`);
            break;
        }

        // Check for a draw
        if (checkDraw()) {
            displayBoard();
            console.log("It's a draw!");
            break;
        }

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Start the game
playGame();
