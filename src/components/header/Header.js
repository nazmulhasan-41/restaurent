import React from 'react';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='HeaderImage' >
               
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>



                        
                    <InputGroup className="mb-3">
    <FormControl
      placeholder="Sreach Item"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
  </InputGroup>



                    </Container>



                </Navbar>


                



            </div>
        </div>
    );
};

export default Header;