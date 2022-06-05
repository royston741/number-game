// Css
import "./Player.css";

function Player(props) {
  const randomIntegerHandler = () => {
    const score =Math.floor(Math.random() * 10)
    props.onScore(score);
  };

  return (
    <div className="player">
      <h2 className="player-heading">Player {props.playerNum}</h2>
      <div className="player-score">{props.playerScore}</div>
      <button className="player-btn" onClick={randomIntegerHandler} disabled={props.onDisable}>
        Click
      </button>
    </div>
  );
}

export default Player;
