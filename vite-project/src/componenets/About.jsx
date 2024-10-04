import '../components_styles/Homepage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div>
      {/* About Section with inline tailwind styling. First paragraph */}
      <section className="About" id="About" style={{ marginBottom: '6%' }}>
        <div className="About-content">
          <h1>Our Tradition</h1>
        </div>
        <div className="Section-1">
          <img
            src="https://media0.giphy.com/media/l2A3N9ohgDPgoVKQJ7/200.webp?cid=ecf05e47wlfpkqwxjlgimn0rs51r1h1d3b2hkib7xhx3lkd2&ep=v1_gifs_search&rid=200.webp&ct=g"
            alt="porsche racing"
            style={{ marginLeft: '10px', marginTop: '110px' }}
          />
          <h2>The What?</h2>
          <h2 style={{ marginLeft: '500px', marginTop: '120px' }}></h2>
          
          <p1 style={{
            fontSize: '17px',
            fontFamily: 'Courier New',
            paddingLeft: '30px',
            marginTop: '60px',
            align: 'left'
          }}>
         You all know those vehicles that wake up the entire neighborhood? Perfect. Those are the only vehicles we have for sale. 
         Welcome to RevXtreme, where we don't just push the envelope – we shred it with a supercharged exhaust note.
         Picture a world where the roar of a finely-tuned engine isn't just a sound, but a call to adventure. 
         At RevXtreme, we're not just selling modified vehicles; we're igniting a revolution in the automotive market. 
         For too long, true car enthusiasts have been left in the dust, searching fruitlessly for readily available high-performance machines that speak to their souls – and shake their neighbors' windows. 
         We saw this void, felt the frustration of our global community, and decided it was time to shift gears. RevXtreme is here to bridge that gap, to bring the pulse-pounding,
         earth-shaking excitement of modified vehicles to every passionate driver who's ever dreamed of pushing the limits and turning heads.</p1>
        </div>
      </section>

{/* About Section with inline tailwind styling. Second paragraph */}
      <section className="About" id="About" style={{ marginBottom: '6%' }}>
        <div className="About-content">
        </div>
        <div className="Section-1">
          <img
            src="https://media4.giphy.com/media/rfyhcSaiRsaha/100.webp?cid=790b7611nhgqdh12mgofeszo9h11wgh8773x4ixtfp9tu907&ep=v1_gifs_search&rid=100.webp&ct=g"
            alt="Bmw drinfting"
            style={{ marginLeft: '45px', marginTop: '200px', width: '300px', height: '275px',width: '225px' }}
          />
          <h2>The Why</h2>
          <h2 style={{ marginLeft: '500px', marginTop: '120px' }}></h2>
          <p style={{
            fontSize: '17px',
            fontFamily: 'Courier New',
            paddingLeft: '85px',
            marginTop: '60px'
          }}>
         Our story begins with the rhythmic tick of a cooling engine, the lingering scent of high-octane fuel, 
         and the echoes of that sweet, window-rattling idle. As a child, I was fortunate enough to be surrounded by mentors who saw cars not just as machines,
         but as canvases for self-expression – and mobile sound systems that could rival any concert.
        My uncles were the artists, their tools were wrenches and timing lights, and their medium was pure, unbridled horsepower. 
        They taught me that every bolt, every wire, every carefully calibrated adjustment was a brushstroke in creating a masterpiece of engineering that could be both seen and heard from blocks away.
       But it was my mother who truly ignited the spark. She placed my hands on a stick shift and taught me the dance of clutch and gear. 
       In that moment, as I felt the car respond to my touch, as I heard the engine sing in perfect harmony with my actions, I knew I had found my calling 
       – to create machines that would make the earth tremble and hearts race.
          </p>
        </div>
      </section>

    {/* About Section with inline tailwind styling. 3rd paragraph */}
      <section className="About" id="About" style={{ marginBottom: '6%' }}>
        <div className="About-content">
          
        </div>
        <div className="Section-1">
          <img
            src="https://media0.giphy.com/media/l2A3N9ohgDPgoVKQJ7/200.webp?cid=ecf05e47wlfpkqwxjlgimn0rs51r1h1d3b2hkib7xhx3lkd2&ep=v1_gifs_search&rid=200.webp&ct=g"
            alt="porsche drinfting"
            style={{ marginLeft: '65px', marginTop: '200px'
            
             }}
          />
          <h2> The How</h2>
          <h2 style={{ marginLeft: '500px', marginTop: '120px' }}></h2>
          <p style={{
            fontSize: '17px',
            fontFamily: 'Courier New',
            paddingLeft: '125px',
            marginTop: '60px'
          }}>
            Today, RevXtreme stands as a testament to automotive passion and auditory dominance. We're not just a company; we're a movement. 
            Our mission is to create a community where every engine rev echoes the heartbeat of fellow enthusiasts. 
            We're here to prove that the joy of driving is a thunderous vision of the future. When you join RevXtreme, you're claiming your place in a world where speed meets artistry and engineering meets emotion.
             This is more than a business; it's a promise to every driver who's ever wanted to answer the call of the open road with a roar that shakes the asphalt. At RevXtreme, we're revolutionizing what it means to drive
              – and be heard doing it. So, fasten your seatbelts and maybe invest in some earplugs. The journey is about to begin, and trust me, it's going to be one hell of a loud, exhilarating ride.
          </p>
        </div>
      </section>

      {/* Footer at the bottom. */}
      <footer style={{ backgroundColor: 'gray' }}>
        <form className="cta-form">
          <input type="email" placeholder="Enter Email" required />
          <button type="submit">Subscribe and Save 5%</button>
        </form>
        <h4>&copy; 2024 RevXtreme. All rights reserved.</h4>
      </footer>
    </div>
  );
};

export default About;