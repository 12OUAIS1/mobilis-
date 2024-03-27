import React from 'react'
import "./lgform.css"
import { Link } from 'react-router-dom';
const Lgform = () => {
  return (
    <div className='lg'>
       <form class="form">
  <p class="title">Sign in</p>
  <input placeholder="E-mail, phone, or Skype" type="text" class="email"/>
  <p class="text">No account?   <Link to="/signup"> Create one!</Link></p>
  <p class="text"><a>Can't access your account?</a></p>
  <div class="button_row">
  <Link to="/">  <button class="button secondary_button">Back</button> </Link>
    <button class="button primary_button">Next</button>
  </div>
</form>
    </div>
  )
}

export default Lgform
