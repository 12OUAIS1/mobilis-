import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./sgform.css";

const Sgform = () => {
  return (
    <div className='sg'>
      <form className="form">
        <p className="title">Sign up</p>
<input placeholder="phone" type="text" className="email"/>
<input placeholder="E-mail" type="text" className="email"/>
<input placeholder="password" type="password" className="email"/>
<input placeholder="confirm password" type="text" className="email"/>
        <p className="text">Already have an account? <Link to="/">login!</Link></p>
        <div className="button_row">
          <Link to="/login">  <button className="button secondary_button">Back</button> </Link>
          <button className="button primary_button">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Sgform;
