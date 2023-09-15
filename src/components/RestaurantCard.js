import React, { useState, useEffect, useContext } from "react";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

import React, { useState, useEffect } from "react";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
// Import the CSS file for styling the restaurant card

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,

  costForTwoString,
  avgRating,
}) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className=" w-80 m-3 p-3 border-2 border-gray-400 shadow-xl bg-[#fffbeb] transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100  duration-100 rounded-lg">
        <img
          className="rounded-lg"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        <h2 className="p-3 text-center font-bold text-2xl">{name}</h2>
        <h3 className="p-2 font-semibold ">{cuisines?.join(", ")}</h3>

        <div className=" flex justify-between">
          {avgRating > 0 ? (
            <span className="p-2 font-semibold bg-green-600 rounded-xl text-white">
              {avgRating + " ★"}
            </span>
          ) : null}
          <div className="p-2 font-semibold  ">{costForTwoString} </div>
        </div>

        <div className="p-2 font-semibold  ">{lastMileTravelString} </div>

        <h4 className="p-2 font-semibold ">{user.name}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
