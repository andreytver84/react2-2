import './IconSwitch.css'

function IconSwitch(props) {
    return (
        <div className="iconswitch-wrap">
            <span onClick={props.onSwitch} className="icon-asset material-icons">
                <span>{props.icon}</span>
            </span>
        </div>
    )
}

export default IconSwitch;