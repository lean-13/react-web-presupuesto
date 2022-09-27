import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap" 
// icons

// scss
import "./NavBar.scss"

function NavBar() {

    return (
        <>
        <Navbar variant="dark" expand="lg" className='nav__bar--modificacion nav__bar--size nav__bar--color'>
          <Container>
            <Navbar.Brand as={Link} to="/" className='logo'>Web</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/presupuesto">Presupuesto</Nav.Link>
                <Nav.Link as={Link} to="/calculadora">Calculadora</Nav.Link>
                <Nav.Link as={Link} to="/historial">Historial</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}
export default NavBar