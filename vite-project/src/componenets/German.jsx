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

//Below is the GermanCarGrid component for german cars
function German() {
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
  
  // Grid for German vehicles with images, names, and descriptions. 
  //Cars is the Variable Holding the Array of Objects
 /* const cars = [
    {
      img: 'https://www.exclusiveautomotivegroup.com/imagetag/3286/main/l/Used-2020-Porsche-718-Cayman-GT4-1680550922.jpg',
      name: 'Porsche 718 Cayman',
      description: '2020 | 862 HP | Aluminum | $85,000 | 4.0L Flat-6 | Speed Yellow | 6,675 mi.',
    },
    {
      img: 'https://www.exoticmotorsportsok.com/imagetag/1605/2/l/Used-2017-Audi-RS-7-40T-Performance-Prestige-740whp-Upgraded-Turbos-Downpipes-Intake-1685142385.jpg',
      name: 'Audi RS7 Performance',
      description: '2017 | 740 HP | Aluminum Chassis | $77,000 | 4.0L Twin-TurboCharger | Polar Bear White',
    },
    {
      img: 'https://www.ferrariofcentralnj.com/imagetag/17372/2/l/Used-2022-BMW-X5-M-Competition-1697973090.jpg',
      name: 'BMW X5M Competition',
      description: '2022 | 717 HP | Aluminum Chassis | $93,000 | 4.4L Twin-Turbocharger | Champagne White | 8,649 mi.',
    },
    {
      img: 'https://m3list.com/wp-content/uploads/2023/12/IMG_9853-1024x768.jpeg',
      name: 'BMW F80 M3',
      description: '2018 | 1,000 HP | Aluminum Chassis | $132,111 | 3.0L Inline-6 Turbocharger | Tomato Red | 10,004 mi.',
    },
    {
      img: 'https://carfax-img.vast.com/carfax/v2/-504609947495470801/1/1024x768',
      name: 'Mercedes AMG GT 63',
      description: '2021 | 989 HP | Aluminum & Steel | $101,000 | 4.0L Twin-TurboCharger | Magneto | 35,081 mi.',
    },
    {
      img: 'https://www.mclarencf.com/imagetag/127/main/l/Used-2014-Porsche-911-Turbo-S.jpg',
      name: 'Porsche 911 Turbo S',
      description: '2014 | 740 HP | Aluminum Chassis | $149,000 | 3.8L Flat 6 | Nardo Grey | 11,754 mi.',
    },
    {
      img: 'https://carfax-img.vast.com/carfax/v2/5648672258952747130/1/1024x768',
      name: 'Audi RSQ8',
      description: '2021 | 626 HP | Aluminum Chassis | $86,921 | 4.0L Twin-TurboCharger | Gotham Night | 30,005 mi.',
    },
    {
      img: 'https://cdn.dealeraccelerate.com/collective/1/127/4345/1920x1440/2021-mercedes-benz-amg-c63s-coupe.webp',
      name: 'Mercedes AMG C63',
      description: '2021 | 763 HP | Stainless Steel | $103,525 | 4.0L V8 Twin-TurboCharger | Onyx | 9,862 mi.',
    },
    {
      img: 'https://www.westcoastexoticcars.com/imagetag/145/2/l/Used-2006-BMW-M5-1610057272.jpg',
      name: 'BMW E60 M5',
      description: '2006 | 757 HP | Stainless Steel | $80,143 | 5.0L N/A | Sonic Blue | 30,005 mi.',
    },
  ];*/


  //section below should be to help map through the cars array and display the cars in the grid
//  return (
//     <div>
      
//       <section className="American-Muscle" id="inventory">
//         <div className="car-grid">
//           {cars.map((car, index) => (
//             <div className="car-card" key={index}>
//               <img src={car.img} alt={car.name} />
//               <div className="car-info">
//                 <h3>{car.name}</h3>
//                 <p>{car.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>




