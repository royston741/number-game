// Hooks 
import { useDispatch } from "react-redux";

// Components 
import Modal from "./UI/Modal";
import MainButton from "./UI/MainButton";
import Players from "./Player/Players";
import { gameFunctionalityActions } from "../store/game";

// Css
import "./PlayBoard.css";
import { gameActions } from "../store/index";

function PlayBoard() {
  const dispatch=  useDispatch()

  // Quit game function 
  const quitGameHandler = () => {
    dispatch(gameActions.restart())
    dispatch(gameFunctionalityActions.gameQuit())
    localStorage.removeItem("GAME_ON");
  };

  const resetGameHandler=()=>{
    dispatch(gameActions.restart())
  }

  return (
    <Modal>
      <MainButton onClick={resetGameHandler}>Restart &#8635;</MainButton>
      <Players />
      <MainButton onClick={quitGameHandler}>Quit game</MainButton>
    </Modal>
  );
}

export default PlayBoard;
