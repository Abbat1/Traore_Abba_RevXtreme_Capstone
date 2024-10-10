import JDM from "./componenets/JDM"; // Import JDM component
import AmericanMuscle from "./componenets/AmericanMuscle"; // Import AmericanMuscle component
import German from "./componenets/German"; // Import German component
import Homepage from "./componenets/Homepage"; // Import Homepage component
import About from "./componenets/About"; // Import About component
import Inventory from "./componenets/Inventory"; // Import Inventory component
import ContactUs from "./componenets/ContactUs"; // Import ContactUs component
import Cart from "./componenets/Cart"; // Import Cart component
import {Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes from react-router-dom for routing
import Navbar from "./componenets/Navbar"; // Import Navbar component
import ItemSingleView from "./componenets/ItemSingleView"; // Import ItemSingleView component
import './components_styles/Main.css'; // Import main CSS styles
import Login from "./componenets/Login"; // Import Login component
import Signup from "./componenets/Signup"; // Import Signup component
import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React
import UpdateCar from "./componenets/UpdateCar";

// Main App component
function App() {
  // State to manage the current user
  const [user, setUser] = useState(null);

  // useEffect hook to set the user from localStorage when the component mounts
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user"))); // Parse and set the user from localStorage
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    // Fragment to wrap the returned elements
    <>
      {/* Navbar component with setUser and user props */}
      <Navbar setUser={setUser} user={user} />
      {/* Routes for different paths */}
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />
        {/* Route for Inventory */}
        <Route path="/Inventory" element={<Inventory />} />
        {/* Route for AmericanMuscle */}
        /*<Route path="/AmericanMuscle" element={<AmericanMuscle />} />
        {/* Route for German */}
        <Route path="/German" element={<German />} />
        {/* Route for JDM */}
        <Route path="/JDM" element={<JDM />} />
        {/* Route for About */}
        <Route path="/About" element={<About />} />
        {/* Route for ContactUs */}
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* Route for ItemSingleView with dynamic id */}
        <Route path="/car/:id" element={<ItemSingleView />} />
        {/* Route for Cart */}
        <Route path="/Cart" element={<Cart />} />
        {/* Route for Login with setUser prop */}
        <Route path="/Login" element={<Login setUser={setUser} />} />
        {/* Route for Signup */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UpdateProduct" element={<UpdateCar/>} />
      </Routes>
    </>
  );
}

export default App; // Export the App component as the default export