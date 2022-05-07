import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsCategories } from "../../Services/Products";
import {useParams} from 'react-router-dom';


const ItemListContainer = ({saludo}) =>{
  const [products,setProducts] = useState([]);
  const {categories} = useParams();
  useEffect(()=>{
    if(categories){
      getProductsCategories(categories).then((products)=>{
        setProducts(products) 

      });
    }else{
      getProducts().then((products)=>{
        setProducts(products)
      });
    }
  },[categories]);

  return (
    <div className="text-center">
        <h1>{saludo}</h1>
        <ItemList products={products}></ItemList>
    </div>
  );
}

export default ItemListContainer;