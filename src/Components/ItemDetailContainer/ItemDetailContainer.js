import { useState, useEffect } from "react";
import { getProductsId } from "../../Services/Products";
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ()=>{
    const [product,setProduct] = useState({});

    const {id} = useParams();
    useEffect(()=>{
        getProductsId(id).then((product)=>{
            setProduct(product)
      }).catch((e)=>{console.log(e);});
      return (()=>{setProduct({});})

    },[id]);

    if(!product){
        return <>Sin productos</>;
    }

    return (
        <ItemDetail product={product}></ItemDetail>
    );
}

export default ItemDetailContainer;