// Products.js

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { useStateContext } from "../context/ShopContext";

const Products = ({ name, img, price, id }) => {
  const {
    addToCart,
    cartItems,
    addToFavourities,
    favourities,
    removeFromFavourities,
  } = useStateContext();
  const [openfavorities, setOpenFavorities] = useState(false);
  let cartItemAmount = 0;
  cartItemAmount = cartItems[id];

  return (
    <>
      <div className="flex justify-between relative h-[25rem] flex-col p-2 m-2 shadow-lg w-72">
        {/* Favorites functionality (unchanged) */}
        <div
          onClick={() => setOpenFavorities(!openfavorities)}
          className="absolute right-2 top-3"
        >
          {/* ... */}
        </div>
        {/* Use Link to navigate to the product details page */}
        <Link to={`/product/${id}`}>
          <div className="flex justify-between flex-col">
            <img
              className="min-w-[12rem] min-h-[12rem] self-center overflow-hidden"
              src={img}
              alt={name}
            />
            <p className="font-bold">{name}</p>
            <p className="">{name}</p>
            <span className="py-3">
              Price: <span className="font-bold p-2"> {price}$ </span>
            </span>
          </div>
        </Link>
        {/* Cart functionality (unchanged) */}
        <div className="">
          <button onClick={() => addToCart(id)} className="w120 h-0">
            Add to Cart {cartItemAmount > 0 ? cartItemAmount : ""}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
