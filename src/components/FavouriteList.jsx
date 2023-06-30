import { useStateContext } from '../context/ShopContext';
import FavouriteItem from './FavouriteItem';
import { Link } from 'react-router-dom';
const FavouriteList = () => {
  const { favourities, data } = useStateContext();
  return (
    <>
      <Link to="/">Back</Link>
      <div className=" my-2 flex justify-between flex-wrap ">
        {data.map(product => {
          if (favourities[product.webID] > 0)
            return (
              <FavouriteItem
                name={product.productTitle}
                img="data:image/jpeg;base64,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"
                // img={product.image.url}
                // price={product.prices[0].regularPrice.minPrice}
                price={product.price}
                key={product.webID}
                id={product.webID}
              />
            );
        })}
      </div>
    </>
  );
};

export default FavouriteList;
