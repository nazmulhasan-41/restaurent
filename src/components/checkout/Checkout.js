import React, { useEffect, useState } from 'react';
import { addToCart, emptyCart, EMPTY_CART, removeFromCart, setSuccessOrder, setUser } from '../redux/actions/CartAction';
import { connect } from 'react-redux';
import foods from '../../fakeData/Data/foodData';
import { Button, Col, Row } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import './Checkout.css';


const Checkout = (props) => {

    let navigate = useNavigate();

    const { cart, user, successOrder, setSuccessOrder } = props;
    console.log(props);
    let shippingCost=50;
    let vatParcentage=5;

    const [total, setTotal] = useState(0);
    useEffect(() => {
        var sum = 0;
        for (var i = 0; i < cart.length; i++) {
            sum += (cart[i]).price;
        }
        setTotal(sum);

    }, [cart]);
    // const [seccessOrder,setSuccessOrder]=useState([]);

    const placeOrderHandler = () => {

        const newOrder = { user, successOrder };
        newOrder.successOrder = cart;

        setSuccessOrder(newOrder);
        navigate('/success');

    }
    return (
        <div>
            {
                total &&
                <>
                    <Row>
                        <Col xs={12} md={6} className='loginArea'>

                            <label for="fname">First name:</label><br />
                            <input type="text" id="fname" name="fname" /><br />
                            <label for="lname">Email:</label><br />
                            <input type="text" id="lname" name="email" value={user.email} /><br />
                            <label for="lname">Address:</label><br />
                            <input type="text" id="address" name="address" value="Address" /><br />
                            <label for="lname">Phone No:</label><br />
                            <input type="text" id="phone" name="phone" value="01" /><br />

                        </Col>
                        <Col xs={12} md={6} className='orderArea'>
                            shipping cost: {shippingCost.toFixed(2)}<br/>
                            VAT: {(total * vatParcentage/100).toFixed(2)}<br/>

                            Total cost :{(total+ shippingCost +(total * vatParcentage/100)).toFixed(2)}<br />
                            
                                <Button onClick={placeOrderHandler} >Place Order</Button>
                            
                        </Col>
                    </Row>

                </>
            }




        </div>
    );
};


const mapStateToProps = (state, ownProps) => {

    return {
        cart: state.cart,
        user: state.user,
        successOrder: state.successOrder
    }

}

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    setSuccessOrder: setSuccessOrder

}



export default connect(mapStateToProps, mapDispatchToProps)(Checkout)