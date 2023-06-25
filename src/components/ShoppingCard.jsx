import React from "react";
import CardItem from "./CardItem";

const ShoppingCard = ({ setOpenCard }) => {
  return (
    <>
      <div className="absolute right-0 h-full bg-orange-200 w-[30%] z-10 ">
        <div onClick={() => setOpenCard(false)} className="">
          Back
        </div>
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </>
  );
};

export default ShoppingCard;
