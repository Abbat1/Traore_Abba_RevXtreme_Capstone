import '../components_styles/Homepage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Function to Handle Email Submission
const handleEmailSubmit = (event) => {
  event.preventDefault();
  console.log('Email submitted:', email);
  // Add any email submission logic here
}

// below is the CarCard component for individual car details
const CarCard = ({ id, imageSrc, altText, title, year, price, horsepower, engine, color, transmission }) => {
  return (
    <div className="car-card" id={id}>
      <img src={imageSrc} alt={altText} />
      <div className="car-info">
        <h3>{title}</h3>
        <p>{`${year} | ${horsepower} HP | ${transmission} | $${price} | ${engine} | ${color}`}</p>
        <Link to={`/ItemSingleView/${id}`}>View Details</Link>
       <button
       button
       onClick={() => addToCart({ id, imageSrc, altText, title, year, price, horsepower, engine, color, transmission })}
       className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
     >
       Add to Cart
        </button>
      </div>
    </div>
  );
};

// GermanCarGrid component for German cars
function German() {
  // State to manage the email input value
  const [email, setEmail] = useState('');

  // State to manage the list of cars fetched from the API
  const [cars, setCars] = useState([]);

  // useEffect Hook to fetch data from the API when the component mounts
  useEffect(() => {
    // Make a GET request to the API endpoint to fetch car data
    axios.get('http://localhost:8080/api/cars')
      .then(response => {
        // Log the response data to the console for debugging
        console.log(response.data);
        // Update the state with the fetched car data
        setCars(response.data);
      })
      .catch(error => {
        // Log any errors that occur during the fetch operation
        console.error('There was an error fetching the cars!', error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

return(
  // Main App Component
  <div>
  <section className="py-12 px-4" id="inventory">
  <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
  <div className="car-grid">
 {cars.filter(car=> car.make == "BMW" || car.make == "Audi" || car.make == "Porsche").map((car) => (    
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
      title={car.name}
    />))}
  </div>
  </section>


{/* this section below is the footer section for the page */}
      <footer style={{ backgroundColor: 'gray' }}>
        <form className="cta-form" onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe and Save 5%</button>
        </form>
        <p>&copy; 2024 RevXtreme. All rights reserved.</p>
      </footer>
    </div>

);

}

export default German;
  