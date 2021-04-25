import React from 'react';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/navbar.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { NavLink} from 'react-router-dom';
//logo
import logo from './assets/images/DSC Light.png';

const Navbar=()=>{
return(
    <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-brand" to="/"><img src={logo} alt="dsc_logo" className="dsclogo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item ">
        <NavLink className="nav-link active" to="/about">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/team">Team</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/events">Events</NavLink>
      </li>
      <li className="nav-item events-link">
        <NavLink className="nav-link " to="/covihack">CoviHack'21</NavLink>
      </li>
    </ul>
  </div>
</nav>
);
}
export default Navbar;