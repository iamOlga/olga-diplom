import React from 'react'
import './../Style/dist/Main.css';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Modal from './Modal/Modal';
import Rocket_section from './Rocket/Rocket';
import Slider from './Slider/Slider';
import Astronaut_section from './Astronaut/Astronaut';
import Map from './Map/Map';

import { useState } from 'react';

function Home() {
  /* const [modalActive, setModalActive] = useState(false); */

  return (
    <div>
      <section className="banner__container">
        <Banner/>
      </section>

      <section className="cards__container" >
        <Card /* setModalActive={setModalActive}  */title={"Долины Маринер"} value={"Марс"} class__card="card__container card__1"/>
        <Card title={"Океан Бурь"} value={"Луна"} class__card="card__container card__2"/>
        <Card title={"Космическая станция"} value={"Орбита Земли"} class__card="card__container card__3"/>
      </section>

      <section>
        <Rocket_section/>
      </section>

      <section className="slider_section">
        <Slider/>
      </section>

      <section className="astronaut_section">
        <Astronaut_section/>
      </section>

      <section className="map_section">
        <Map/>
      </section>

      
    </div>
  )
}

export default Home;