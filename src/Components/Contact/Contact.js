import CartContext from "../../Context/CartContext";
import { useContext, useState } from "react";
import {useForm} from 'react-hook-form'
import { Form,Modal, Button, Alert } from "react-bootstrap";


const Contacto =  ({ setMostrar}) =>{
    const  {cart,nuevaOrden}        = useContext(CartContext)
    const [idOrden,setIdOrden]      = useState('');
    const [tipoAlert,setTipoAlert]  = useState('success');
    const [msg,setMsg]              = useState('');
    const {register, handleSubmit}  = useForm();
    
    const onSubmit =  async(comprador) => {

        if(comprador.email !==comprador.email2){
            setMsg("Las direecciones de correo eletrónico deben ser iguales")
            setTipoAlert('danger')
            return 
        }
        const id =  await nuevaOrden({cart,comprador}) 
        setIdOrden(id) 
        if(id!==''){
            setMsg('Orden de Compra realizada. Nro: '+id)
            setTipoAlert('success')
        }
    };
    return (<>
           
            <Modal show={true} onHide={()=>setMostrar(false)} >
                <Modal.Header closeButton>
                <Modal.Title>Crear Orden de Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Alert show={idOrden!==''||tipoAlert==='danger'} variant={tipoAlert}>
                        {msg}
                    </Alert>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        
                        <Form.Group className="mb-3" >
                            <Form.Label>Apellido y Nombre</Form.Label>
                            <Form.Control type="text" {...register("nombre")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="number" placeholder="3816299773" {...register("telefono")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="name@ejemplo.com" {...register("email")} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Repetir Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="name@ejemplo.com" {...register("email2")} />
                        </Form.Group>
                        <Form.Group className="justify-content-md-center d-flex"  >
                            <Button variant="secondary" onClick={()=>setMostrar(false)}>Cerrar
                            </Button>
                           { idOrden===''&&<Button variant="primary" type="submit"> Crear </Button>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
              
                </Modal.Footer>
            </Modal>
            </>)
}

export default Contacto;