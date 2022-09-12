import React from "react";
import { useCart } from "../hooks/useCart";

const CartDetails = () => {
  const cart = useCart();

  const EMPTY_CART = (
    <>
      {" "}
      <h1>Cart Empty: No Items Added</h1>
    </>
  );

  return (
    <>
      {cart.state.count === 0 ? (
        EMPTY_CART
      ) : (
        <>
          {cart.state.products.map((product) => {
            return (
              <h3>
                {product.id}, {product.productName}
              </h3>
            );
          })}
        </>
      )}
    </>
  );
};

export default CartDetails;
