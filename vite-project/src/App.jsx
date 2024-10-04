import JDM from "./componenets/JDM"
import AmericanMuscle from "./componenets/AmericanMuscle"
import German from "./componenets/German"
import Homepage from "./componenets/Homepage"
import About from "./componenets/About"
import Inventory from "./componenets/inventory"
import ContactUs from "./componenets/ContactUs"
import Cart from "./componenets/Cart"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./componenets/Navbar"
import ItemSingleView from "./componenets/ItemSingleView"
import './components_styles/Main.css';
import Login from "./componenets/Login"
import Signup from "./componenets/Signup"
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
    <Navbar setUser={setUser} user={user}/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Inventory" element={<Inventory/>}/>
      <Route path="/AmericanMuscle" element={<AmericanMuscle/>}/>
      <Route path="/German" element={<German/>}/>
      <Route path="/JDM" element={<JDM/>}/>      
      <Route path="/About" element={<About/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/car/:id" element={<ItemSingleView/>}/>
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Login" element={<Login setUser
      ={setUser}/>} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </>
  )   
}

export default App
