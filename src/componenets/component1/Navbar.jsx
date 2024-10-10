import React from 'react'; // Import React

// Navbar component for displaying the navigation bar
export default function Navbar() {
  return (
    // Main container div for the component
    <div id="homebody">
      <header>
        {/* Navigation bar container */}
        <nav className="container">
          {/* Logo for the website */}
          <div className="logo">RevXtreme</div>
          {/* Unordered list for navigation links */}
          <ul>
            {/* List item for Home link */}
            <li><a href="/">Home</a></li>
            {/* List item for Our Collection link with dropdown */}
            <li className="dropdown">
              <a href="/inventory">Our Collection</a>
              {/* Dropdown content for different car collections */}
              <div className="dropdown-content">
                <a href="/AmericanMuscle">AmericanMuscle</a>
                <a href="/german">German</a>
                <a href="/jdm">JDM</a>
              </div>
            </li>
            {/* List item for About link */}
            <li><a href="/about">About</a></li>
            {/* List item for Contact Us link */}
            <li><a href="/Contact Us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
