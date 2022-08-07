import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Carrinho from './pages/Carrinho';
import Produtos from './pages/Produtos';

const App = () => {
  const [cartFruits, setCartFruits] = useState([]);
  const [nutri, setNutri] = useState(false);

  function showNutri() {
    setNutri(!nutri);
  }
  
  const addToCart = (fruit) => {
    const exist = cartFruits.find((x) => x.id === fruit.id);
    if(exist) {
      setCartFruits(
        cartFruits.map((x) => 
          x.id === fruit.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
    } else {
      setCartFruits([...cartFruits, {...fruit, qty: 1 }]);
    }
  };

  const removeToCart = (fruit) => {
    const exist = cartFruits.find((x) => x.id === fruit.id);
    if(exist.qty === 1) {
      setCartFruits(cartFruits.filter((x) => x.id !== fruit.id))
    } else {
      setCartFruits(cartFruits.map((x) => 
        x.id === fruit.id ? { ...exist, qty: exist.qty - 1 } : x
      ))
    }
  }

  const cleanCart = () => {
    setCartFruits([]);
  }

  const removeFruitCart = (fruit) => {
    setCartFruits(cartFruits.filter((x) => x.id !== fruit.id))
  }

  const totalPrice = cartFruits.reduce((a, c) => a + c.id * c.qty, 0);

  const fruitsInCart = cartFruits.length;

  return (
    <BrowserRouter>
      <Header showNutri={showNutri} fruitsInCart={fruitsInCart}/>
      <Routes>
        <Route path="/" element={<Produtos nutri={nutri} showNutri={showNutri}  addToCart={addToCart} />} />
        <Route path="carrinho" element={<Carrinho removeFruitCart={removeFruitCart} 
                                                  cleanCart={cleanCart} 
                                                  totalPrice={totalPrice} 
                                                  addToCart={addToCart} 
                                                  removeToCart={removeToCart} 
                                                  cartFruits={cartFruits} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
