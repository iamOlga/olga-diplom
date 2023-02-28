import React from 'react';
import './dist/Banner.css';
import content_planet from './../../Images/banner_info.png';
import Button from './../../Button/Button';

import { Canvas } from '@react-three/fiber';
import Planet from './Planet';
import { Suspense } from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <Suspense fallback={null}>
                <Canvas>
                    <pointLight position={[15,20,10]}/>
                    <Planet/>
                </Canvas>
            </Suspense>

            <div className="banner__content">
                <div className="banner__content__info">
                    <p className="banner_title">Добро пожаловать <br/>в Солнечную систему</p>
                    <Button value="Отправиться в космос" isrow="row"/>
                </div>
                <img className="banner__content_planet" src={content_planet} />
            </div>
        </div>
    )
}

export default Banner;