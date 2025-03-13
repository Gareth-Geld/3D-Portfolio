import { useGLTF } from '@react-three/drei';
import React from 'react';
import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';

import SpaceScene from '../assets/3d/stars.glb';

const Space = ({isRotating, ...props}) => {
    const Space = useGLTF(SpaceScene);
    const SpaceRef = useRef();

    useFrame((_,delta) =>{
      if(isRotating){
        SpaceRef.current.rotation.y += 0.15 * delta
      }
    });
  return (
    <mesh {...props} ref={SpaceRef}>
        <primitive object={Space.scene}/>
    </mesh>
  )
}

export default Space