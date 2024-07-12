import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + product.count);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    const productToRemove = cartItems.find((item) => item.id === productId);
    setCartCount(cartCount - productToRemove.count);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleCheckout = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="App">
      <Header
        cartCount={cartCount}
        toggleCartVisibility={toggleCartVisibility}
      />
      <Main addToCart={addToCart} />
      {isCartVisible && (
        <Card
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

export default App;
