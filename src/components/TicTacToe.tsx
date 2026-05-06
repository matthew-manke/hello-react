import '../App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, Typography, Paper } from '@mui/material';

type SquareValue = "X" | "O" | null;

type SquareProps = {
  value: SquareValue;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <Grid size={{ xs: 4 }}>
      <Button
        variant="contained"
        onClick={onSquareClick}
        color="secondary"
        sx={{
          width: "100%",
          height: 60,
          fontSize: "1.2rem",
        }}
      >
        {value}
      </Button>
    </Grid>
  );
}

export default function Game() {
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move: number) {
    setCurrentMove(move);
  }

  const moves = history.map((_, move) => {
    const description =
      move > 0 ? `Go to move #${move}` : "Game start";

    return (
      <Button key={move} size="small" variant='contained' onClick={() => jumpTo(move)}>
        {description}
      </Button>
    );
  });

  return (
    <Box className="flex flex-col items-center gap-6 mt-4">
      
      {/* Game Board */}
      <Paper sx={{ p: 3 }}>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </Paper>

      {/* Move History */}
      <Box className="flex flex-col items-center gap-2">
        {moves}
      </Box>

    </Box>
  );
}

type BoardProps = {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <Box className="flex flex-col items-center gap-4">
      
      {/* Status */}
      <Typography variant="h6">{status}</Typography>

      {/* Board */}
      <Grid container spacing={1} sx={{ width: 200 }}>
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </Grid>

    </Box>
  );
}

function calculateWinner(squares: SquareValue[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}