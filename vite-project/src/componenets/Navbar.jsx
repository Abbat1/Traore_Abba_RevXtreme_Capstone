import React from "react"
import { Link } from "react-router-dom"



function Navbar({setUser, user}) {
 

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }
    return (
        <> <header>
        <nav className="container">
          <div className="logo">RevXtreme</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/Inventory">Inventory</Link>
              <div className="dropdown-content">
                <Link to="/AmericanMuscle">AmericanMuscle</Link>
                <Link to="/German">German</Link>
                <Link to="/Jdm">JDM</Link>
              </div>
            </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            {
              user ? (
                <li> <Link onClick={handleLogout}>Logout</Link></li>
              ) : (
                <>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Login">Login</Link></li>
                </>

              )
            }
            <Link to="/cart" className="mr-4 hover:text-keppel">
            🛒 Cart
          </Link>
            
          </ul>
        </nav>
      </header></>
    )}

    export default Navbar;