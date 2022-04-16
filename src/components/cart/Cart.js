import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart, setUser } from '../redux/actions/CartAction';
import { connect } from 'react-redux';
import foods from '../../fakeData/Data/foodData';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


const Cart = (props) => {

    let navigate = useNavigate();


    const { cart, removeFromCart ,user} = props;
    
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        var sum=0;
        for(var i=0;i<cart.length;i++)
        {
            sum+=(cart[i]).price;
        }
        setTotal(sum);
       
    },[cart]);

    const checkOutHandler=()=>{
        
        console.log('checkout Handler clicked');

        if(user.email)
        {
            navigate('/checkout');
            
        }
        else{
            navigate('/login');
        }
        

    }
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
            {
                total && <Button onClick={checkOutHandler} >checkout</Button>
            }
        </div>
    );
};


const mapStateToProps = (state, ownProps) => {

    return { cart: state.cart ,
            user:state.user        
    }

}

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    removeFromCart: removeFromCart,
    
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)