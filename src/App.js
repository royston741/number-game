// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Start from "./components/Start";
import Game from "./components/Game";
import { gameFunctionalityActions } from "./store/game";

function App() {
  const dispatch = useDispatch();

  // Suscribe to store and get game
  const game = useSelector((state) => state.game.gameOn);

  // Start game function
  const startGameHandler = () => {
    localStorage.setItem("GAME_ON", "1");
    dispatch(gameFunctionalityActions.gameStart());
  };

  // Check the game is on or not
  useEffect(() => {
    if (localStorage.getItem("GAME_ON") === "1") {
      dispatch(gameFunctionalityActions.gameStart());
    }
  }, [dispatch]);

  return <>{game ? <Game /> : <Start onStart={startGameHandler} />}</>;
}

export default App;
