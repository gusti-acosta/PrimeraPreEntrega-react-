import React, { useEffect, useState } from "react";
import ItemListConteiner from "../components/ItemListConteiner/ItemListContainer";
import axios from "axios";
import { useParams } from "react-router-dom";

const Category = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/?limit=10')
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => console.log(error));    
    }, []);
    const { categoryId } = useParams();
    
    return <ItemListConteiner products={products}/>;
};

export  default Category;