import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Mobile Phone",
          price: 999,
          qty: 2,
          img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          id: 1,
        },
        {
          title: "Watch",
          price: 99,
          qty: 10,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          id: 2,
        },
        {
          title: "Laptop",
          price: 9999,
          qty: 1,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          id: 3,
        },
      ],
    };
  }

  handlerIncQty = (product) => {
    const { products } = this.state;
    let index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handlerDecQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };

  handlerDeleteItem = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.map((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal += product.qty * product.price;
    });
    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQty={this.handlerIncQty}
          onDecreaseQty={this.handlerDecQty}
          onDelete={this.handlerDeleteItem}
        />
        <div
          style={{
            paddingLeft: 45,
            paddingTop: 15,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          TOTAL : Rs {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
