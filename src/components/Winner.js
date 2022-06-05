// Hooks 
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

// Components 
import Modal from "./UI/Modal";
import MainButton from "./UI/MainButton";
import { gameFunctionalityActions } from "../store/game";
import { gameActions } from "../store/index";

// Css 
import "./Winner.css";

const Backdrop = (props) => {
  return <div className="backdrop">{props.children}</div>;
};

const ModalOverLay = (props) => {
  const dispatch = useDispatch();

  // Reset game function 
  const resetGameHandler = () => {
    dispatch(gameActions.restart());
    dispatch(gameFunctionalityActions.winner())
  };

  // Quit game function 
  const quitGameHandler = () => {
    dispatch(gameActions.restart());
    dispatch(gameFunctionalityActions.winner())
    dispatch(gameFunctionalityActions.gameQuit());
    localStorage.removeItem("GAME_ON");
  };
  
  return (
    <Backdrop>
      <Modal>
        <h1>Player {props.playerNum}</h1>
        <MainButton onClick={resetGameHandler}>Restart &#8635;</MainButton>
        <MainButton onClick={quitGameHandler}>Quit game</MainButton>
      </Modal>
    </Backdrop>
  );
};

function Winner(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverLay playerNum={props.playerNum} />,
        document.getElementById("root2")
      )}
      ;
    </>
  );
}

export default Winner;
