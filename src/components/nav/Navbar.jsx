import React from 'react'; // Don't forget to import React if you're using JSX
import "./navbar.css"; // Import your CSS file
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <a href="" className="lgo"><img className="logo" src="/src/img/mobilis.svg" alt="" /></a>       
        <div className="navitem">
        <Link to="/login"> <button className="navbtn">offre</button></Link>
        <Link to="/espacec"> <button className="navbtn">espase client</button></Link>
        <Link to="/login"> <button className="navbtn">espase press</button></Link>
        <Link to="/login"> <button className="navbtn">help</button></Link>
           
            
            
        </div>
      </div>
    </div>
  );
}

export default Navbar;
