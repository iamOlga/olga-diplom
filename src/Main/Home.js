import React, {useEffect} from 'react'
import './../Style/dist/Main.css';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Modal from './Modal/Modal';
import Rocket_section from './Rocket/Rocket';
import Slider from './Slider/Slider';
import Astronaut_section from './Astronaut/Astronaut';
import Map from './Map/Map';

import { useState } from 'react';

import a1 from './Card/Images/bg_1.png'
import axios from "axios";

function Home() {
  /* const [modalActive, setModalActive] = useState(false); */
    const [tourData, setTourData] = useState([]);

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tours');
                setTourData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTourData();
    }, []);

  return (
    <div>
      <section className="banner__container">
        <Banner/>
      </section>

      <section className="cards__container" >
          {tourData.map((item) => (
              <Card title={item.name} value={item.planet} class__card={`card__container card__${item.id}`} img={item.image}/>
          ))}

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