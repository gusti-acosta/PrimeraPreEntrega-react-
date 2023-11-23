import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import ItemListConteiner from '../components/ItemListConteiner/ItemListContainer';

const Home = () => {
  const [products, setProducts] =useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/?limit=10')
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error));    
  }, []);
    
    return <ItemListConteiner products={products}/>;
  };

export default Home