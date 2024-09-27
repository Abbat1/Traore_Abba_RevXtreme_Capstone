import React, { useState } from 'react';

// Navbar Component with dropdown navigation
const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">RevXtreme</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="/inventory">Our Collection</a>
          <div className="dropdown-content">
            <ul>
              <li><a href="/AmericanMuscle">American Muscle</a></li>
              <li><a href="/german">German</a></li>
              <li><a href="/jdm">JDM</a></li>
            </ul>   
          </div>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">News</a></li>
      </ul>
    </nav>
  );
};

// CarCard Component for individual car details
const CarCard = ({ id, imageSrc, altText, title, details }) => {
  return (
    <div className="car-card" id={id}>
      <img src={imageSrc} alt={altText} />
      <div className="car-info">
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};

// CarGrid Component for JDM cars
const JDMCarGrid = () => {
  const jdmCars = [
    {
      id: 'rx7-fd',
      imageSrc: 'https://images.classic.com/vehicles/d51098759ebb9700bb238ca4f0594a6ab9135ec9.jpg?w=1200&h=676&fit=crop',
      altText: 'Mazda RX-7 FD',
      title: 'Mazda RX-7 FD',
      details: '1995 | 650 HP | Carbon Fiber Widebody Kit | $65,000 | 1.3L Rotary TurboCharger | Carbon\'s Shadow',
    },
    {
      id: 'rx7-fc',
      imageSrc: 'https://www.fastcar.co.uk/wp-content/uploads/sites/2/Modified-FC-RX-7-1-1.jpg',
      altText: 'Mazda RX-7 FC',
      title: 'Mazda RX-7 FC',
      details: '1989 | 480 HP | Stainless Steel | $99,890 | 1.3L Rotary | Oxford White | 11,754 mi.',
    },
    {
      id: 'wrx-bugeye',
      imageSrc: 'https://uploads.builtforbackroads.com/uploads/2024/01/2024.01.29-SUBARU-BUGEYE-WRX-2002_1.jpg',
      altText: 'SUBARU BUGEYE WRX',
      title: 'SUBARU BUGEYE WRX',
      details: '2002 | 600 HP | Aluminum Chassis | $66,000 | 2.5L Turbocharger | Ocean Blue | 36,000 mi.',
    },
    {
      id: 'gtr-r32',
      imageSrc: 'https://jdmsupply.com/storage/images/vehicle/614/GvSD77l13VTx7Vc4vyTsOH6w2jeNjDcRtcM8npKj_1214x854.webp',
      altText: 'Nissan GTR R32 V Spec',
      title: 'Nissan GTR R32 V Spec',
      details: '1992 | 597 HP | Aluminum Chassis | $88,000 | 2.6L Inline 6 Turbocharger | Pearly White | 621 mi.',
    },
    {
      id: 'gtr-r35',
      imageSrc: 'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/59339d5e07287c702e69307de910cceaa69c1d04/photos/36MjBE4P-azdF-N8EMz-(edit).jpg?t=165169539877',
      altText: 'Nissan GTR R35 Nismo',
      title: 'Nissan GTR R35 Nismo',
      details: '2017 | 900 HP | Aluminum Chassis | $100,435 | 3.8L Twin Turbocharger | Phantom Black | 8,046 mi.',
    },
    {
      id: 'evo-ix',
      imageSrc: 'https://images.collectingcars.com/059561/bccdeb22-7cf9-4177-bbc5-aca7c93957de.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85',
      altText: 'Mitsubishi EVO Lancer IX',
      title: 'Mitsubishi EVO Lancer IX',
      details: '2006 | 660 HP | Stainless Steel | $50,000 | 2.0L Turbocharger | Arctic Blue | 11,754 mi.',
    },
    {
      id: 'supra-mk5',
      imageSrc: 'https://carfax-img.vast.com/carfax/v2/2974964957489613989/1/1024x768',
      altText: 'Toyota Supra MK5 Premium',
      title: 'Toyota Supra MK5 Premium',
      details: '2022 | 703 HP | Stainless Steel | $71,500 | 3.0L Turbocharger | Silver Bullet | 2,320 mi.',
    },
  ];

  return (
    <div className="car-grid">
      {jdmCars.map((car, index) => (
        <CarCard
          key={index}
          id={car.id}
          imageSrc={car.imageSrc}
          altText={car.altText}
          title={car.title}
          details={car.details}
        />
      ))}
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add logic to handle email submission
  };

  return (
    <footer>
      <form className="cta-form" onSubmit={handleEmailSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe and Save 5%</button>
      </form>
      <p>&copy; 2024 RevXtreme. All rights reserved.</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="jdm" id="inventory">
        <h2>JDM Collection</h2>
        <JDMCarGrid />
      </section>
      <Footer />
    </div>
  );
};

export default App;

