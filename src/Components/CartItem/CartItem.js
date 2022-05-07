import {Row,Col,Button} from "react-bootstrap";
import {  AiFillDelete } from 'react-icons/ai'


const CartItem = ({item,eliminarItem}) =>{
    return (
        <Row>
            <Col>{item.nombre}</Col>
            <Col>{item.categoria}</Col>
            <Col>{item.seleccionado}</Col>
            <Col>$ {item.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Col>
            <Col>$ {(item.precio*item.seleccionado).toLocaleString(undefined, { maximumFractionDigits: 2 })}</Col>
            <Col className="text-right"  ><Button onClick={()=>eliminarItem(item.id)}><AiFillDelete fontSize="25px" /></Button></Col>
        </Row>
    )
}

export default CartItem;