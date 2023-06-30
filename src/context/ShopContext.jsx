import { createContext, useState, useContext } from 'react';
import { data1 } from '../data/data';
const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(data1);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [favourities, setFavourities] = useState(getDefaultCart());

  function getDefaultCart() {
    const array = [...data];
    const result = {};
    for (let i = 0; i < array.length; i++) {
      const object = array[i];
      const webID = object.webID;
      result[webID] = 0;
    }
    return result;
  }
  const addToCart = itemID => {
    setCartItems(prev => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };
  const removeFromCart = itemID => {
    setCartItems(prev => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };
  const updateCardItem = (newAmount, itemID) => {
    setCartItems(prev => ({ ...prev, [itemID]: newAmount }));
  };
  const deleteFromCart = itemID => {
    setCartItems(prev => ({ ...prev, [itemID]: 0 }));
  };
  const addToFavourities = itemID => {
    setFavourities(prev => ({ ...prev, [itemID]: 1 }));
  };
  const removeFromFavourities = itemID => {
    setFavourities(prev => ({ ...prev, [itemID]: 0 }));
  };
  // console.log(cartItems);s
  // const fetchData = async () => {
  //   const url =
  //     'https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '29676946b9mshcb2d1450b57e397p11d2cajsn972957a906d8',
  //       'X-RapidAPI-Host': 'kohls.p.rapidapi.com',
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     // console.log(result);
  //     setData(result.payload.products);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // let initialState = {};
  // initialState = data.map(el => {
  //   const result = el.reduce((obj, object, index) => {
  //     obj[index] = el.webID;
  //     return obj;
  //   }, {});

  //   // console.log(result);
  //   return result;
  // });
  // console.log(initialState);
  // console.log(a);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        data,
        setData,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        updateCardItem,
        deleteFromCart,
        addToFavourities,
        favourities,
        setFavourities,
        removeFromFavourities,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
