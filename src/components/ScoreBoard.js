// Hooks 
import { useSelector } from "react-redux";

// Components 
import Modal from "./UI/Modal";

// Css 
import './ScoreBoard.css'

function ScoreBoard() {
  const player1Total=useSelector(state=>state.gameFunctions.player1Total)
  const player2Total=useSelector(state=>state.gameFunctions.player2Total)
  
  return (
    <Modal className='bottom-margin'>
    <p className="rule">The first to reach 5 points wins</p>
    <div className="flex">
      <div className="player">
        <h2>Player 1</h2>
        <div className="player-result">{player1Total}</div>
      </div>
      <div className="player">
        <h2>Player 2</h2>
        <div className="player-result">{player2Total}</div>
      </div>
    </div>
    </Modal>
  );
}

export default ScoreBoard;
