import {Row,Col,Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import  CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
  
const ItemDetail = ({producto})=>{
  
  const {agregarItem,existeEnCarrito} = useContext(CartContext)
  const [cantidad,setCantidad] = useState(0)

  const onAdd = (knt)=>{
    if(knt>0){
      setCantidad(knt)
      agregarItem({...producto, 'seleccionado':knt})
    }else{
      console.log('cantidad igual a cero')
    }
    
  }

   return (  
      <Row>
         <Col style={{ textAlign: "center"}} className="justify-content-md-center d-flex">  
            <Card  style={{ width: '30rem'}}>
                <Card.Header> <h3>{producto.name} </h3></Card.Header>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.categories}</Card.Title>      
                    <Card.Text>Precio: $ {producto.price}</Card.Text>
                    {
                    (cantidad===0&&!existeEnCarrito(producto.id))?
                    <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>:
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