import './SimpleButton.css';

function SimpleButton(props) {
    return(
        <a href={props.link} >
            <button style={{backgroundColor : props.backgroundColor, color : props.color}} type={props.type} onClick={props.onClick} className="simple-button">
                {props.text}
            </button>
        </a>
    );
}

export default SimpleButton;