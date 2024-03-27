import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import "./footer.css"
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">glossaire</a></li>
             <li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Help</h4>
  	 			<ul>
           <li><a href="#">chatbot</a></li>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">assistance</a></li>
  	 				<li><a href="#">contacts</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>services</h4>
  	 			<ul>
  	 				<li><a href="#">international&roaming</a></li>
  	 				<li><a href="#">cyber securité</a></li>
  	 				<li><a href="#">agence commercial</a></li>
  	 				<li><a href="#">E-rsli</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>rejoignez-nous sur:</h4>
  	 			<div class="social-links">
  	 				<a href="#"><FaFacebookF /></a>
  	 				<a href="#"><FaXTwitter /></a>
  	 				<a href="#"><TiSocialYoutube/></a>
  	 				<a href="#"><AiFillInstagram/></a>
  	 			</div>
          <a href="#"><img src="/src/img/mobilis.svg" alt="" /></a>
          
          
  	 		</div>
  	 	</div>
       
  	 </div>
     <div className="copy">
  <p>&copy; 2024, All Rights Reserved BY ATM-MOBILIS</p>
  </div>
  </footer>
  
    </div>
  )
}

export default Footer
