import React, { useState } from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { emptyCart, setUser } from '../redux/actions/CartAction';

const Header = (props) => {
    const {user,setUser,emptyCart}=props;
    let navigate = useNavigate();
    
    const logoutHandler=()=>{
        const newUser={
            name: '',
            email: '',
            password: '',
            msg: ''
        }
        setUser(newUser);
        emptyCart();
        navigate('/');

    }
   
    return (
        <div>
            <div className='HeaderImage' >

                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Link className='siteName' to="/">eAtery</Link>
                        <Nav className="me-auto">
                            <Link className='linkClass' to="/">Home</Link>
                            <Link className='linkClass' to="/cart">Cart</Link>
                            {/* <Link className='linkClass' to="/checkout">Checkout</Link> */}
                            

                            {
                                user.email ?
                                <>
                                <Link className='linkClass' to="/orders">My Orders</Link>

                                <Button className='logoutButton' onClick={logoutHandler} >Logout</Button>
                                

                                </>
                                
                                
                                :
                                <>
                                 <Link className='linkClass' to="/login">Login</Link>
                               
                                </>
                               
                            }
                            
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

const mapStateToProps = (state, ownProps) => {

    return { user:state.user }
}

const mapDispatchToProps = {
    setUser:setUser,
    emptyCart: emptyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)


// export default Header;