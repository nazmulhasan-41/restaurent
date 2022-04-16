import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Orders = (props) => {
    const { user, successOrder , loggedInUser} = props;
    console.log('in order page====>', props);
    let navigate = useNavigate();
    if(!user.email){
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
            {
                loggedInUser.email
            }
            {
                successOrder.map(order =>
                
                <li>
                    
                    {
                        (order.user.email===loggedInUser.email)?

                        order.successOrder.map(ord => <li>{ord.id}</li>):
                        ''
                    }
                </li>
                )
            }
        </div>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        successOrder: state.successOrder,
        loggedInUser:state.loggedInUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

// export default Orders;