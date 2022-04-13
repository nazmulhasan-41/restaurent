import React, { useEffect, useState } from 'react';
import ProductDetails from '../productDetails/ProductDetails';
import './Products.css';
import foods from '../../fakeData/Data/foodData';
import { Button, Nav, Row } from 'react-bootstrap';

const Products = () => {
    console.log(foods);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    useEffect(() => {
        setProducts(foods);
    }, []);

    const buttonHandler=(name)=>{
        // console.log(name);
        if(name==='all')
        {
            setProducts(foods);
            return 
        }
        const categoryWiseProducts=foods.filter(pd=>pd.category===name);
        console.log('from handler: ',categoryWiseProducts);
        setProducts(categoryWiseProducts);
    }

    return (
        <>
            <Nav className="me-auto">
            <Button onClick={()=>buttonHandler('all')} > All</Button>
                <Button onClick={()=>buttonHandler('breakfast')} > Breakfast</Button>
                <Button onClick={()=>buttonHandler('lunch')} > lunch</Button>
                <Button onClick={()=>buttonHandler('dinner')}> Dinner</Button>
             
            </Nav>

            <Row className='productsAll'>
                {
                    products.map(pd => <ProductDetails key={pd.id} pd={pd} ></ProductDetails>)
                }

            </Row>

        </>

    );
};

export default Products;