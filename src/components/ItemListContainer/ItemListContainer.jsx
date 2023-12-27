import React from "react";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { AddItemButton } from "../AddItemButton";


export const ItemListContainer = ({products}) =>{
    return (
        <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          display: "grid",
          height: "1000px",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px"
        }}
       >
        {products.map((product) => {
          return (
            <Card key={product.id} style={{ border: "3px solid  $color-borde1", textAlign: "center", borderRadius: "3px"}}>
              <Link to={`/item/${product.id}`}>
                <Card.Img variant="top" src={product.thumbnail} style={{width: "287px", borderBottom: "1px solid #ccc",height: "200px"}}/>
              </Link>
              <Card.Body>
                <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"  }}>
                  {product.title}
                  </Card.Title>
                <Card.Text style={{
                  maxHeight: "100px",
                  minHeight: "100px",
                  margin: "10px 0",
                  overflow: "hidden",
                }}
                >{product.description}</Card.Text>
                <p>
                  Precio: ${product.price}
                </p>

                <AddItemButton />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
};
