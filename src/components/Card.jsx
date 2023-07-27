import React from "react";

const Card = ({ text1, text2, btn }) => {
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{text1}</p>
        <p className="px-2">{text2}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          {btn}
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
      />
    </div>
  );
};

export default Card;
