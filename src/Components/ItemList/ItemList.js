import Item from "../Item/Item";
import {Container, Row} from "react-bootstrap";

const ItemList = ({productos: products=[]}) =>{
   return (
        <Container>
            <Row>  
                {products.map((e) => <Item key={e.id}  item={e} />)}
            </Row>
        </Container>
    );   
}

export default ItemList;