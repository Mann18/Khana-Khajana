import { MENU_URL, restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const filteredRestaurants = filterData(searchText, restaurants);
  const isOnline = useOnline();
  useEffect(() => {
    getMenu();
  }, []);
  async function getMenu() {
    const menu = await fetch(MENU_URL + "552518");
    const json = await menu.json();
    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }
  if (!isOnline) {
    return (
      <h1 className="font-bold text-center text-3xl">
        You're Offline!! Kindly check your connection....
      </h1>
    );
  }
  if (filteredRestaurants?.length === 0)
    return (
      <>
        <div className="my-2">
          <input
            type="search"
            className="p-1 mx-2 md:mx-16 my-2 md:w-80 rounded-lg border-2 border-gray-400"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <h1 className="text-strong font-black text-center text-3xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7188/7188150.png"
            className="w-80 h-auto mx-auto"
            alt="oops..."
          />
          No Restaurant matches your Filter!!
        </h1>
      </>
    );
  return (
    <>
      <div className="my-2">
        <div className="">
          <input
            type="search"
            className="p-1 mx-2 md:mx-16 my-2 md:w-80 rounded-lg border-2 border-gray-400"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap my-2 md:ml-12">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.data?.id}
                key={restaurant?.data?.data?.id}
                className="w-full md:w-1/2 lg:w-1/3 p-2"
              >
                <RestaurantCard {...restaurant?.data?.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
