import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const hanlderClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  console.log(savedCart);
  return (
    <div className="shop-container">
      <div className="review-container">
        {savedCart.map((product) => (
          <ReviewItems
            product={product}
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart hanlderClearCart={hanlderClearCart} cart={cart}>
          <Link className="proceed-link" to="/checkout">
            <button className="btn-proceed">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
