import React from "react";
import {Card} from "react-bootstrap"
import { Link } from 'react-router-dom';

const ItemListConteiner = ({products}) =>{
    return (
        <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          display: "grid",
          height: "1200px",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px"
        }}
        
      >
        {products.map((product) => {
          return (
            <Card 
              key={product.id} 
              style={{
                border: "3px solid  $color-borde1",
                textAlign: "center",
                borderRadius: "3px",
               }}
            >
              <Card.Img variant="top" style={{
                width: "287px",
                borderBottom: "1px solid #ccc",
                height: "200px"
              }}
              src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{
                  maxHeight: "100px",
                  minHeight: "100px",
                  margin: "10px 0",
                  overflow: "hidden",
                }}
                
                >{product.description}</Card.Text>
                <button style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: "#FF5733",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                >Agregar al carrito
                </button>
                
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
};

export default ItemListConteiner;