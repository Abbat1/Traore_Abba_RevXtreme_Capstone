// Main App Component
function JDM() {
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

  return (
    // Main container div for the component
    <div>
      {/* Section for displaying the car inventory */}
      <section className="py-12 px-4" id="inventory">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
        {/* Grid container for car cards */}
        <div className="car-grid">
          {/* Filter and map over the cars array to display only specific makes */}
          {cars.filter(car => car.make === "Toyota" || car.make === "Subaru" || car.make === "Mazda" || car.make === "Nissan").map((car) => (
            // Render a CarCard component for each car
            <CarCard
              key={car.id} // Unique key for each car card
              id={car.id} // Car ID
              imageSrc={car.url} // Image URL for the car
              altText={car.altText} // Alt text for the car image
              price={car.price} // Price of the car
              horsepower={car.horsepower} // Horsepower of the car
              engine={car.engine} // Engine type of the car
              color={car.color} // Color of the car
              transmission={car.transmission} // Transmission type of the car
              year={car.year} // Year of manufacture
              title={car.name} // Title/name of the car
            />
          ))}
        </div>
      </section>

      {/* Footer section for the page */}
      <footer style={{ backgroundColor: 'gray' }}>
        {/* Form for email subscription */}
        <form className="cta-form" onSubmit={handleEmailSubmit}>
          {/* Email input field */}
          <input
            type="email"
            placeholder="Enter Email"
            required // Make the input field required
            value={email} // Bind the input value to the email state
            onChange={(e) => setEmail(e.target.value)} // Update the state on input change
          />
          {/* Submit button for the form */}
          <button type="submit">Subscribe and Save 5%</button>
        </form>
        {/* Footer text */}
        <p>&copy; 2024 RevXtreme. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default JDM;

// CarGrid Component for JDM cars
// This component was intended to display a grid of JDM cars
// const JDMCarGrid = () => {
//   return (
//     <div className="car-grid">
//       {jdmCars.map((car, index) => (
//         // Render a CarCard component for each car in the jdmCars array
//         <CarCard
//           key={index} // Unique key for each car card
//           id={car.id} // Car ID
//           imageSrc={car.imageSrc} // Image URL for the car
//           altText={car.altText} // Alt text for the car image
//           title={car.title} // Title/name of the car
//           details={car.details} // Additional details about the car
//         />
//       ))}
//     </div>
//   );
// };
  