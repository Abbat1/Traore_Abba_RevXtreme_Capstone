import React, { useEffect, useState } from 'react'; // Import React and hooks for managing state and side effects
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks for accessing route parameters and navigation
import axios from 'axios'; // Import axios for making HTTP requests

// SingleItem component for displaying details of a single product
function SingleItem({ addToCart }) {
  const { id } = useParams(); // Extract the product ID from the route parameters
  const [product, setProduct] = useState(null); // State to manage the product details
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // useEffect hook to fetch product details when the component mounts
  useEffect(() => {
    // Function to fetch product details from the API
    const fetchProduct = async () => {
      try {
        // Make a GET request to fetch product details by ID
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data); // Update the state with the fetched product details
      } catch (error) {
        console.error('Error fetching product:', error); // Log any errors that occur during the fetch operation
      }
    };

    fetchProduct(); // Call the fetchProduct function
  }, [id]); // Dependency array to run the effect only when the ID changes

  // Check if the product is not found
  if (!product) {
    return <div>Product not found</div>; // Display a message if the product is not found
  }

  console.log(product); // Log the product details to the console for debugging

  return (
    // Main container div for the component
    <div className="container mx-auto p-4">
      {/* Button to navigate back to the home page */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
      >
        Back to All Items
      </button>
      {/* Container for product details */}
      <div className="bg-platinum p-6 rounded-lg shadow-md">
        {/* Image of the product */}
        <img
          src={product.url}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        {/* Product name */}
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        {/* Product details */}
        <p>{`${product.year} | ${product.make} | ${product.name} | ${product.horsepower} HP | ${product.transmission} | $${product.price} | ${product.engine} | ${product.color} `}</p>
        {/* Product price */}
        <p className="text-keppel font-bold text-xl mb-4">
          {/* ${product.price.toFixed(2)} */}
        </p>
        {/* Button to add the product to the cart */}
        <button
          className="w-full bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
          onClick={(e) => addToCart(e, product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleItem;