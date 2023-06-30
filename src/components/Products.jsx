import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ShopContext';

// eslint-disable-next-line react/prop-types
const Products = ({ name, img, price, id }) => {
  const {
    addToCart,
    cartItems,
    addToFavourities,
    favourities,
    removeFromFavourities,
  } = useStateContext();
  const [openfavorities, setOpenFavorities] = useState(false);
  console.log(favourities);
  let cartItemAmount = 0;
  cartItemAmount = cartItems[id];
  return (
    <>
      <div className="flex justify-between relative h-[25rem] flex-col p-2 m-2 shadow-lg w-72">
        <div
          onClick={() => setOpenFavorities(!openfavorities)}
          className="absolute right-2 top-3"
        >
          {openfavorities ? (
            <svg
              onClick={() => removeFromFavourities(id)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg
              onClick={() => addToFavourities(id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6 cursor-pointer hover:text-yellow-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </div>
        <Link to="/productdetails">
          <div className="flex justify-between  flex-col">
            <img
              className="min-w-[12rem] min-h-[12rem] self-center overflow-hidden"
              src={img}
              alt={name}
            />
            <p className="font-bold">{name}</p>
            <p className="">{name}</p>
            <span className="py-3 ">
              Price: <span className="font-bold p-2 "> {price}$ </span>
            </span>
          </div>
        </Link>
        <div className="">
          <button onClick={() => addToCart(id)} className="w120 h-0">
            Add to Card {cartItemAmount > 0 ? cartItemAmount : ''}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
