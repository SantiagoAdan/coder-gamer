import {Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return(
        <Col>
            <Card  style={{ width: '20rem'}}>
                <Card.Header>{item.categories}</Card.Header>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>      
                    <Card.Text>$ {item.price}</Card.Text>
                    {item.stock>0&&<Link className="btn btn-primary" to={'/productos/detalle/'+item.id}>Ver detalle de Producto</Link>}
                </Card.Body>
                <Card.Footer>{item.stock>0?'Disponibles: ' + item.stock:'SIN STOCK'}</Card.Footer>
            </Card>  
        </Col>
    );
}

export default Item;