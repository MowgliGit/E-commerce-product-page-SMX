import React, { useState } from "react";

export default function Item({ addToCart }) {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count > 0) {
      const product = {
        id: 1,
        name: "Fall limited edition sneakers",
        price: 125.0,
        count: count,
      };
      addToCart(product);
    }
  };

  return (
    <div className="card">
      <div className="card-box">
        <span className="card-box-shorttitle">Sneaker company</span>
        <h1 className="card-box-title">Fall limited edition sneakers</h1>
        <p className="card-box-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="box-prices">
        <div className="prices">
          <span className="bold-price">$125.00</span>{" "}
          <span className="color-price">50%</span>
        </div>
        <div className="price">
          <span>$250.00</span>
        </div>
      </div>
      <div className="boxWithButtons">
        <div className="buttons">
          <button
            onClick={() => setCount((c) => Math.max(c - 1, 0))}
            className="button-minus"
          >
            <img src="./images/icon-minus.svg" alt="minus" />
          </button>
          <div className="number">{count}</div>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="button-plus"
          >
            <img src="./images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <div
          className="addToCard"
          onClick={handleAddToCart}
          style={{ stroke: "#fff", fill: "#fff", color: "#fff" }}
        >
          <img
            src="./images/icon-cart.svg"
            style={{ stroke: "#fff", fill: "#fff", color: "#fff" }}
            className="cardButton"
            alt="cart"
          />
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
}
