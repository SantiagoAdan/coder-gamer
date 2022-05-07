import { BsCart2,BsCartFill  } from 'react-icons/bs'
import { useContext } from 'react';
import  CartContext  from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () =>{

  const {cart} = useContext(CartContext)

  return (
    <NavLink variant="light rounded-pill" to="/cart"  >
      {cart.length<=0?<BsCart2 fontSize="25px" />:<BsCartFill fontSize="25px"/>} {cart.length}
    </NavLink>
  );
}

export default CartWidget;