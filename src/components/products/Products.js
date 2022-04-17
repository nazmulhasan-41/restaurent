import React, { useEffect, useState } from 'react';
import ProductDetails from '../productDetails/ProductDetails';
import './Products.css';
import foods from '../../fakeData/Data/foodData';
import { Button, Nav, Row } from 'react-bootstrap';
import CartReducer from '../redux/reducers/CartReducer';
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/CartAction';


const Products = (props) => {
     console.log('props----->',props);
    const {cart,addToCart}=props;

    const [products, setProducts] = useState([]);
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
            <Button className='foodTimeSelection' onClick={()=>buttonHandler('all')} > All</Button>
                <Button className='foodTimeSelection' onClick={()=>buttonHandler('breakfast')} > Breakfast</Button>
                <Button className='foodTimeSelection' onClick={()=>buttonHandler('lunch')} > lunch</Button>
                <Button className='foodTimeSelection' onClick={()=>buttonHandler('dinner')}> Dinner</Button>
             
            </Nav>

            <Row className='productsAll'>
                {
                    products.map(pd => <ProductDetails key={pd.id} pd={pd} addToCart={addToCart}></ProductDetails>)
                }

            </Row>

        </>

    );
};


const mapStateToProps = (state, ownProps) => {
   
    return {cart:state.cart}

  }

  const mapDispatchToProps = {
    // ... normally is an object full of action creators
    addToCart: addToCart
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Products)
// export default Products;