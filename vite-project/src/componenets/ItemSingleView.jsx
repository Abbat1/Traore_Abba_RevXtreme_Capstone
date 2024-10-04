import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../components_styles/Homepage.css';
import { StoreProvider } from '../store/ContextProvider';

function SingleItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { dispatch } = useContext(StoreProvider);
    const {
      state: { products },
    } = useContext(StoreProvider);
  
    // const product = products.find((p) => p.id === parseInt(id));
    const [product, setProduct] = useState({    });


    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch(`http://localhost:8080/api/cars/${id}`);
            const data = await response.json();
            console.log(data)
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
        }
        fetchData();
    }, []);

    const addToCart = (e, product) => {
        e.stopPropagation();
        dispatch({ type: "ADD_TO_CART", payload: product });
        // setShowCartOption(true);
        // setTimeout(() => setShowCartOption(false), 5000); 
      };
  
    if (!product) {
      return <div>Product not found</div>;
    }
  console.log(product)
    return (
      <div className="container mx-auto p-4">
        <button
          onClick={() => navigate("/")}
          className="mb-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
        >
          Back to All Items
        </button>
        <div className="bg-platinum p-6 rounded-lg shadow-md">
          <img
            src={product.url}
            alt={product.name}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p>{`${product.year} | ${product.make} | ${product.name} | ${product.horsepower} HP | ${product.transmission} | $${product.price} | ${product.engine} | ${product.color} `}</p>
          <p className="text-keppel font-bold text-xl mb-4">
            {/* ${product.price.toFixed(2)} */}
        </p>
        <button className="w-full bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
        onClick={(e) => addToCart(e, product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleItem;