// Components 
import Modal from './UI/Modal'
import MainButton from './UI/MainButton';

function Start(props) {
  return (
    <Modal>
      <h1>NEW GAME</h1>
      <MainButton onClick={props.onStart}>Start</MainButton>
    </Modal>
  );
}

export default Start;
