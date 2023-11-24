import React from 'react'
import { Card } from 'react-bootstrap';

const ItemDetailConteiner = () => {
  return (
    <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          display: "grid",
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
              borderRadius: "3px"
            }}
            >
            <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
  )
}

export default ItemDetailConteiner