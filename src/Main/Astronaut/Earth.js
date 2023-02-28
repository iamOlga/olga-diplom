import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import earth_bg from './earth-bg.jpg';


export default function Planet(texture) {
    const ref = useRef();
    const [earth] = useLoader (TextureLoader, [earth_bg])

    useFrame(() => {
        ref.current.rotation.z +=0.0005;
/*         ref.current.rotation.y +=0.001; */
    }, [])

  return (
    <mesh position={[0,0,0]} ref={ref}>
        <sphereGeometry args={[3, 70, 70]}/>
        <meshStandardMaterial map={earth}/>
    </mesh>
  )
}
