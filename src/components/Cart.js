import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-4">
        Cart Items - {cartItems.length}
      </h1>

      {cartItems.length === 0 ? (
        <>
          <p className="font-bold text-2xl md:text-3xl text-center">
            Your cart is empty.
          </p>
          <img
            className=" w-96 m-6 mx-auto"
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          />
        </>
      ) : (
        <>
          <button
            className="bg-blue-300 rounded-lg hover:bg-blue-400 p-2 m-3 md:m-5"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 border-2 shadow-xl rounded-lg m-2"
              >
                <h3 className="font-bold text-lg mb-2 md:mb-3">
                  {item.restaurantName}
                </h3>
                <img
                  src={item.image}
                  className="w-auto h-20 rounded-lg mx-auto mb-2 md:mb-3"
                  alt={item.cuisine}
                />
                <p className="font-semibold text-center mb-2 md:mb-3 underline hover:font-bold">
                  {item.cuisine}
                </p>
                <p className="font-semibold mb-2 md:mb-3">
                  Price:{" "}
                  <span className="font-bold bg-green-600 rounded-lg text-white px-2">
                    ₹{item.price}
                  </span>
                </p>
                <button
                  className="p-1 bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <img
            className=" w-14"
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-donations-shopping-carts-forms-membershipworks-21.png"
          />
        </>
      )}
    </div>
  );
};

export default Cart;
