
export default function Navbar(){

return(

<div id="homebody">
      <header>
        <nav className="container">
          <div className="logo">RevXtreme</div>
          <ul>
            <li><a>Home</a></li>
            <li className="dropdown">
              <a href="/inventory">Our Collection</a>
              <div className="dropdown-content">
                <a href="/AmericanMuscle">AmericanMuscle</a>
                <a href="/german">German</a>
                <a href="/jdm">JDM</a>
              </div>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/Contact Us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      </div>
)

}
