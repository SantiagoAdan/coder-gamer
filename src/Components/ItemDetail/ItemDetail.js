import {Row,Col,Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import  CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
  
const ItemDetail = ({product: product})=>{
  
  const {agregarItem,existeEnCarrito} = useContext(CartContext)
  const [cantidad,setCantidad] = useState(0)

  const onAdd = (qty)=>{
    if(qty>0){
      setCantidad(qty)
      agregarItem({...product, 'seleccionado':qty})
    }else{
      console.log('0 products')
    }
    
  }

   return (  
      <Row>
         <Col style={{ textAlign: "center"}} className="justify-content-md-center d-flex">  
            <Card  style={{ width: '30rem'}}>
                <Card.Header> <h3>{product.name} </h3></Card.Header>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.categories}</Card.Title>      
                    <Card.Text>Precio: $ {product.price}</Card.Text>
                    {
                    (cantidad===0&&!existeEnCarrito(product.id))?
                    <ItemCount inicial={1} stock={product.stock} onAdd={onAdd}></ItemCount>:
                    <Link className="btn btn-primary" to={'/cart'}>Ir al Carrito</Link> 
                    }
                    
                </Card.Body>
                <Card.Footer><Link className="btn btn-secondary" to={'/'}>Volver a Productos</Link> </Card.Footer>
            </Card>  

          </Col>
        </Row>
      );
}

export default ItemDetail;