import React from 'react'
import "./home.css"
import Navbar from '../../components/nav/Navbar'
import Homelg from '../../components/homelogin/Homelg'
import Footer from '../../components/footer/Footer'
import Offers from '../../components/offers/Offers'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Homelg/>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default Home
