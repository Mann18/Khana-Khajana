import { restaurantList } from "../Constants";
const useRestaurant = (resId) => {
  const restaurant = restaurantList.find((r) => r.data.data.id === resId);

  return restaurant;
};
export default useRestaurant;
