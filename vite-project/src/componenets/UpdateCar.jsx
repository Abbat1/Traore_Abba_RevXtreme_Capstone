/*import React, { useState } from 'react';
import axios from 'axios';*/

/*const UpdateCar = ({ car }) => {
  const [updatedCar, setUpdatedCar] = useState(car);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCar({ ...updatedCar, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/cars/${updatedCar.id}`, updatedCar)
      .then(response => {
        console.log('Car updated successfully');
      })
      .catch(error => {
        console.error('There was an error updating the car!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={updatedCar.name} onChange={handleChange} />
      <input type="text" name="make" value={updatedCar.make} onChange={handleChange} />
      <input type="number" name="model" value={updatedCar.model} onChange={handleChange} />
      <input type="number" name="year" value={updatedCar.year} onChange={handleChange} />
      <input type="text" name="engine" value={updatedCar.engine} onChange={handleChange} />
      <input type="text" name="color" value={updatedCar.color} onChange={handleChange} />
      <input type="number" name="mileage" value={updatedCar.mileage} onChange={handleChange} />
      <input type="number" name="horsepower" value={updatedCar.horsepower} onChange={handleChange} />
      <input type="text" name="drivetrain" value={updatedCar.drivetrain} onChange={handleChange} />
      <input type="number" name="price" value={updatedCar.price} onChange={handleChange} />
      <input type="text" name="url" value={updatedCar.url} onChange={handleChange} />
      <button type="submit">Update Car</button>
    </form>
  );
};*/

export default UpdateCar;