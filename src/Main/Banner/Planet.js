import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import moon_bg from './moon-map.jpg';


export default function Planet(texture) {
    const ref = useRef();
    const [moon] = useLoader (TextureLoader, [moon_bg])

    useFrame(() => {
        ref.current.rotation.x +=0.001;
        ref.current.rotation.y +=0.001;
    }, [])

  return (
    <mesh position={[-0.5,0,0]} ref={ref}>
        <sphereGeometry args={[3, 70, 70]}/>
        <meshStandardMaterial map={moon}/>
    </mesh>
  )
}
