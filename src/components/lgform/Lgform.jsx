import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./lgform.css"; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { authActions } from '../../store';
const Lgform = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v1/login", inputs); // Assuming it's login endpoint, not signup
      sessionStorage.setItem("id", response.data.others._id);
      dispatch(authActions.login());
      navigate("/main");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className='lg'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Sign in</p>
        <input placeholder="Numero tel" type="text" name="number" className="email" onChange={handleChange} value={inputs.number} />
        <input placeholder="E-mail" type="text" name="email" className="email" onChange={handleChange} value={inputs.email} />
        <p className="text">No account? <Link to="/signup">Create one!</Link></p>
        <p className="text">Can't access your account?<a>contact-us</a></p>
        <div className="button_row">
          <Link to="/"> <button className="button secondary_button">Back</button> </Link>
          <button type="submit" className="button primary_button">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Lgform;
