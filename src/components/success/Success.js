import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const Success = () => {

    let navigate = useNavigate();
    const goHomeHandler=()=>{
        navigate('/');
    }


    return (
        <div>
            your order placed successfully
            <Button onClick={goHomeHandler} > Go to Home</Button>
            
        </div>
    );
};

export default Success;