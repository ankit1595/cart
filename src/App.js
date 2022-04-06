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
          img: "",
          id: 1,
        },
        {
          title: "Watch",
          price: 99,
          qty: 10,
          img: "",
          id: 2,
        },
        {
          title: "Laptop",
          price: 9999,
          qty: 1,
          img: "",
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
    console.log(count);
    return count;
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
      </div>
    );
  }
}

export default App;
