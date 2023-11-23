import React from 'react'
import ItemDetailConteiner from '../components/ItemListContainer/ItemDetailConteiner'

const Item = () => {
    const [product, setProduct] =useState({})

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/?limit=10')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));    
    }, []);

    return <ItemDetailConteiner product={product}/>
}

export default Item;