import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import './Order.css';


const Orders = (props) => {
    const { user, successOrder, loggedInUser } = props;
    let navigate = useNavigate();
    if (!user.email) {
        return (
            <>
                {
                    <Navigate to='/login' replace />
                }
            </>
        )
    }

    return (
        <div>
            Hello : 
            {
                loggedInUser.email
            }
            {
                successOrder.map(order =>

                    <Table className='orderTable' >
                        
                    <tbody>
                    {
                        (order.user.email===loggedInUser.email)?
                        order.successOrder.map(ord =>
                            
                            <tr> 
                            <td>{ord.id} </td>
                            <td><img className='orderImage' src={ord.img} alt="Girl in a jacket"  height="50"/></td>

                            <td>{ord.title}</td>
                            <td>{ord.price}</td>
                            <td>{ord.count +1}</td>
                            <td>{(ord.count +1)*ord.price}</td>


                            </tr>
                            
                            )
                            
                            :
                        <div ></div>
                    }   
                    </tbody>

                  
                    </Table>


                )
            }
        </div>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        successOrder: state.successOrder,
        loggedInUser: state.loggedInUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

// export default Orders;