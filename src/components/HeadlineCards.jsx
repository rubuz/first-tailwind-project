import React from "react";
import Card from "./Card";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <Card
        text1="Sun's Out, BOGO's Out"
        text2="Through 8/26"
        btn="Order Now"
      />
      <Card text1="New resturants" text2="Added daily" btn="Order Now" />
      <Card text1="We deliver desserts" text2="Tasty treats" btn="Order Now" />
    </div>
  );
};

export default HeadlineCards;
