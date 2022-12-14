import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import logo from  "../images/logo1.jpg";

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">
                    <img src={logo} alt="logo" width='50' height='50' className="logo"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                    </li> */}
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Cars">Cars</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Typeofcar">Cars Gener</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                    
                    
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                
                </div>
            </div>
            </nav>
    </div>
  )
}
