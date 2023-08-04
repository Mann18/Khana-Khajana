import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const filteredRestaurants = filterData(searchText, restaurants);
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You're Offline!! Kindly check your connection....</h1>;
  }
  if (filteredRestaurants?.length === 0)
    return (
      <div>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <h1>No Restaurant match your Filter!!</h1>
      </div>
    );
  return (
    <>
      <div className="container">
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="restaurant-list">
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
