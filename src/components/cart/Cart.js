import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../redux/actions/CartAction';
import { connect } from 'react-redux';
import foods from '../../fakeData/Data/foodData';
import { Button } from 'react-bootstrap';


const Cart = (props) => {
    const { cart, removeFromCart } = props;
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        var sum=0;
        for(var i=0;i<cart.length;i++)
        {
            sum+=(cart[i]).price;
        }
        setTotal(sum);
       
    },[cart])
    return (
        <div>
            {
                cart.map(pd => {
                    return (
                        <>

                            <li key={pd.id}><Button onClick={() => removeFromCart(pd.id)}>delete</Button>{pd.title}  {pd.price} </li>

                        </>

                    )

                }

                )
            }
            Total cost : {total}

        </div>
    );
};


const mapStateToProps = (state, ownProps) => {

    return { cart: state.cart }

}

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    removeFromCart: removeFromCart
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)