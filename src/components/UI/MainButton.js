// Css 
import './MainButton.css'

function MainButton(props){
    return <button onClick={props.onClick} className="btn">{props.children}</button>
}

export default MainButton 