import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../src/Components/Cart/Cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {CartContextProvider} from '../src/Context/CartContext';

function App() {
  return (
   <CartContextProvider>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer saludo={'Hola Gamer'}></ItemListContainer>}/>
        <Route path='/categories/'  element = {<ItemListContainer/>}/>
        <Route path='/products/detail/:id' element = {<ItemDetailContainer/>}/>
        <Route path='/Cart' element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
   </CartContextProvider>

  );
}

export default App;
