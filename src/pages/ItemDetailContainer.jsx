import React from "react";
import Card  from "react-bootstrap/Card";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector, AddItemButton } from "../components";


export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading, error } = useSingleProduct(productId)
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      margin: "50px 90px",
      border: "1px solid #FF5733",
      borderRadius: "20px",
      height: "800px"
    }}
  >
    <div style={{ flex: 1, marginRight: "20px" }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ height: "700px", borderRadius: "2px", width:"800px",  margin: "0 30px"}}
      />
    </div>
    <div style={{ flex: 2, textAlign: "left" }}>
      <h2 style={{ fontSize: "1.5rem", margin: "100px 0" }}>{product.title}</h2>
      <p style={{ fontSize: "1rem", color: "#666", marginBottom: "10px" }}>{product.description}</p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>
        Precio: ${product.price}
      </p>
      <ItemQuantitySelector  />
    </div>
  </div>
);
};