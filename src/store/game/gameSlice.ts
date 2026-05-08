import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SquareValue = "X" | "O" | null;

type GameState = {
  history: SquareValue[][];
  currentMove: number;
};

const initialState: GameState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playMove(state, action: PayloadAction<SquareValue[]>) {
      const nextSquares = action.payload;

      const nextHistory = [
        ...state.history.slice(0, state.currentMove + 1),
        nextSquares,
      ];

      state.history = nextHistory;
      state.currentMove = nextHistory.length - 1;
    },

    jumpToMove(state, action: PayloadAction<number>) {
      state.currentMove = action.payload;
    },

    resetGame() {
      return initialState;
    },
  },
});

export const { playMove, jumpToMove, resetGame } = gameSlice.actions;
export default gameSlice.reducer;