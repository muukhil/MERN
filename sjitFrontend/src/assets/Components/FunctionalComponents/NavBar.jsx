import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const Navbar = () => {
  const [dropdown, showDropdown] = useState(false);
  const [dropdown1, showDropdown1] = useState(false);

  return (
    <header>
      <nav>
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/about" className="link">About</Link></li>
        <li><Link to="/gallery" className="link">Gallery</Link></li>

        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(true)}
          onMouseLeave={() => showDropdown(false)}
        >
          <span className="link">Hooks</span>
          {dropdown && (
            <ol className="dropdown-list">
              <li><Link to="/use-state" className="dropdown-link">useState</Link></li>
              <li><Link to="/use-effect" className="dropdown-link">useEffect</Link></li>
              <li><Link to="/use-effects-api" className="dropdown-link">useEffectWithAPI</Link></li>
              <li><Link to="/use-ref" className="dropdown-link">useRef</Link></li>
              <li><Link to="/use-memo" className="dropdown-link">useMemo</Link></li>
            </ol>
          )}
        </div>

        <li><Link to="/hoc" className="link">HoC</Link></li>

        <div
          className="dropdown"
          onMouseEnter={() => showDropdown1(true)}
          onMouseLeave={() => showDropdown1(false)}
        >
          <span className="link">Memoization</span>
          {dropdown1 && (
            <ol className="dropdown-list">
              <li><Link to="/memo" className="dropdown-link">Memo</Link></li>
              <li><Link to="/lazy" className="dropdown-link">Lazy Component</Link></li>
            </ol>
          )}
        </div>

        <li><Link to="/res" className="link">ContextAPI</Link></li>
        <li><Link to="/contact" className="link">Contact</Link></li>
        <li><Link to="/login" className="link">Login</Link></li>
      </nav>
    </header>
  );
};

export default Navbar;
