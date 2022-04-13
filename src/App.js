
import './App.css';
import Home from './components/home/Home';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import SinglePageProduct from './components/singlePageProduct/SinglePageProduct';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Container>
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="singlePageProduct/:productId" element={<SinglePageProduct />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </Container>

  );
}

export default App;
