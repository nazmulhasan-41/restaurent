import React from 'react';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className='HeaderImage' >

                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link className='linkClass' to="/">Home</Link>
                            <Link className='linkClass' to="/cart">Cart</Link>
                            <Link className='linkClass' to="/pricing">Pricing</Link>
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