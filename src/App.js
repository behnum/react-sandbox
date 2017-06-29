import React, { Component } from "react";
// Based on: https://goo.gl/2ZE1mX
class ProductList extends Component {
  render() {
    const productList = products.map(function(product, index) {
      return (
        <ProductItem key={index} name={product.name} price={product.price} />
      );
    });

    return (
      <div>
        <h1>Product List</h1>
        {productList}
      </div>
    );
  }
}

class ProductItem extends Component {
  render() {
    return (
      <div>
        <h2>PRODUCT</h2>
        <p>
          Name : {this.props.name}
        </p>
        <p>
          Price: {this.props.price}
        </p>
      </div>
    );
  }
}

const products = [
  {
    name: "Apple",
    price: 123
  },
  {
    name: "Orange",
    price: 333
  }
];

export { ProductList, products };
