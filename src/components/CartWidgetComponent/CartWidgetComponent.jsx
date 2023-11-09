import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CardWidgetComponent = () => {
    const iconStyles = {
        fontSize: '1.3rem',
        paddingRight: '10px'
    }
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ed4902",}} />
            <FontAwesomeIcon  icon={faCartShopping} style={iconStyles} />
            <span style={{fontSize: '1.4rem'}}>7</span>
        </div>
    )
}

export default CardWidgetComponent;