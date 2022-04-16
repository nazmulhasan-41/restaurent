import React, { useEffect, useState } from 'react';
import { addToCart, emptyCart, EMPTY_CART, removeFromCart, setSuccessOrder, setUser } from '../redux/actions/CartAction';
import { connect } from 'react-redux';
import foods from '../../fakeData/Data/foodData';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


const Checkout = (props) => {

    let navigate = useNavigate();

    const { cart ,user,successOrder,setSuccessOrder} = props;
    console.log(props);

    
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        var sum=0;
        for(var i=0;i<cart.length;i++)
        {
            sum+=(cart[i]).price;
        }
        setTotal(sum);
       
    },[cart]);
    // const [seccessOrder,setSuccessOrder]=useState([]);


    const placeOrderHandler=()=>{

        const newOrder={user,successOrder};
        newOrder.successOrder=cart;
        console.log('in checkout-------->',newOrder);
        setSuccessOrder(newOrder);
        navigate('/success');

        
        //  navigate('/success');
    }
    return (
        <div>
            {
                cart.map(pd => {
                    return (
                        <>
                            <li key={pd.id}>{pd.title} {pd.price} </li>
                        </>
                    )

                }

                )
            }
              Total cost :
            
             {
               total && <Button onClick={placeOrderHandler} >Place Order</Button>
             }   
            
        </div>
    );
};


const mapStateToProps = (state, ownProps) => {

    return { cart: state.cart ,
            user:state.user  ,
            successOrder:state.successOrder      
    }

}

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    setSuccessOrder:setSuccessOrder
    
}



export default connect(mapStateToProps, mapDispatchToProps)(Checkout)