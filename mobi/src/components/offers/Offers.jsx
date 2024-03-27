import React from 'react'
import "./offers.css"
import { SiYoutubegaming } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiMusicbrainz } from "react-icons/si";
const Offers = () => {
  return (
    <div className='offers'>
      <div className="cards">
    <div class="card">
  <div class="card-details">
  <div className="ico"><FaCreditCard /></div>
    <p class="text-title">rechargement en-ligne</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  
</div>
<div class="card">
  <div class="card-details">
  <div className="ico"><FaMapLocationDot /></div>
    <p class="text-title">localisation agence</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  
</div>
<div class="card">
  <div class="card-details">
  <div className="ico"><SiYoutubegaming /></div>
    <p class="text-title">mobistore</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  
</div>
<div class="card">
  <div class="card-details">
    <div className="ico"><SiMusicbrainz /></div>
    <p class="text-title">anghami</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  
</div>
    </div>
    </div>
  )
}

export default Offers
