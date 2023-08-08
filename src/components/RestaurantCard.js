import React, { useState, useEffect, useContext } from "react";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  totalRatingsString,
}) => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        <div className=" w-80 m-3 p-3 border-2 border-gray-400 shadow-lg bg-[#fffbeb] transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100  duration-100 rounded-lg">
          <img
            className="rounded-lg"
            src={IMG_URL + cloudinaryImageId}
            alt={name}
          />
          <h2 className="p-3 text-center font-bold text-2xl">{name}</h2>
          <h3 className="p-2 font-semibold ">{cuisines?.join(", ")}</h3>
          <h4 className="p-2 font-semibold ">{lastMileTravelString} Away</h4>
          <h4 className="p-2 font-semibold ">{totalRatingsString}</h4>
          <h4 className="p-2 font-semibold ">{user.name}</h4>
        </div>
      )}
    </>
  );
};

export default RestaurantCard;
