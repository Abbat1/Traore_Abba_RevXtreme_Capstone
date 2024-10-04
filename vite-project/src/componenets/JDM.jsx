import '../components_styles/Homepage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

//Function to Handle Email Submission
const handleEmailSubmit = (event) => {
  event.preventDefault();
  console.log('Email submitted:', email);
  // Add any email submission logic here
}

 // CarCard Component for individual car details
 const CarCard = ({ id, imageSrc, altText, title, year, make, name, price, horsepower, engine, color, transmission }) => {
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

      </div>
    </div>
  );
};


  //UseEffect Hook to Fetch Data from the API
function JDM() {
  const [email, setEmail] = useState('');

  //UseEffect Hook to Fetch Data from the API
  const [cars, setCars] = useState([]);

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

return(
// Main App Component
<div>
<section className="py-12 px-4" id="inventory">
<h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
<div className="car-grid">
{cars.filter(car=> car.make == "Toyota" || car.make == "Subaru" || car.make == "Mazda" || car.make == "Nissan").map((car) => (    
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

export default JDM;
  
// CarGrid Component for JDM cars
// const JDMCarGrid = () => {
//   return (
//     <div className="car-grid">
//       {jdmCars.map((car, index) => (
//         <CarCard
//           key={index}
//           id={car.id}
//           imageSrc={car.imageSrc}
//           altText={car.altText}
//           title={car.title}
//           details={car.details}
//         />
//       ))}
//     </div>
//   );
// };