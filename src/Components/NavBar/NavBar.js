import {Navbar,Container,Nav} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../Services/Categories';
import { useState, useEffect} from "react";


const NavBar = () =>{
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
      getCategories().then((cates)=>{
        setCategories(cates)
      })
    },[])


    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <NavLink to="/" className={'navbar-brand'}>CoderGamer</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="mr-auto">
              <NavLink to="/"className="nav-link">Inicio</NavLink>
              {categories&& categories.map((item) =><NavLink key={item.id} to={"/categories/"+item.name} className="nav-link">{item.name}</NavLink> )}
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default NavBar;