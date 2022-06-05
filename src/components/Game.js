// Hooks 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import ScoreBoard from "./ScoreBoard";
import PlayBoard from "./PlayBoard";
import Winner from "./Winner";
import { gameFunctionalityActions } from "../store/game";

function Game() {

  const dispatch=useDispatch()

  const player1Total = useSelector((state) => state.gameFunctions.player1Total);
  const player2Total = useSelector((state) => state.gameFunctions.player2Total);
  
  const winner = useSelector(state=>state.game.winner)
  const winnerNum = useSelector(state=>state.game.winnerNum)


  useEffect(() => {
    if (player1Total === 5) {
      dispatch(gameFunctionalityActions.winner(1));
    } else if (player2Total === 5) {
      dispatch(gameFunctionalityActions.winner(2));
    }
  }, [player1Total, player2Total,dispatch]);

  return (
    <>
      <ScoreBoard />
      <PlayBoard />
      {winner&&<Winner playerNum={winnerNum} />}
    </>
  );
}

export default Game;
