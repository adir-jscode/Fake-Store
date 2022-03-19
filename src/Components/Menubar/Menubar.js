import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menubar = ({count}) => {
    return (
        <div>
           <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Ali Store</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#cart">Cart <sup>{count}</sup> </Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>      
        </div>
    );
};

export default Menubar;        