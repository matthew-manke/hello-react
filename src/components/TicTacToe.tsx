import '../App.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, Typography, Paper } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { playMove, jumpToMove } from "../store/game/gameSlice";
import { calculateWinner, type SquareValue } from '../utils/gameLogic';

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
  const dispatch = useDispatch();

  const history = useSelector((state: RootState) => state.game.history);
  const currentMove = useSelector((state: RootState) => state.game.currentMove);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    dispatch(playMove(nextSquares));
  }

  function jumpTo(move: number) {
    dispatch(jumpToMove(move));
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
    <Box className="flex flex-col items-center gap-6 mt-8">
      
      {/* Game Board */}
      <Paper className="p-6">
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