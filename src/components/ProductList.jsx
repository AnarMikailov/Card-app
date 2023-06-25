import { useState, useEffect } from "react";
import Products from "./Products";
const ProductList = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url =
      "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "29676946b9mshcb2d1450b57e397p11d2cajsn972957a906d8",
        "X-RapidAPI-Host": "kohls.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setData(result.payload.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center align-center ">
        {data.map((product) => (
          // <Link to="/products">
          <Products
            name={product.productTitle}
            img={product.image.url}
            price={product.prices[0].regularPrice.minPrice}
            key={product.webID}
          />
          // </Link>f
        ))}
      </div>
    </div>
  );
};

export default ProductList;
