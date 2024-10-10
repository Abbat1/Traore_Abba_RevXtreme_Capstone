import React from "react"; // Import React library
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation

// Navbar component for navigation
function Navbar({ setUser, user }) {
  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Set user state to null
  };

  return (
    // Fragment to wrap multiple elements
    <>
      {/* Header section */}
      <header>
        {/* Navigation container */}
        <nav className="container">
          {/* Logo section */}
          <div className="logo">RevXtreme</div>
          {/* Navigation links */}
          <ul>
            {/* Link to Home page */}
            <li><Link to="/">Home</Link></li>
            {/* Dropdown menu for Inventory */}
            <li className="dropdown">
              <Link to="/Inventory">Inventory</Link>
              <div className="dropdown-content">
                {/* Link to American Muscle cars */}
                <Link to="/AmericanMuscle">AmericanMuscle</Link>
                {/* Link to German cars */}
                <Link to="/German">German</Link>
                {/* Link to JDM cars */}
                <Link to="/Jdm">JDM</Link>
              </div>
            </li>
            {/* Link to About page */}
            <li><Link to="/About">About</Link></li>
            {/* Link to Contact Us page */}
            <li><Link to="/ContactUs">Contact Us</Link></li>
            {/* Conditional rendering based on user state */}
            {
              user ? (
                // If user is logged in, show Logout link
                <li><Link onClick={handleLogout}>Logout</Link></li>
              ) : (
                // If user is not logged in, show Signup and Login links
                <>
                  <li><Link to="/Signup">Signup</Link></li>
                  <li><Link to="/Login">Login</Link></li>
                </>
              )
            }
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;