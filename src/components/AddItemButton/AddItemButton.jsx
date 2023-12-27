import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context'

export const AddItemButton = ({label = "Agregar al carrito", quantity, handleResetQuantity}) => {

  const {itemCount, setItemCount} = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity)
    handleResetQuantity();
  }
  return (
    <button onClick={handleAddCart} style={{
      display: "inline-block",
      padding: "8px 16px",
      backgroundColor: "#FF5733",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",}}
    >
      {label}
    </button>
  )
}

