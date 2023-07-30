// import { restaurantList } from "../Constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";

// //filtering the data from input text fields
// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.data?.name
//       ?.toLowerCase()
//       ?.includes(searchText?.toLowerCase())
//   );

//   return filterData;
// }

// const Body = () => {
//   const [restaurants, setRestaurants] = useState(restaurantList);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const displayedRestaurants = searchText ? filteredRestaurants : restaurants;
//   return (
//     <>
//       <div className="container">
//         <div className="search-container">
//           <input
//             type="search"
//             className="search-input"
//             placeholder="Search"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="search-btn"
//             onClick={() => {
//               //need to filter the data
//               const data = filterData(searchText, restaurants);
//               // update the state - restaurants
//               setFilteredRestaurants(data);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="restaurant-list">
//           {filteredRestaurants.map((restaurant) => {
//             return (
//               <RestaurantCard
//                 {...restaurant?.data?.data}
//                 key={restaurant?.data?.data?.id}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Body;


//? ---------------------------------------------------------------------------------------------

// import { restaurantList } from "../Constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState } from "react";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
//   );

//   return filterData;
// }

// const Body = () => {
//   const [restaurants, setRestaurants] = useState(restaurantList);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const displayedRestaurants = searchText ? filteredRestaurants : restaurants;

//   return (
//     <>
//       <div className="container">
//         <div className="search-container">
//           <input
//             type="search"
//             className="search-input"
//             placeholder="Search"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="search-btn"
//             onClick={() => {
//               const data = filterData(searchText, restaurants);
//               setFilteredRestaurants(data);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="restaurant-list">
//           {displayedRestaurants.map((restaurant) => {
//             return (
//               <RestaurantCard
//                 {...restaurant?.data?.data}
//                 key={restaurant?.data?.data?.id}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Body;




//----------------------------------------------------------------




import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // Use this hook to filter restaurants whenever searchText changes
  const filteredRestaurants = filterData(searchText, restaurants);

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
              <RestaurantCard
                {...restaurant?.data?.data}
                key={restaurant?.data?.data?.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
