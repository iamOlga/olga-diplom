import React from 'react'
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';
import astronaut from './../../Images/astronaut.png';
import './dist/Astronaut.css'

import { Canvas } from '@react-three/fiber';
import Earth from './Earth';
import { Suspense } from 'react';

const Astronaut = () => {
  return (
    <div className="astronaut__container">
            <div className="container__info">
                <p className="text">Ощутите незабываемые эмоции.<br/>Совершите полет в настоящей невесомости!</p>
                <div className="img_container">
                  <img src={astronaut}/>
                </div>
                <Link to="/booking"><Button value="Лететь" isrow="norow"/></Link>
            </div>
            
            <div className="planet__bg">
              <Suspense fallback={null}>
                <Canvas>
                    <pointLight position={[0,50,-20]}/>
                    <Earth/>
                </Canvas>
              </Suspense>
            </div>
            
      {/* <img className="planet__bg" src={planet_bg}/> */}
     {/*  <div className="astronaut__bg"></div> */}
    </div>
  )
}

export default Astronaut;

