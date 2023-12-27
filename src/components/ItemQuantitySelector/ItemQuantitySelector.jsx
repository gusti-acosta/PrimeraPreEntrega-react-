import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";

export const ItemQuantitySelector = () => {
    const [ quantity, setQuantity] = React.useState(1)
    const handleAddProduct = () => {
        setQuantity(quantity + 1);
    }
    const handleSubstractProduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleResetQuantity = () => {
        setQuantity(1);
    }
    return (
        <div>
            <button onClick={handleSubstractProduct} style={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#FF5733",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",}}>
             - 
            </button>
            <input type="number" value={quantity}disabled style={{
                padding: "0px 0px",
                width:"40px",
                height: "40px",
            }} />
            <button onClick={handleAddProduct} style={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#FF5733",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                marginRight: "10px"
            }}>
                +
            </button>
            <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>

        </div>
    )
}
