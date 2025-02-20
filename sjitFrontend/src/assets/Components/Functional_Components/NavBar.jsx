import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css"
const Navbar = () => {
  var [val, showDropdown] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li
          onMouseEnter={()=> showDropdown(true)} 
          onMouseLeave={()=> showDropdown(false)}>  
          <span>Hooks</span>
            {val && (
              <div className="dropdown-link"> 
                <ol>
                  <li>
                    <Link to="/use-state">useState</Link>
                  </li>
                  <li>
                    <Link to="/use-effect">useEffect</Link>
                  </li>
                  <li>
                    <Link to="/UseEffectsAPI">useEffectAPI</Link>
                  </li>
                  <li>
                    <Link to="/UseRef">useRef</Link>
                  </li>
                </ol>
              </div>)}
          </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;