import React, { Component } from "react";

const CartItem = (props) => {
  const { title, price, qty } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, onDelete } = props;

  return (
    <div className="cart-item">
      <div style={styles.image}>
        <img />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}> {title} </div>
        <div style={{ color: "#777" }}> Rs {price} </div>
        <div style={{ color: "#777" }}> Qty {qty} </div>
        <div className="cart-item-actions">
          {/*Buttons*/}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            onClick={() => onIncreaseQty(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            onClick={() => onDecreaseQty(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/3096/3096750.png"
            onClick={() => onDelete(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "gray",
  },
};

export default CartItem;
