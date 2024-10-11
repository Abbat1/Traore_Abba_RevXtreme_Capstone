import '../components_styles/Inventory.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

 // CarCard Component for individual car details
const CarCard = ({ id, imageSrc, altText, title, year, make, name, price, horsepower, engine, color, transmission, deleteProduct }) => {
  const navigate = useNavigate();
  return (
    <div className="car-card" id={id}>
      <img src={imageSrc} alt={altText} />
      <div className="car-info">
        <h3>{title}</h3>
        <p>{`${year} | ${make} | ${name} | ${horsepower} HP | ${transmission} | $${price} | ${engine} | ${color} `}</p>
        <Link to={`/car/${id}`} className="text-blue-500 underline"> View Vehicle </Link>
       <button
       button
       onClick={() => addToCart({ id, imageSrc, altText, title, year, make, name, price, horsepower, engine, color, transmission })}
       className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
     >
       Add to Cart
        </button>

        <button
          className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
          onClick={() => navigate("/UpdateProduct" , {state: {id, imageSrc, altText, title, year, make, name, price, horsepower, engine, color, transmission}})} >
          Update Product
        </button>

        <button
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          onClick={() => deleteProduct(id)}
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

// Main App Component
const Inventory = () => {
  const [cars, setCars] = useState([]);

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/api/cars/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Product deleted successfully!');
        } else {
          console.error('There was an error deleting the product!');
        }
      })
      .catch(error => {
        console.error('There was an error deleting the product!', error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/cars')
      .then(response => {
        console.log(response.data);
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cars!', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header>
        <Navbar />
      </header> */}
      <section className="py-12 px-4" id="inventory">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
        <div className="car-grid">
        {cars.map((car) => (    
          <CarCard
            key={car.id}
            id={car.id}
            imageSrc={car.url}
            altText={car.altText}
            price={car.price}
            horsepower={car.horsepower}
            engine={car.engine}
            color={car.color}
            transmission={car.transmission}
            year={car.year}
            make={car.make}
            name={car.name}
            deleteProduct={deleteProduct}
          />
        ))}
     </div>
      </section>
      <Footer />
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <form className="cta-form">
        <input type="email" placeholder="Enter Email" required />
        <button type="submit">Subscribe and Save 5%</button>
      </form>
      <p>&copy; 2024 RevXtreme. All rights reserved.</p>
    </footer>
  );
};

export default Inventory;

