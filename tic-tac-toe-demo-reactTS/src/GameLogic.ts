// Logic for the tic-tac-toe game like creating the initial game state, making moves, and calculating the winner

export type PlayerType = "X" | "O" | null; // Null represents end of game, like "no more players, player isnull"
export type Square = PlayerType; // Null for empty squares, "X" or "O" for filled squares
export type GameBoard = Square[];


export interface GameState {
    board: GameBoard;
    currentPlayer: PlayerType;
    winner: PlayerType;
}

// Using lambda function to create the initial game state
export const createInitialGameState = (): GameState => ({
    board: Array(9).fill(null) as GameBoard,
    currentPlayer: "X",
    winner: null,
});

// Function to make a move
export function makeMove(state: GameState, index: number): GameState {
    if (state.board[index] || state.winner || state.currentPlayer === null) {
        return state; // Invalid move
    }

    const newBoard = [...state.board];
    newBoard[index] = state.currentPlayer;

    const nextPlayer = state.currentPlayer === "X" ? "O" : "X";
    const winner = calculateWinner(newBoard);

    return {
        board: newBoard,
        currentPlayer: nextPlayer,
        winner: winner,
    };
}

// Function to calculate the winner
export function calculateWinner(theBoard: GameBoard): PlayerType {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of winningLines) {
        if (theBoard[a] === theBoard[b] && theBoard[b] === theBoard[c] && theBoard[a]) {
            return theBoard[a];
        }
    }

    return null;
}