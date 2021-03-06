
import './App.css';
import Home from './components/home/Home';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import SinglePageProduct from './components/singlePageProduct/SinglePageProduct';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';
import Success from './components/success/Success';
import Orders from './components/orders/Orders';
import EmptyCart from './components/emptyCart/EmptyCart';

function App() {
  return (
    <Container>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="singlePageProduct/:productId" element={<SinglePageProduct />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/checkout' element={<Checkout/>}  />
        <Route path='/success' element={<Success/> } />
        <Route path='/orders' element={<Orders/>}  />
        <Route path='/emptyCart' element={<EmptyCart/>}  />


      </Routes>

    </Container>

  );
}

export default App;
