// ProductDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import { useStateContext } from "../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  console.log(id);
  const { data } = useStateContext();
  console.log(id);
  // Find the product details using the 'id'
  const product = data.find((product) => product.webID === id);
  // Handle the case when the product is not found
  if (!product) {
    return <div>Product not found!</div>;
  }

  // Display the product details
  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <img
          src={product.img} // Use the 'img' property from the product object
          alt={product.name} // Use the 'name' property from the product object
        />
        <p>{product.name}</p>
        <p>{product.productTitle}</p>
        <p>Price: {product.price}$</p>
        {/* Add other product details you want to display */}
      </div>
    </div>
  );
};

export default ProductDetails;
