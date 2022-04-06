import React, { Component } from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((item) => {
        return (
          <CartItem
            product={item}
            key={item.id}
            onIncreaseQty={props.onIncreaseQty}
            onDecreaseQty={props.onDecreaseQty}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
}

export default Cart;
