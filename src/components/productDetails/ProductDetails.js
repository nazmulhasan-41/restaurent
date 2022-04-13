import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ProductDetails.css';
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
    const {pd}=props;
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
                <Button variant="primary">Add to Cart</Button>

                <Link to={`/singlePageProduct/${pd.id}`}>Details</Link>


                {/* <Button variant="primary" onClick={}>Details</Button> */}

                </div>
                
            </Card.Body>
        </Card>

    );
};

export default ProductDetails;