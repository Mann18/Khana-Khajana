import { useContext } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  const addFoodItem = (cuisine) => {
    const item = {
      restaurantName: restaurant?.data?.data?.name,
      image: IMG_URL + restaurant?.data?.data?.cloudinaryImageId,
      cuisine: cuisine,

      price: restaurant?.data?.data?.costForTwo/100,
    };
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=" grid my-8">
      <div className="w-96 border-2  rounded-lg place-self-center bg-[#fffbeb] border-gray-400  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100  duration-100 ">
        <h1 className="p-3 text-center font-bold text-2xl">
          {restaurant?.data?.data?.name}
        </h1>
        <img
          className=" rounded-lg w-[350] mx-[15px]"
          src={IMG_URL + restaurant?.data?.data?.cloudinaryImageId}
          alt={restaurant?.data?.data?.name}
        />
        <h3 className="p-2 font-bold">
          Restaurant id: <span className="font-semibold">{resId}</span>
        </h3>
        <h3 className="p-2 font-bold">
          Address:{" "}
          <div className="font-semibold">{restaurant?.data?.data?.address}</div>
        </h3>

        <h3 className="p-2 font-bold">
          Locality:{" "}
          <span className="p-2 font-semibold">
            {restaurant?.data?.data?.locality}
          </span>
        </h3>

        <h3 className="p-2 font-bold">
          City:{" "}
          <span className="p-2 font-semibold">
            {restaurant?.data?.data?.slugs?.city}
          </span>
        </h3>
        <h3 className="p-2 font-bold">
          Ratings:
          <span className="p-2 font-semibold">
            {restaurant?.data?.data?.avgRating} stars
          </span>{" "}
        </h3>
        <h3 className="p-2 font-bold">
          Cuisines:
          {/* <span className="p-2 font-semibold">
            {restaurant?.data?.data?.cuisines.join(".")}
            

          </span> */}
          <ul data-testid="menu">
            {restaurant?.data?.data.cuisines.map((cuisine) => (
              <li key={cuisine}>
                {cuisine} -{" "}
                <button
                  className="p-1 bg-green-300 rounded-lg m-2"
                  onClick={() => addFoodItem(cuisine)}
                >
                  Add
                </button>
                {console.log()}
              </li>
            ))}
          </ul>
        </h3>

        <h3 className="p-2 font-bold">
          Offers:
          <div className="p-2 font-bold">
            {
              restaurant?.data?.data?.aggregatedDiscountInfo?.descriptionList
                ?.meta
            }
          </div>
        </h3>
        <h3 className="text-center font-semibold">{user.name}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
