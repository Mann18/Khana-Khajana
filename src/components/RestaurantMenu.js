import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu-card-container">
      <div>
        <h3>Restaurant id: {resId}</h3>
        <h1 className="menu-title">{restaurant?.data?.data?.name}</h1>
        <img
          className="menu-image"
          src={IMG_URL + restaurant?.data?.data?.cloudinaryImageId}
          alt={restaurant?.data?.data?.name}
        />
        <h3 className="menu-details"></h3>
        <h3 className="menu-details">
          Address: {restaurant?.data?.data?.address}
        </h3>
        <h3 className="menu-details"></h3>
        <h3 className="menu-details">
          Locality: {restaurant?.data?.data?.locality}
        </h3>
        <h3 className="menu-details"></h3>
        <h3 className="menu-details">
          City: {restaurant?.data?.data?.slugs?.city}
        </h3>
        <h3 className="menu-details">
          Ratings: {restaurant?.data?.data?.avgRating} stars
        </h3>
        <h3 className="menu-details">
          Cuisines:
          {restaurant?.data?.data?.cuisines.join(", \n")}{" "}
        </h3>
        <h3 className="menu-details">
          Offers:
          {
            restaurant?.data?.data?.aggregatedDiscountInfo?.descriptionList
              ?.meta
          }
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
