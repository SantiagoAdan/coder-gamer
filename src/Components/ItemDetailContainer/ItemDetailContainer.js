import { useState, useEffect } from "react";
import { getProductosId } from "../../Services/Products";
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ()=>{
    const [product,setProduct] = useState({});

    const {id} = useParams();
    useEffect(()=>{
        getProductosId(id).then((producto)=>{
            setProduct(producto)
      }).catch((e)=>{console.log(e);});
      return (()=>{setProduct({});})

    },[id]);

    if(!product){
        return <>no hay productos</>;
    }

    return (
        <ItemDetail producto={product}></ItemDetail>
    );
}

export default ItemDetailContainer;