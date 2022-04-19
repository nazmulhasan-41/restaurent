import React, { useEffect, useState } from 'react';
import { addToCart, incCount, removeFromCart, setUser,decCount } from '../redux/actions/CartAction';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    let navigate = useNavigate();
    const { cart, removeFromCart, user, incCount,decCount } = props;
    const [total, setTotal] = useState(0);
    const [count,setCount]=useState(0);
    useEffect(() => {
        var sum = 0;
        for (var i = 0; i < cart.length; i++) {
            sum += (cart[i]).price * ((cart[i].count)+1);
        }
        setTotal(sum);

    }, [cart]);

    const checkOutHandler = () => {
        if (user.email) {
            navigate('/checkout');
        }
        else {
            navigate('/login');
        }
    }
    if (cart.length == 0) {
        return (
            <Navigate to='/emptyCart' replace />
        )
    }
    
    const countHandler=(e)=>{
        setCount(e.target.value);
    }
    const increaseCount=(id)=>{
        incCount(id);
        
    }
    const decreaseCount=(id,zeroCheck)=>{
        if(zeroCheck){decCount(id);}
        
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>

                </thead>
                <tbody className='tbody'>

                    {
                        cart.map(pd => {
                            return (
                                <>

                                    <tr key={pd.id}>
                                        <td>
                                            <FontAwesomeIcon onClick={() => removeFromCart(pd.id)} icon={faTrash} />
                                        </td>
                                        <td><img src={pd.img} alt="Girl in a jacket" height="50"></img>  </td>
                                        <td>{pd.title}</td>
                                        <td className='incdec'>
                                        <Button onClick={()=>decreaseCount(pd.id, pd.count)}>-</Button>
                                           <div className='value'>{pd.count+1}</div> 
                                            <Button onClick={()=>increaseCount(pd.id)}>+</Button>
                                        </td>
                                        <td> {pd.category}</td>
                                        <td>{pd.price}</td>
                                        <td>{pd.price * (pd.count+1)}</td>

                                    </tr>
                                </>
                            )
                        }
                        )
                    }

                </tbody>
            </Table>
            <div className='totalCost'>
                <div>
                    <Table responsive="sm" className='totalTable'>
                        <thead>
                            <tr>

                                <th>Total Cost</th>
                                <th>{total}</th>

                            </tr>
                        </thead>
                    </Table>
                </div>

                {
                    total && <Button onClick={checkOutHandler} >checkout</Button>
                }
            </div>
        </div>
    );

};


const mapStateToProps = (state, ownProps) => {

    return {
        cart: state.cart,
        user: state.user
    }

}

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    removeFromCart: removeFromCart,
    incCount:incCount,
    decCount:decCount

}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)