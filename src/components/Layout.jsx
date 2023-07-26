import { useState } from "react";
import ShoppingCard from "./ShoppingCard";
import Nav from "./Nav";
import { useStateContext } from "../context/ShopContext";
// import { Outlet } from 'react-router';
// import Footer from "./Footer";

const Layout = () => {
  // const [openCard, setOpenCard] = useState(false);
  // const handleOpen = () => {
  //   setOpenCard(!openCard);
  // };
  const { handleOpen, openCard, setOpenCard } = useStateContext();
  return (
    <div className="layout">
      <Nav handleOpen={handleOpen} />
      <div className={` h-full w-full ${openCard ? "overlay" : ""}`}>
        {openCard && <ShoppingCard setOpenCard={setOpenCard} />}
      </div>

      {/* <header></header> */}
      <main className="main-container">{/* <Outlet /> */}</main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
