import CardItem from './CardItem';
import { useStateContext } from '../context/ShopContext';
// eslint-disable-next-line react/prop-types
const ShoppingCard = ({ setOpenCard }) => {
  const { cartItems, data } = useStateContext();
  let itemPrice = data.reduce(
    (acc, el) => acc + cartItems[el.webID] * el.price,
    0
  );

  console.log(itemPrice);
  return (
    <>
      <div className="  flex flex-col justify-between overflow-scroll  absolute right-0 h-full bg-orange-200 w-[30%] z-10 ">
        <div className="flex flex-col">
          <div onClick={() => setOpenCard(false)}>Back</div>
          {data.map(el => {
            if (cartItems[el.webID] > 0) {
              return (
                <CardItem
                  name={el.productTitle}
                  id={el.webID}
                  key={el.webID}
                  price={el.price}
                />
              );
            }
          })}
        </div>
        <div className="flex justify-between ">
          <h1 className="p-4 font-bold text-xl">Subtotal</h1>
          <span className="p-4 font-bold text-xl">{itemPrice}$</span>
        </div>
        <div className="flex justify-around justify-self-end">
          <button onClick={() => setOpenCard(false)} type="button">
            Continue Shopping
          </button>
          <button type="button">Pay</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
