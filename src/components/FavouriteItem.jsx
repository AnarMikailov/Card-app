import { useStateContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
const FavouriteItem = ({ name, img, id }) => {
  const { addToCart, removeFromFavourities } = useStateContext();
  return (
    <div className="    ">
      <Link to="/productdetails">
        <div className="w-[20rem] h-[10rem]">
          <img
            className=" w-full  px-20 mb-[1rem] self-center overflow-hidden"
            src={img}
            alt={name}
          />
        </div>
        <p className="font-bold text-xl text-center">{name}</p>
        <p className="text-center text-xl">{name}</p>
        <span className="py-3 "></span>
      </Link>
      <div>
        <button
          className=""
          onClick={() => {
            addToCart(id);
            removeFromFavourities(id);
          }}
        >
          Add to Card
        </button>
        <button
          className=""
          onClick={() => {
            removeFromFavourities(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavouriteItem;
