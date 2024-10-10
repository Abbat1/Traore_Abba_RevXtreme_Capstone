import '../components_styles/Homepage.css'; // Importing CSS for styling
import React, { useState, useEffect } from 'react'; // Importing React and hooks
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import axios from 'axios'; // Importing axios for making HTTP requests
import Navbar from './Navbar'; // Importing Navbar component

// Function to handle email submission
const handleEmailSubmit = (event) => {
  event.preventDefault(); // Prevents the default form submission behavior
  console.log('Email submitted:', email); // Logs the submitted email to the console
  // Add any email submission logic here
}

// CarCard Component for displaying individual car details
const CarCard = ({ id, imageSrc, altText, title, year, make, name, price, horsepower, engine, color, transmission }) => {
  return (
    <div className="car-card" id={id}> {/* Container for each car card */}
      <img src={imageSrc} alt={altText} /> {/* Car image */}
      <div className="car-info"> {/* Container for car information */}
        <h3>{title}</h3> {/* Car title */}
        <p>{`${year} | ${make} | ${name} | ${horsepower} HP | ${transmission} | $${price} | ${engine} | ${color} `}</p> {/* Car details */}
        <Link to={`/car/${id}`} className="text-blue-500 underline"> View Vehicle </Link> {/* Link to view more details about the car */}
        <button
          onClick={() => addToCart({ id, imageSrc, altText, title, year, make, name, price, horsepower, engine, color, transmission })} // Function to add car to cart
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" // Button styling
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Main component for displaying American muscle cars
function AmericanMuscle() {
  const [email, setEmail] = useState(''); // State for storing email input

  // State for storing car data fetched from the API
  const [cars, setCars] = useState([]);

  // useEffect hook to fetch car data from the API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/cars') // Making a GET request to fetch car data
      .then(response => {
        console.log(response.data); // Logging the response data
        setCars(response.data); // Updating the state with the fetched car data
      })
      .catch(error => {
        console.error('There was an error fetching the cars!', error); // Logging any errors
      });
  }, []);

  return (
    <div>
      <section className="py-12 px-4" id="inventory"> {/* Section for displaying car inventory */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2> {/* Section title */}
        <div className="car-grid"> {/* Container for car grid */}
          {cars.filter(car => car.make === "Dodge" || car.make === "Chevrolet" || car.make === "Ford").map((car) => ( // Filtering and mapping over the car data to display only American muscle cars
            <CarCard
              key={car.id} // Unique key for each car card
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
              make={car.make}
              name={car.name}
            />
          ))}
        </div>
      </section>

      {/* Footer section */}
      <footer style={{ backgroundColor: 'gray' }}>
        <form className="cta-form" onSubmit={handleEmailSubmit}> {/* Form for email subscription */}
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updating the email state on input change
          />
          <button type="submit">Subscribe and Save 5%</button> {/* Submit button */}
        </form>
        <p>&copy; 2024 RevXtreme. All rights reserved.</p> {/* Footer text */}
      </footer>
    </div>
  );
}

export default AmericanMuscle; // Exporting the AmericanMuscle component as default





//below is the code for the car card component being rendered in the frontend
// const cars = [
  //   {
  //     id: 'cadillac',
  //     imageSrc: 'https://www.avantgardewheels.com/wp-content/uploads/2021/12/cadillac-cts-v-f538-polish-black-chrome-carbon-fiber-avant-garde-wheels-01.jpg',
  //     altText: 'Cadillac CT5-V BlackWing',
  //     title: 'Cadillac CT5-V BlackWing',
  //     details: '2019 | 800 HP | Aluminum | $85,000 | 6.2L Supercharger | Noir Nemesis | 27,945 mi',
  //   },
  //   {
  //     id: 'mustang',
  //     imageSrc: 'https://vexgateway.fastly.carvana.io/executions/142302651/FLOOR_CLEANER/cleaned/clean_008.jpg?v=1724266768.229&dpr=1.5&optimize=low&width=1200',
  //     altText: 'Ford Mustang Shelby GT350R',
  //     title: 'Ford Mustang Shelby GT350R',
  //     details: '2012 | 805 HP | Carbon Fiber | $115,600 | 5.3L N/A | Glacier White | 13,046 mi.',
  //   },
  //   {
  //     id: 'durango',
  //     imageSrc: 'https://media.ed.edmunds-media.com/dodge/durango/2023/oem/2023_dodge_durango_4dr-suv_srt-392_fq_oem_1_815.jpg',
  //     altText: 'Dodge Durango SRT',
  //     title: 'Dodge Durango SRT',
  //     details: '2021 | 907 HP | Aluminum Chassis | $125,600 | 6.4L Supercharger | Wolf Grey | 10,004 mi.',
  //   },
  //   {
  //     id: 'demon',
  //     imageSrc: 'https://www.carscoops.com/wp-content/uploads/webp/2023/11/Dodge-Challenger-SRT-Demon-170-1_1a-1536x864.webp',
  //     altText: 'Dodge Demon 170',
  //     title: 'Dodge Demon 170',
  //     details: '2023 | 1,100 HP | Aluminum Chassis | $125,600 | 6.4L Supercharger | Wolf Grey | 10,004 mi.',
  //   },
  //   {
  //     id: 'viper',
  //     imageSrc: 'https://d2blhp03rkvfi4.cloudfront.net/cache/width_916/car/car-245485/photo/2016-dodge-viper-259900-160590210.webp',
  //     altText: 'Dodge Viper ACR',
  //     title: 'Dodge Viper ACR',
  //     details: '2017 | 1,265 HP | Carbon Fiber | $250,345 | 8.4L Twin TurboCharger | SRT Red Stripe | 8,046 mi.',
  //   },
  //   {
  //     id: 'corvette',
  //     imageSrc: 'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/9a55og0E.ZzEAOU7oS-(edit).jpg?t=163039215086',
  //     altText: 'Corvette C6 Z06',
  //     title: 'Corvette C6 Z06',
  //     details: '2007 | 960 HP | Stainless Steel | $141,000 | 7.0L Supercharger | Nightshade | 11,754 mi.',
  //   },
  //   {
  //     id: 'firebird',
  //     imageSrc: 'https://bringatrailer.com/wp-content/uploads/2020/05/2002_pontiac_trans_am_ws6_15928600824180a8a78db7e8DSC_0674.jpg?fit=940%2C627',
  //     altText: 'Pontiac Firebird Trans Am',
  //     title: 'Pontiac Firebird Trans Am',
  //     details: '2002 | 670 HP | Stainless Steel | $65,600 | 5.7L Supercharger | Gotham Night | 30,005 mi.',
  //   },
  //   {
  //     id: 'shelby-f150',
  //     imageSrc: 'https://images.autotrader.com/hn/c/9b3f1d7f8e674f429cab30b4051cd0b6.jpg',
  //     altText: 'Ford F-150 Shelby Super Snake',
  //     title: 'Ford F-150 Shelby Super Snake',
  //     details: '2023 | 890 HP | Stainless Steel | $127,095 | 5.0L Supercharger | Oxford White | 11,754 mi.',
  //   },
  //   {
  //     id: 'ram-srt',
  //     imageSrc: 'https://bringatrailer.com/wp-content/uploads/2021/01/2006_dodge_ram_srt-10_16118008915a780c2dc208EFA361A-996B-45CB-B707-18842AE4D0D5-scaled-e1613587859263.jpeg?fit=940%2C627',
  //     altText: 'Dodge Ram SRT-10',
  //     title: 'Dodge Ram SRT-10',
  //     details: '2006 | 907 HP | Stainless Steel | $75,000 | 8.3L Supercharger | Gotham Night | 30,005 mi.',
  //   },
  // ];
