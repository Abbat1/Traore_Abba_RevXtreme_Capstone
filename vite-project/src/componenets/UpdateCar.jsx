import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// UpdateCar component for updating car details
const UpdateCar = ({ car }) => {
  // State to manage the updated car details
  const {state} = useLocation();
  console.log(state);
  const [updatedCar, setUpdatedCar] = useState(state);
  
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    // Update the state with the new value for the corresponding field
    setUpdatedCar({ ...updatedCar, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Make a PUT request to update the car details on the server
    axios.put(`http://localhost:8080/api/cars/${updatedCar.id}`, updatedCar)
      .then(response => {
        // Log a success message to the console
        console.log('Car updated successfully');
      })
      .catch(error => {
        // Log any errors that occur during the update operation
        console.error('There was an error updating the car!', error);
      });
  };

  return (

    // Form for updating car details
    <form onSubmit={handleSubmit}>
      {/* Input field for car name */}
      <input type="text" name="name" value={updatedCar.name} onChange={handleChange} />
      {/* Input field for car make */}
      <input type="text" name="make" value={updatedCar.make} onChange={handleChange} />
      {/* Input field for car model */}
      <input type="number" name="model" value={updatedCar.model} onChange={handleChange} />
      {/* Input field for car year */}
      <input type="number" name="year" value={updatedCar.year} onChange={handleChange} />
      {/* Input field for car engine */}
      <input type="text" name="engine" value={updatedCar.engine} onChange={handleChange} />
      {/* Input field for car color */}
      <input type="text" name="color" value={updatedCar.color} onChange={handleChange} />
      {/* Input field for car mileage */}
      <input type="number" name="mileage" value={updatedCar.mileage} onChange={handleChange} />
      {/* Input field for car horsepower */}
      <input type="number" name="horsepower" value={updatedCar.horsepower} onChange={handleChange} />
      {/* Input field for car drivetrain */}
      <input type="text" name="drivetrain" value={updatedCar.drivetrain} onChange={handleChange} />
      {/* Input field for car price */}
      <input type="number" name="price" value={updatedCar.price} onChange={handleChange} />
      {/* Input field for car image URL */}
      <input type="text" name="url" value={updatedCar.url} onChange={handleChange} />
      {/* Submit button for the form */}
      <button type="submit">Update Car</button>
    </form>
  );
};

export default UpdateCar;