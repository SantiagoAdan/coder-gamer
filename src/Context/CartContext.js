import { createContext,useState } from "react";
import { crearOrden } from "../Services/Cart";

const Context = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const agregarItem = (prod)=> {
        setCart([...cart,{...prod}])
    }

    const eliminarItem = (id) =>{
        setCart(cart.filter((item)=>{return item.id !== id&&item}))
     }

    const limpiarCart = ()=>{
        setCart([])
    }

    const existeEnCarrito = (id)=>{
        const encontrado = cart.find(item => item.id === id );
        return encontrado?true:false
    }

    const getTotal = () =>{
            let total = 0;
        cart.forEach(item=>{
            total += item.precio * item.seleccionado
        })
        return total
    }

    const nuevaOrden=  async ({cart, comprador})=>{
        const fecha = new Date()
        const total = getTotal()
        const orden = {comprador,items:cart, fecha,total}

      const id =  await crearOrden(orden)
      limpiarCart()
      return id

       
      
    }
    
    return (
        <Context.Provider value={{cart,agregarItem,eliminarItem,limpiarCart,existeEnCarrito,getTotal,nuevaOrden}}>
            {children}
        </Context.Provider>
    )
}

export default Context;