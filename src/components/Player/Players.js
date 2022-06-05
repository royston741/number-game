// Hooks 
import { useDispatch, useSelector } from "react-redux";

// Components
import Player from "./Player";
import { gameActions } from "../../store/index";

// Css
import "./Players.css";

function Players() {
  const dispatch = useDispatch();

  const score1 = useSelector((state) => state.gameFunctions.player1Score);
  const player1Btn = useSelector((state) => state.gameFunctions.player1Btn);

  const score2 = useSelector((state) => state.gameFunctions.player2Score);
  const player2Btn = useSelector((state) => state.gameFunctions.player2Btn);

  const player1ScoreFunction = (score) => {
    dispatch(gameActions.player1(score));
  };

  const player2ScoreFunction = (score) => {
    dispatch(gameActions.player2(score));
    dispatch(gameActions.roundWinner());
    setTimeout(() => {
      dispatch(gameActions.roundReset());
    }, 1000);
  };

  return (
    <>
      <div className="players">
        <Player
          playerNum="1"
          playerScore={score1}
          onScore={player1ScoreFunction}
          onDisable={player1Btn}
        />
        <hr />
        <Player
          playerNum="2"
          playerScore={score2}
          onScore={player2ScoreFunction}
          onDisable={player2Btn}
        />
      </div>
    </>
  );
}

export default Players;
