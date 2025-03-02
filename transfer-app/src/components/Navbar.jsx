import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExchangeAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.webp';
import AnimatedSection from './AnimatedSection';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
       <img src={logo} className="logo" alt="logo"  /> 
      CA$H<span className="logo-span">MEEE</span>
   

      
      </Link>
      
    
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <span>&#10005;</span> 
        ) : (
          <span>&#9776;</span> 
        )}
      </div>
      
      

<ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li><Link to="/" onClick={toggleMenu}> <FaHome style={{ marginRight: "8px" }} />Home</Link></li>
  <li><Link to="/transfer" onClick={toggleMenu}> <FaExchangeAlt style={{ marginRight: "8px" }} />Transfer</Link></li> <br/>
  <li className="spacer"></li>
  <AnimatedSection>
  <li><Link to="/signin" onClick={toggleMenu}><FaSignInAlt style={{ marginRight: "8px", marginBottom: "5px"}} />Sign In</Link></li>
</AnimatedSection>
<AnimatedSection>
  <li><Link to="/signup" onClick={toggleMenu}><FaUserPlus style={{ marginRight: "8px" }} />Sign Up</Link></li>
</AnimatedSection>
</ul>


    </nav>
  );
};

export default Navbar;












