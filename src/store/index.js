// Hooks
import { configureStore, createSlice } from "@reduxjs/toolkit";

// game slice
import gameReducer from "./game";

const gameFunctionsSlice = createSlice({
  name: "gamefunctions",
  initialState: {
    player1Score: 0,
    player2Score: 0,
    player1Btn: false,
    player2Btn: true,
    player1Total: 0,
    player2Total: 0,
  },
  reducers: {
    player1(state, action) {
      state.player1Score = action.payload;
      state.player1Btn = !state.player1Btn;
      state.player2Btn = !state.player2Btn;
    },
    player2(state, action) {
      state.player2Score = action.payload;
      state.player1Btn = !state.player1Btn;
      state.player2Btn = !state.player2Btn;
    },
    roundWinner(state) {
      const player1 = state.player1Score;
      const player2 = state.player2Score;
      if (player1 > player2) {
        state.player1Total++;
      }
      if (player2 > player1) {
        state.player2Total++;
      }
    },
    roundReset(state) {
      state.player1Score = 0;
      state.player2Score = 0;
    },
    restart(state) {
      state.player1Score = 0;
      state.player2Score = 0;

      state.player1Total = 0;
      state.player2Total = 0;
    },
  },
});

export const gameActions = gameFunctionsSlice.actions;

const store = configureStore({
  reducer: { game: gameReducer, gameFunctions: gameFunctionsSlice.reducer },
});

export default store;
