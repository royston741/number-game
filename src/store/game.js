// Hooks 
import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: { gameOn: false, winner: false, winnerNum: 1 },
  reducers: {
    gameStart(state) {
      state.gameOn = true;
    },
    gameQuit(state) {
      state.gameOn = false;
    },
    winner(state, action) {
      state.winner = !state.winner;
      state.winnerNum = action.payload;
    },
  },
});

export const gameFunctionalityActions = gameSlice.actions;

export default gameSlice.reducer;
