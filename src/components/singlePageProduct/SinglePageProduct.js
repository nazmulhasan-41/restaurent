import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import foods from '../../fakeData/Data/foodData';
import './singlePageProduct.css';


const SinglePageProduct = (props) => {

    const params = useParams();
    const getId = params.productId;
    const [pd, setPd] = useState([]);

    useEffect(() => {
        //  console.log(typeof(getId))
        const getProduct = foods.filter(pd => pd.id === parseInt(params.productId));
        setPd(getProduct[0]);

    }, [])

    return (
        <div>

            <Row className='detailsSection'>
                <Col className='leftSection' xs={12} md={6}>
                    <h2>
                        {pd.title} 
                    </h2>
                    <h6>
                        {pd.subtitle}
                    </h6>

                    <h6>
                        {pd.description}
                    </h6>
                    <h2 className='price'>${pd.price}</h2>

                    <Button variant="primary">Add to Cart</Button>



                </Col>
                <Col className='rightSection' xs={12} md={6}>
                    <Card.Img variant="top" src={pd.img} />
                </Col>
            </Row>


        </div>
    );
};

export default SinglePageProduct;