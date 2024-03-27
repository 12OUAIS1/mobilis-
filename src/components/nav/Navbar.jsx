import React from 'react'; // Don't forget to import React if you're using JSX
import "./navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <a href="" className="lgo"><img className="logo" src="/src/img/mobilis.svg" alt="" /></a>       
        <div className="navitem">
            <button className="navbtn">offre</button>
            <button className="navbtn">espase client</button>
            <button className="navbtn">espase press</button>
            <button className="navbtn">help</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
