import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProductDetails.css';
import { Link } from "react-router-dom";
import CartReducer from '../redux/reducers/CartReducer';

const ProductDetails = (props) => {

    const [addToCartFlag,setAddToCartFlag]=useState(true);
    const {pd,addToCart}=props;
    
    const addToCartHandler=(id)=>{
        addToCart(id);
        setAddToCartFlag(!addToCartFlag);
    }
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pd.img} />
            <Card.Body>
                <Card.Title>{pd.title}</Card.Title>
                <p>Category : {pd.category}</p>
                <Card.Text>
                    {pd.description}
                </Card.Text>
                <p>$ {pd.price}</p>
                <div>
                    {
                        addToCartFlag? 
                        <Button variant="primary" onClick={()=>addToCartHandler(pd.id)} >Add to Cart</Button>
                        // <Button variant="primary" onClick={()=>addToCart(pd.id)} >Add to Cart</Button>
                        :
                        <Button variant="primary">Added to Cart</Button>


                    }
               

                <Link className='detailsButton' to={`/singlePageProduct/${pd.id}`}>Details</Link>

                </div>
                
            </Card.Body>
        </Card>

    );
};


export default ProductDetails;