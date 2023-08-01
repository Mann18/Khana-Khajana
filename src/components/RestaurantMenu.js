// import React, { useEffect, useState } from "react";

// const Menu = () => {
//   const [menus, setMenus] = useState([]);

//   useEffect(() => {
//     getdata();
//   }, []);

//   function getdata() {
//     const data = fetch(
//       " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=613857"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data?.data?.cards[0]?.card?.card?.info);
//          console.log(data?.data?.cards[0]?.card?.card?.info?.name + "\n");
//          console.log(data?.data?.cards[0]?.card?.card?.info?.areaName + "\n");
//          console.log(data?.data?.cards[0]?.card?.card?.info?.city + "\n");
//          console.log(data?.data?.cards[0]?.card?.card?.info?.cuisines + "\n");
//          console.log(data?.data?.cards[0]?.card?.card?.info?.labels[1].message + "\n");

//         // setMenu(data.data.cards[0].card.info)
//         // setMenus(data.data.cards[0]);
//         // console.log("menu is " + menus);
//       });
//   }

//   return (
//     <div>
//       {/* {menus.map(menu =>{
//             <h1>{...menus?.info?.name}</h1>
//         })} */}
//       https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=106614&catalog_qa=undefined&submitAction=ENTER
//     </div>
//   );
// };

// export default Menu;

//!=======================================================================================================

// import React, { useEffect, useState } from "react";

// const Menu = () => {
//   const [menus, setMenus] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getdata();
//   }, []);

//   function getdata() {
//     const url =
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=613857";

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setMenus(data?.data?.cards[0]?.card?.card?.info);
//         console.log(data?.data?.cards[0]?.card?.card.info);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });

//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       {menus.length > 0 ? (
//         menus.map((menu) => (
//           <div key={menu.id} className="card">
//             <h1>{menu.name}</h1>
//             <p>Area: {menu.areaName}</p>
//             <p>City: {menu.city}</p>
//             <p>Cuisines: {menu.cuisines}</p>
//             {menu.labels && menu.labels[1] && <p>Label: {menu.labels[1].message}</p>}
//           </div>
//         ))
//       ) : (
//         <p>No data found.</p>
//       )}
//     </div>
//   );
// };

// export default Menu;

//?===============================================================================================================

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data?.data?.cards[0]?.card?.card?.info);
    setRestauraunt(json.data?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
