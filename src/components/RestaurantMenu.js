import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL, MENU_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import Veg from "../assets/veg.png";
import nonVeg from "../assets/nonVeg.png";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  useEffect(() => {
    getMenu();
  }, []);
  async function getMenu() {
    const menu = await fetch(MENU_URL + resId);
    const json = await menu.json();

    const menuItems =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    console.log(menuItems[1].card.info);

    setMenuItems(menuItems);
  }

  const addFoodItem = (menus) => {
    const item = {
      restaurantName: restaurant?.data?.data?.name,
      image: IMG_URL + menus?.card?.info?.imageId,
      item: menus?.card?.info?.name,
      id: menus?.card?.info?.id,
      price: menus?.card?.info?.price / 100,
    };
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="w-1/2 my-2 py-2 mx-auto">
      <div className="flex justify-between">
        <h1 className="px-3 py-2 text-center font-bold text-2xl">
          {restaurant?.data?.data?.name}
        </h1>
        <h1 className="text-green-600 font-bold px-3 pt-5">
          {"★" + restaurant?.data?.data?.avgRating}
        </h1>
      </div>
      <div className="flex justify-between">
        <h1 className="px-3 text-center ">
          {restaurant?.data?.data?.cuisines?.join(", ")}
        </h1>
        <h1 className="text-sm px -3">
          {restaurant?.data?.data?.totalRatingsString}
        </h1>
      </div>
      <h1 className="px-3 border-b border-dashed border-gray-300">
        {restaurant?.data?.data?.area},{" "}
        {restaurant?.data?.data?.lastMileTravelString}
      </h1>

      <h1 className="p-3 font-bold">
        {restaurant?.data?.data?.slaString},{" "}
        {restaurant?.data?.data?.costForTwoString}
      </h1>
      <h1 className="text-center font-bold p-2 border border-gray-300 rounded-lg">
        FLAT {restaurant?.data?.data?.aggregatedDiscountInfo?.header}
        <br />
        {restaurant?.data?.data?.aggregatedDiscountInfo?.descriptionList?.meta}
      </h1>
      {menuItems.map((menus) => {
        return (
          <div
            key={menus?.card?.info?.id}
            className="grid py-3 my-2 border-b border-separate border-gray-300"
          >
            {menus?.card?.info?.isVeg ? (
              <img src={Veg} className="w-5 h-auto" />
            ) : (
              <img src={nonVeg} className="w-5 h-auto" />
            )}

            <div className="flex justify-between border-gray-300">
              <div>
                {" "}
                <h1 className="font-semibold py-3">
                  {" "}
                  {menus?.card?.info?.name}
                </h1>
                <h1>
                  {"₹"}
                  {menus?.card?.info?.price / 100}
                </h1>
                <div className="py-2 w-96">
                  {menus?.card?.info?.description}
                </div>
              </div>
              <div className="grid">
                <img
                  src={IMG_URL + menus?.card?.info?.imageId}
                  alt={menus?.card?.info?.name}
                  className="w-36 h-auto rounded-lg"
                />
                <button
                  className="p-1 bg-green-300 rounded-lg m-2"
                  onClick={() => addFoodItem(menus)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
