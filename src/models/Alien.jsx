import {useRef, useEffect} from 'react';

import alienScene from '../assets/3d/alien.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Alien = () => {
    const {scene, animations} = useGLTF(alienScene);
    const alienRef = useRef();
    const {actions} = useAnimations(animations,alienRef);

    useEffect(() =>{
      actions['Armature|ArmatureAction.001'].play();
    },[])

    useFrame(({clock,camera})=>{
      //Update the y position simulate the flight moving in sin wave
      alienRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      if (alienRef.current.position.x > camera.position.x + 10) {
        alienRef.current.rotation.y = Math.PI;
      }else if (alienRef.current.position.x < camera.position.x -10) {
        alienRef.current.rotation.y = 0;
      }

      if (alienRef.current.rotation.y === 0) {
          alienRef.current.position.x += 0.01;
          alienRef.current.position.z -= 0.01;
      }else{
          alienRef.current.position.x -= 0.01;
          alienRef.current.position.z += 0.01;
      }
    })

  return (
    <mesh position={[-5,2,1]} scale ={[0.003,0.003,0.003]} ref={alienRef}>
        <primitive object ={scene}/>
    </mesh>
  )
}

export default Alien