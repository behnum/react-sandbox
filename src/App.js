// TODO: Move const products outside of ProductList (based on source)

import React, { Component } from "react";
// Based on: https://goo.gl/2ZE1mX
class ProductList extends Component {
  render() {
    const products = [
      {
        name: "Banana",
        price: 123
      },
      {
        name: "Oil",
        price: 333
      }
    ];

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

export default ProductList;
