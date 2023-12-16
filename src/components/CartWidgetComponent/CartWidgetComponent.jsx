import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context'
import React from 'react'


const CardWidgetComponent = () => {
    const {itemCount} = React.useContext(CartContext)
    const iconStyles = {
        fontSize: '1.3rem',
        paddingRight: '10px',
        color: "#fff",
    }
    return (
        <div>
            <FontAwesomeIcon  icon={faCartShopping} style={iconStyles} />
            <span style={{fontSize: '1.4rem'}}>{itemCount}</span>
        </div>
    )
}

export default CardWidgetComponent;