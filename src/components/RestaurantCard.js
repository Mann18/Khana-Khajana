import React, { useState, useEffect } from "react";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  totalRatingsString,
}) => {
  const [loading, setLoading] = useState(true);

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
        <div className="card-container">
          <img className="image" src={IMG_URL + cloudinaryImageId} alt={name} />
          <h2 className="title">{name}</h2>
          <h3 className="cuisines">{cuisines?.join(", ")}</h3>
          <h4 className="distance">{lastMileTravelString} Away</h4>
          <h4 className="ratings">{totalRatingsString}</h4>
        </div>
      )}
    </>
  );
};

export default RestaurantCard;
