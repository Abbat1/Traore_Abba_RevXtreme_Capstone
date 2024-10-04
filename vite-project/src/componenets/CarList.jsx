import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cars!', error);
      });
  }, []);

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.name} - {car.make} - {car.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;