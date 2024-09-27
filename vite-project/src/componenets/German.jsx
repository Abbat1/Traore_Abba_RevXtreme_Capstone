import React, { useState } from 'react';

function CarCollection() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    // Add any email submission logic here
  };

  const cars = [
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
  ];

  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">RevXtreme</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="/inventory">Our Collection</a>
              <div className="dropdown-content">
                <a href="/AmericanMuscle">American Muscle</a>
                <a href="/german">German</a>
                <a href="/jdm">JDM</a>
              </div>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">News</a></li>
          </ul>
        </nav>
      </header>

      <section className="American-Muscle" id="inventory">
        <div className="car-grid">
          {cars.map((car, index) => (
            <div className="car-card" key={index}>
              <img src={car.img} alt={car.name} />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p>{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default CarCollection;

