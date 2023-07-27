import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Fitler Type

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filtery by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Fitler type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Fitler price */}
        <div>
          <p className="font-bold text-gray-700">Filter price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1  "
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-t-lg"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white rounded-full p-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
