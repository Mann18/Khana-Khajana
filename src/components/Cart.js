import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <p className="font-bold text-3xl text-center">Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap ">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">{item.restaurantName}</h3>
              <img
                src={item.image}
                className=" w-auto h-20 rounded-lg m-auto"
              />
              <p className="font-bold font-lg text-center m-3">
                {item.cuisine}
              </p>
              <p className="font-semibold m-3">
                Price:{" "}
                <span className="font-bold bg-green-600 rounded-lg text-white">
                  ₹{item.price}
                </span>
              </p>
              <button
                className="p-1 bg-red-500 rounded-lg m-3"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
