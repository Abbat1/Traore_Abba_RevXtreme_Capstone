import "../components_styles/About.css";

const About = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">RevXtreme</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#inventory">Our Collection</a>
              <div className="dropdown-content">
                <a href="#AmericanMuscle.html">American Muscle</a>
                <a href="#german.html">German</a>
                <a href="#jdm.html">JDM</a>
              </div>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">News</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section className="About" id="About" style={{ marginBottom: '6%' }}>
        <div className="About-content">
          <h1>Our Tradition</h1>
        </div>
        <div className="Section-1">
          <img
            src="https://media0.giphy.com/media/l2A3N9ohgDPgoVKQJ7/200.webp?cid=ecf05e47wlfpkqwxjlgimn0rs51r1h1d3b2hkib7xhx3lkd2&ep=v1_gifs_search&rid=200.webp&ct=g"
            alt="porsche racing"
            style={{ marginLeft: '20px', marginTop: '200px' }}
          />
          <p style={{
            fontSize: 'medium',
            fontFamily: 'Courier New',
            paddingLeft: '500px',
            marginTop: '60px'
          }}>
            Welcome to RevXtreme, your ultimate destination for high-performance modified sport vehicles. 
            Since our inception in 2010, we've been pushing the boundaries of automotive engineering, 
            transforming ordinary cars into extraordinary machines that deliver unparalleled thrills on and off the track.
          </p>
        </div>
      </section>

      <section className="About" id="About" style={{ marginBottom: '6%' }}>
        <div className="About-content">
          
        </div>
        <div className="Section-1">
          <img
            src="https://media0.giphy.com/media/l2A3N9ohgDPgoVKQJ7/200.webp?cid=ecf05e47wlfpkqwxjlgimn0rs51r1h1d3b2hkib7xhx3lkd2&ep=v1_gifs_search&rid=200.webp&ct=g"
            alt="porsche racing"
            style={{ marginLeft: '20px', marginTop: '200px', width: '300px' }}
          />
          <p style={{
            fontSize: 'medium',
            fontFamily: 'Courier New',
            paddingLeft: '500px',
            marginTop: '60px'
          }}>
            Our team of expert artisans and automotive enthusiasts work tirelessly to transform high-performance machines into stunning works of art, 
            blending cutting-edge technology with bespoke design. Whether you crave the thrill of the open road or the envy of your peers, 
            RevXtreme delivers an unparalleled driving experience.
          </p>
        </div>
      </section>

      {/* Repeatable Section (if needed) */}
      <section className="About" id="About" style={{ marginBottom: '6%' }}>
        <div className="About-content">
          
        </div>
        <div className="Section-1">
          <img
            src="https://media0.giphy.com/media/l2A3N9ohgDPgoVKQJ7/200.webp?cid=ecf05e47wlfpkqwxjlgimn0rs51r1h1d3b2hkib7xhx3lkd2&ep=v1_gifs_search&rid=200.webp&ct=g"
            alt="porsche racing"
            style={{ marginLeft: '20px', marginTop: '200px' }}
          />
          <p style={{
            fontSize: '20px',
            fontFamily: 'Courier New',
            paddingLeft: '500px',
            marginTop: '60px'
          }}>
            Welcome to RevXtreme, your ultimate destination for high-performance modified sport vehicles. 
            Since our inception in 2010, we've been pushing the boundaries of automotive engineering, 
            transforming ordinary cars into extraordinary machines that deliver unparalleled thrills on and off the track.
          </p>
        </div>
      </section>

      {/* Footer */}
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