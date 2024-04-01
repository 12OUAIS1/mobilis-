import React from 'react';
import { IoLogOut } from "react-icons/io5";
import './navbar.css'
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/"> <img className="logo" src="/src/img/mobilis.svg" alt="" /></Link>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className='nav-item'>
                <Link className='nav-link active btn-nav' to='/' aria-current="page"><button className="navbtn">offre</button></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active btn-nav' to='/' aria-current="page"><button className="navbtn">espase client</button></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active btn-nav' to='/signup' aria-current="page"><button className="navbtn">espase press</button></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active btn-nav' to='/about' aria-current="page"><button className="navbtn">help</button></Link>
              </li>
            
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
