import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const filteredRestaurants = filterData(searchText, restaurants);
  const isOnline = useOnline();
  const { user, setUser } = useContext(UserContext);
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
            className="p-1 mx-16 m-2 rounded-lg border-2 border-gray-400"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <h1 className="text-strong font-black text-center text-3xl align-middle ">
          No Restaurant match your Filter!!
        </h1>
      </>
    );
  return (
    <>
      <div className="my-2">
        <div className="">
          <input
            type="search"
            className="p-1 mx-16 m-2 rounded-lg border-2 border-gray-400"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* <input
            type="text"
            onChange={(e) => setUser({ name: e.target.value })}
          ></input> */}
        </div>
        <div className="flex flex-wrap my-2 ml-12 ">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.data?.id}
                key={restaurant?.data?.data?.id}
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
