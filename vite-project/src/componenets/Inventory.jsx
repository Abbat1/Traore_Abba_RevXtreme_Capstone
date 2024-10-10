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





//below is the code for the CarCard component used rendering in the frontend only, which is why its commented out
   
{/* <button
button
onClick={() => addToCart({ id, imageSrc, altText, title, year, price, horsepower, engine, color, transmission })}
className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
>

Add to Cart
 </button> */}

// CarGrid Component
// const CarGrid = () => {
//   const cars = [
//     // Combine all car data into a single array
//     {
//       id: 'porsche-718',
//       imageSrc: 'https://www.exclusiveautomotivegroup.com/imagetag/3286/main/l/Used-2020-Porsche-718-Cayman-GT4-1680550922.jpg',
//       altText: 'Porsche 718 Cayman',
//       title: 'Porsche 718 Cayman',
//       details: '2020 | 862 HP | Aluminum | $85,000 | 4.0L Flat-6 | Speed Yellow | 6,675 mi.',
//     },
//     {
//       id: 'audi-rs7',
//       imageSrc: 'https://www.exoticmotorsportsok.com/imagetag/1605/2/l/Used-2017-Audi-RS-7-40T-Performance-Prestige-740whp-Upgraded-Turbos-Downpipes-Intake-1685142385.jpg',
//       altText: 'Audi RS7 Performance',
//       title: 'Audi RS7 Performance',
//       details: '2017 | 740 HP | Aluminum Chassis | $77,000 | 4.0L Twin-TurboCharger | Polar Bear White',
//     },
//     {
//       id: 'bmw-x5m',
//       imageSrc: 'https://www.ferrariofcentralnj.com/imagetag/17372/2/l/Used-2022-BMW-X5-M-Competition-1697973090.jpg',
//       altText: 'BMW X5M Competition',
//       title: 'BMW X5M Competition',
//       details: '2022 | 717 HP | Aluminum Chassis | $93,000 | 4.4L Twin-Turbocharger | Champagne White | 8,649 mi.',
//     },
//     {
//       id: 'bmw-f80',
//       imageSrc: 'https://m3list.com/wp-content/uploads/2023/12/IMG_9853-1024x768.jpeg',
//       altText: 'BMW F80 M3',
//       title: 'BMW F80 M3',
//       details: '2018 | 1,000 HP | Aluminum Chassis | $132,111 | 3.0L Inline-6 Turbocharger | Tomato Red | 10,004 mi.',
//     },
//     {
//       id: 'mercedes-amg',
//       imageSrc: 'https://carfax-img.vast.com/carfax/v2/-504609947495470801/1/1024x768',
//       altText: 'Mercedes AMG GT 63',
//       title: 'Mercedes AMG GT 63',
//       details: '2021 | 989 HP | Aluminum & Steel | $101,000 | 4.0L Twin-TurboCharger | Magneto | 35,081 mi.',
//     },
//     {
//       id: 'porsche-911',
//       imageSrc: 'https://www.mclarencf.com/imagetag/127/main/l/Used-2014-Porsche-911-Turbo-S.jpg',
//       altText: 'Porsche 911 Turbo S',
//       title: 'Porsche 911 Turbo S',
//       details: '2014 | 740 HP | Aluminum Chassis | $149,000 | 3.8L Flat 6 | Nardo Grey | 11,754 mi.',
//     },
//     {
//       id: 'audi-rsq8',
//       imageSrc: 'https://carfax-img.vast.com/carfax/v2/5648672258952747130/1/1024x768',
//       altText: 'Audi RSQ8',
//       title: 'Audi RSQ8',
//       details: '2021 | 626 HP | Aluminum Chassis | $86,921 | 4.0L Twin-TurboCharger | Gotham Night | 30,005 mi.',
//     },
//     {
//       id: 'mercedes-amg-c63',
//       imageSrc: 'https://cdn.dealeraccelerate.com/collective/1/127/4345/1920x1440/2021-mercedes-benz-amg-c63s-coupe.webp',
//       altText: 'Mercedes AMG C63',
//       title: 'Mercedes AMG C63',
//       details: '2021 | 763 HP | Stainless Steel | $103,525 | 4.0L V8 Twin-TurboCharger | Onyx | 9,862 mi.',
//     },
//     {
//       id: 'bmw-e60',
//       imageSrc: 'https://www.westcoastexoticcars.com/imagetag/145/2/l/Used-2006-BMW-M5-1610057272.jpg',
//       altText: 'BMW E60 M5',
//       title: 'BMW E60 M5',
//       details: '2006 | 757 HP | Stainless Steel | $80,143 | 5.0L N/A | Sonic Blue | 30,005 mi.',
//     },
//     {
//       id: 'rx7-fd',
//       imageSrc: 'https://images.classic.com/vehicles/d51098759ebb9700bb238ca4f0594a6ab9135ec9.jpg?w=1200&h=676&fit=crop',
//       altText: 'Mazda RX-7 FD',
//       title: 'Mazda RX-7 FD',
//       details: '1995 | 650 HP | Carbon Fiber Widebody Kit | $65,000 | 1.3L Rotary TurboCharger | Carbon\'s Shadow',
//     },
//     {
//       id: 'rx7-fc',
//       imageSrc: 'https://www.fastcar.co.uk/wp-content/uploads/sites/2/Modified-FC-RX-7-1-1.jpg',
//       altText: 'Mazda RX-7 FC',
//       title: 'Mazda RX-7 FC',
//       details: '1989 | 480 HP | Stainless Steel | $99,890 | 1.3L Rotary | Oxford White | 11,754 mi.',
//     },
//     {
//       id: 'wrx-bugeye',
//       imageSrc: 'https://uploads.builtforbackroads.com/uploads/2024/01/2024.01.29-SUBARU-BUGEYE-WRX-2002_1.jpg',
//       altText: 'SUBARU BUGEYE WRX',
//       title: 'SUBARU BUGEYE WRX',
//       details: '2002 | 600 HP | Aluminum Chassis | $66,000 | 2.5L Turbocharger | Ocean Blue | 36,000 mi.',
//     },
//     {
//       id: 'gtr-r32',
//       imageSrc: 'https://jdmsupply.com/storage/images/vehicle/614/GvSD77l13VTx7Vc4vyTsOH6w2jeNjDcRtcM8npKj_1214x854.webp',
//       altText: 'Nissan GTR R32 V Spec',
//       title: 'Nissan GTR R32 V Spec',
//       details: '1992 | 597 HP | Aluminum Chassis | $88,000 | 2.6L Inline 6 Turbocharger | Pearly White | 621 mi.',
//     },
//     {
//       id: 'gtr-r35',
//       imageSrc: 'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/59339d5e07287c702e69307de910cceaa69c1d04/photos/36MjBE4P-azdF-N8EMz-(edit).jpg?t=165169539877',
//       altText: 'Nissan GTR R35 Nismo',
//       title: 'Nissan GTR R35 Nismo',
//       details: '2017 | 900 HP | Aluminum Chassis | $100,435 | 3.8L Twin Turbocharger | Phantom Black | 8,046 mi.',
//     },
//     {
//       id: 'evo-ix',
//       imageSrc: 'https://images.collectingcars.com/059561/bccdeb22-7cf9-4177-bbc5-aca7c93957de.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85',
//       altText: 'Mitsubishi EVO Lancer IX',
//       title: 'Mitsubishi EVO Lancer IX',
//       details: '2006 | 660 HP | Stainless Steel | $50,000 | 2.0L Turbocharger | Arctic Blue | 11,754 mi.',
//     },
//     {
//       id: 'supra-mk5',
//       imageSrc: 'https://carfax-img.vast.com/carfax/v2/2974964957489613989/1/1024x768',
//       altText: 'Toyota Supra MK5 Premium',
//       title: 'Toyota Supra MK5 Premium',
//       details: '2022 | 703 HP | Stainless Steel | $71,500 | 3.0L Turbocharger | Silver Bullet | 2,320 mi.',
//     },
//     {
//       id: 'cadillac',
//       imageSrc: 'https://www.avantgardewheels.com/wp-content/uploads/2021/12/cadillac-cts-v-f538-polish-black-chrome-carbon-fiber-avant-garde-wheels-01.jpg',
//       altText: 'Cadillac CT5-V BlackWing',
//       title: 'Cadillac CT5-V BlackWing',
//       details: '2019 | 800 HP | Aluminum | $85,000 | 6.2L Supercharger | Noir Nemesis | 27,945 mi',
//     },
//     {
//       id: 'mustang',
//       imageSrc: 'https://vexgateway.fastly.carvana.io/executions/142302651/FLOOR_CLEANER/cleaned/clean_008.jpg?v=1724266768.229&dpr=1.5&optimize=low&width=1200',
//       altText: 'Ford Mustang Shelby GT350R',
//       title: 'Ford Mustang Shelby GT350R',
//       details: '2012 | 805 HP | Carbon Fiber | $115,600 | 5.3L N/A | Glacier White | 13,046 mi.',
//     },
//     {
//       id: 'durango',
//       imageSrc: 'https://media.ed.edmunds-media.com/dodge/durango/2023/oem/2023_dodge_durango_4dr-suv_srt-392_fq_oem_1_815.jpg',
//       altText: 'Dodge Durango SRT',
//       title: 'Dodge Durango SRT',
//       details: '2021 | 907 HP | Aluminum Chassis | $125,600 | 6.4L Supercharger | Wolf Grey | 10,004 mi.',
//     },
//     {
//       id: 'demon',
//       imageSrc: 'https://www.carscoops.com/wp-content/uploads/webp/2023/11/Dodge-Challenger-SRT-Demon-170-1_1a-1536x864.webp',
//       altText: 'Dodge Demon 170',
//       title: 'Dodge Demon 170',
//       details: '2023 | 1,100 HP | Aluminum Chassis | $125,600 | 6.4L Supercharger | Wolf Grey | 10,004 mi.',
//     },
//     {
//       id: 'viper',
//       imageSrc: 'https://d2blhp03rkvfi4.cloudfront.net/cache/width_916/car/car-245485/photo/2016-dodge-viper-259900-160590210.webp',
//       altText: 'Dodge Viper ACR',
//       title: 'Dodge Viper ACR',
//       details: '2017 | 1,265 HP | Carbon Fiber | $250,345 | 8.4L Twin TurboCharger | SRT Red Stripe | 8,046 mi.',
//     },
//     {
//       id: 'corvette',
//       imageSrc: 'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/9a55og0E.ZzEAOU7oS-(edit).jpg?t=163039215086',
//       altText: 'Corvette C6 Z06',
//       title: 'Corvette C6 Z06',
//       details: '2007 | 960 HP | Stainless Steel | $141,000 | 7.0L Supercharger | Nightshade | 11,754 mi.',
//     },
//     {
//       id: 'firebird',
//       imageSrc: 'https://bringatrailer.com/wp-content/uploads/2020/05/2002_pontiac_trans_am_ws6_15928600824180a8a78db7e8DSC_0674.jpg?fit=940%2C627',
//       altText: 'Pontiac Firebird Trans Am',
//       title: 'Pontiac Firebird Trans Am',
//       details: '2002 | 670 HP | Stainless Steel | $65,600 | 5.7L Supercharger | Gotham Night | 30,005 mi.',
//     },
//     {
//       id: 'shelby-f150',
//       imageSrc: 'https://images.autotrader.com/hn/c/9b3f1d7f8e674f429cab30b4051cd0b6.jpg',
//       altText: 'Ford F-150 Shelby Super Snake',
//       title: 'Ford F-150 Shelby Super Snake',
//       details: '2023 | 890 HP | Stainless Steel | $127,095 | 5.0L Supercharger | Oxford White | 11,754 mi.',
//     },
//     {
//       id: 'ram-srt',
//       imageSrc: 'https://bringatrailer.com/wp-content/uploads/2021/01/2006_dodge_ram_srt-10_16118008915a780c2dc208EFA361A-996B-45CB-B707-18842AE4D0D5-scaled-e1613587859263.jpeg?fit=940%2C627',
//       altText: 'Dodge Ram SRT-10',
//       title: 'Dodge Ram SRT-10',
//       details: '2006 | 907 HP | Stainless Steel | $75,000 | 8.3L Supercharger | Gotham Night | 30,005 mi.',
//     },
//   ];

//   return (
//     <div className="car-grid">
//       {cars.map((car) => (
//         <CarCard
//           key={car.id}
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