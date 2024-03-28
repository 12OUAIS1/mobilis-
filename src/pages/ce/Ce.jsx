import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import Sidee from '../../components/sidebaree/Sidee'
const Ce = () => {
  return (
    <div>
      <Navbar/>
      <div className="econtainer">
        <h1>Découvrez ici les produits et services pour les particuliers de Mobilis</h1>
        <p>

Ils ont été conçus pour vous proposer des offres pour appels et navigation sur Internet diversifiés et innovants, destinés à s'adapter à vos besoins de consommation, avec une tarification simplifiée et transparente.

Mobilis vous simplifie la vie et vous permet de recharger votre compte mobile et/ou Internet à distance avec « Arsselli » et « Sellekni »,

Découvrez encore de nombreux autres services conçus pour vous accompagner et faciliter votre quotidien.</p>
      <Sidee/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Ce

