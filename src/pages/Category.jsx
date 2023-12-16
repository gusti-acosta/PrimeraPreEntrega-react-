import React, { useEffect, useState } from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer }from "../components/"
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProducts("products", categoryId, "category");  
  return <ItemListContainer products={products}/>;
};


export default Category;