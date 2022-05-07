import {Row,Col,Button} from "react-bootstrap";
import {  AiFillDelete } from 'react-icons/ai'


const CartItem = ({item,eliminarItem}) =>{
    return (
        <Row>
            <Col>{item.name}</Col>
            <Col>{item.category}</Col>
            <Col>{item.sel}</Col>
            <Col>$ {item.precio.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Col>
            <Col>$ {(item.precio*item.sel).toLocaleString(undefined, { maximumFractionDigits: 2 })}</Col>
            <Col className="text-right"  ><Button onClick={()=>eliminarItem(item.id)}><AiFillDelete fontSize="25px" /></Button></Col>
        </Row>
    )
}

export default CartItem;