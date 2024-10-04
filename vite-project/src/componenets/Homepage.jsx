import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function HomePage() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    // Add any email submission logic here
  };

   //Variable holding all images, names, and descriptions for featured cars
  const featuredCars = [
    {
      img: 'https://uploads.builtforbackroads.com/uploads/2022/07/2022.07.29-CHEVROLET-CORVETTE-2017_1-1536x1024.jpg',
      name: 'Corvette C7 ZR1 3LZ',
      description: '2018 | 1,025 HP | Aluminum Chassis | $170,000 | 6.2L V8 Twin Turbocharged',
    },
    {
      img: 'https://images.collectingcars.com/014715/Reece-bmw-166.jpg?fit=clip&w=2000&auto=format,compress&cs=srgb&q=85',
      name: 'BMW E92 M3',
      description: '2012 | 805 HP | ESS Superhcarger | $90,300 | 4.0L N/A V8 | Glacier White',
    },
    {
      img: 'https://www.drivingline.com/s3/drivingline.prd/media/2344011/cobra_drivingline-178.jpg?quality=70&mode=pad&copymetadata=true&w=1152',
      name: 'Terminator Cobra Mustang',
      description: '2003 | 770 HP | Track-Ready Suspension | $80,000 | 4.6L V8 | Canary Yellow',
    },
  ];

  //Variable holding all images, names, and descriptions for specialty cars
  const specialtyCars = [
    {
      img: 'https://www.motortrend.com/uploads/sites/11/2020/01/2015-Lamborghini-Veneno-Roadster-16.jpg?w=768&width=768&q=75&format=webp',
      name: 'Lamborghini Veneno Roadster',
      description: '2015 | 1,400 HP | Carbon Fiber | $4,000,000 | 6.5L V12 | Midnight',
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-138-64ecda037334a.jpg?crop=0.628xw:0.529xh;0.176xw,0.281xh&resize=2048:*',
      name: 'Porsche 911 GT3 RS',
      description: '2019 | 1,400 HP | Carbon Fiber | $320,000 | 4.0L Flat 6 | Racing Yellow',
    },
    {
      img: 'https://bringatrailer.com/wp-content/uploads/2021/04/1991_acura_nsx_16198172397822495500-307.jpg?fit=940%2C626',
      name: 'Acura NSX',
      description: '1991 | 700 HP | Carbon Fiber WideBody Kit | $200,000 | 3.0L V6 | Torched Orange',
    },
  ];

  //Middle Section of the Homepage.
  return (
    <div id="homebody">
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Experience Extreme Performance</h1>
            <p>Discover our collection of modified luxury sports cars</p>
            <a href="#inventory" className="btn">Explore Our Fleet</a>
          </div>
        </section>

        {/* Featured Cars Section */}
        <section className="featured-cars container" id="inventory">
          <h2>Featured Vehicles</h2>
          <div className="car-grid">
            {featuredCars.map((car, index) => (
              <div className="car-card" key={index}>
                <img src={car.img} alt={`Featured Car ${index + 1}`} />
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialties Section */}
        <section className="specialties container">
          <h2>Specialties</h2>
          <div className="car-grid">
            {specialtyCars.map((car, index) => (
              <div className="car-card" key={index}>
                <img src={car.img} alt={`Specialty Car ${index + 1}`} />
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer section */}
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

// This here is how we fetch the backend data to the frontend using the useEffect hook
function Homepage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://http://localhost:5173/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>inventory</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HomePage;

