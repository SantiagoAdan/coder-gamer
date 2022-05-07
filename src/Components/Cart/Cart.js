import { useContext, useState } from "react";
import  CartContext  from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Container,Col, Row, Button} from "react-bootstrap";
import { BsCartX, BsFillBagCheckFill } from 'react-icons/bs'
import Contacto from "../Contact/Contact";


const Cart =()=>{
    const  {cart,eliminarItem,limpiarCart,getTotal} = useContext(CartContext)
    const [mostrar,setMostrar] = useState(false)
    const mostrarContacto = ()=>{
        setMostrar(true)
    }
  

    return (
        <Container>
        {cart.length>0?
        <>
        <Row>
            <Col><h2>CARRITO</h2></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col><Button onClick={()=>limpiarCart()}><BsCartX fontSize="25px"/> Vaciar </Button></Col>
            <Col><Button onClick={()=>mostrarContacto()}  className="btn btn-success" ><BsFillBagCheckFill fontSize="25px"/> Finalizar Compra </Button></Col>           
        </Row>
        <Row className="showGrid">
            <Col><b>Producto</b></Col>
            <Col><b>Categoría</b></Col>
            <Col><b>Cantidad</b></Col>
            <Col><b>Precio</b></Col>
            <Col><b>Total</b></Col>
            <Col><b>Eliminar</b></Col>
        </Row>
          
        {cart.map((e) => <CartItem eliminarItem={eliminarItem} key={e.id}  item={e}> </CartItem>)}
        <Row className="showGrid">
            <Col><b>Total</b></Col>
            <Col></Col>
            <Col><b>$ {getTotal().toLocaleString(undefined, { maximumFractionDigits: 2 })}</b></Col>
        </Row>

        </>: <div className="p-3 mb-2 bg-info text-center text-white"><h3>Sin Productos en el Carrito</h3></div>
        }

        
        {mostrar&&<Contacto setMostrar={setMostrar} />}
        </Container> 
    );

}

export default Cart;