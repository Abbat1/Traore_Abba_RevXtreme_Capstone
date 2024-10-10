import React, { useContext } from "react"; // Import React and useContext hook for accessing context
import { StoreProvider } from "../store/ContextProvider"; // Import StoreProvider context

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// Cart component for displaying and managing the shopping cart
function Cart() {
  // Access state and dispatch from the StoreProvider context
  const { state, dispatch } = useContext(StoreProvider);
  const { cart } = state; // Destructure cart from the state

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id }); // Dispatch REMOVE_FROM_CART action with the item ID
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } }); // Dispatch UPDATE_QUANTITY action with the item ID and new quantity
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2); // Calculate the total price and format it to 2 decimal places
  };

  return (
    // Main container div for the component
    <div className="container mx-auto p-4">
      {/* Header for the cart */}
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {/* Conditional rendering based on whether the cart is empty */}
      {cart.length === 0 ? (
        // Display message if the cart is empty
        <p>Your cart is empty.</p>
      ) : (
        // Display cart items if the cart is not empty
        <>
          {/* Map over the cart items to display each item */}
          {cart.map((item) => (
            // Container div for each cart item
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              {/* Container for item details */}
              <div>
                {/* Image of the item */}
                <img src={item.url} alt={item.name} className="w-16 h-16 object-cover rounded" />
                {/* Name of the item */}
                <h3 className="font-semibold">{item.name}</h3>
                {/* <p className="text-gray-600">${item.price.toFixed(2)}</p> */}
              </div>
              {/* Container for item quantity and actions */}
              <div className="flex items-center">
                {/* Button to decrease the quantity of the item */}
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                {/* Display the quantity of the item */}
                <span className="mx-2">{item.quantity}</span>
                {/* Button to increase the quantity of the item */}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                {/* Button to remove the item from the cart */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* Container for displaying the total price */}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
          </div>
        </>
      )}
      {/* <div>
        <button onClick={notify}>pay</button>
        <ToastContainer />
      </div> */}
    </div>
  );
}

export default Cart;

