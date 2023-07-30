import { IMG_URL } from "../Constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  totalRatingsString, 
}) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString} Away</h4>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;
