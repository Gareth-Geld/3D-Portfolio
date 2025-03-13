import React, { useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Earth from '../models/Earth'
import Sky  from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import Rocket from '../models/Rocket'
import Space from '../models/Space'
import Alien from '../models/Alien'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () =>{
    let screenScale =null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0];

    if(window.innerWidth < 768) {
        screenScale = [0.9,0.9,0.9];
    }else{
        screenScale = [1,1,1];
    }

    return [screenScale,screenPosition,rotation]
  }

  const adjustEarthForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -20];
    let rotation = [0, -1.9, 0];

    if (window.innerWidth < 768) {
      screenScale = [8.6, 8.6, 8.6];
    } else {
      screenScale = [15, 15, 15];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () =>{
    let screenScale,screenPosition;

    if(window.innerWidth < 768) {
        screenScale = [1.5,1.5,1.5];
        screenPosition = [0,-1.5,0];
    }else{
        screenScale = [3,3,3];
        screenPosition = [0,-4,-4];
    }

    return [screenScale,screenPosition]
  }

  const adjustRocketForScreenSize = () =>{
    let screenScale,screenPosition;

    if(window.innerWidth < 768) {
        screenScale = [0.1,0.1,0.1];
        screenPosition = [0,0,-3];
    }else{
        screenScale = [0.15,0.15,0.15];
        screenPosition = [0,0,-3];
    }

    return [screenScale,screenPosition]
  }

  const adjustSpaceForScreenSize = () =>{
    let screenScale,screenPosition;

    if(window.innerWidth < 768) {
        screenScale = [5,5,5];
        screenPosition = [0,-1.5,0];
    }else{
        screenScale = [10,10,10];
        screenPosition = [0,-23,0];
    }

    return [screenScale,screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [EarthScale, EarthPosition, EarthRotation] = adjustEarthForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [RocketScale, RocketPosition] = adjustRocketForScreenSize();
  const [SpaceScale, SpacePosition] = adjustSpaceForScreenSize();

  return (
    <section className='w-full h-screen relative bg-black'>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage = {currentStage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far:1000}}>
        <Suspense fullback = {<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1}/>
          <Space
            scale={SpaceScale}
            position={SpacePosition}
            isRotating = {isRotating}
          />
          {/* <Sky
          isRotating = {isRotating}
          /> */}
          {/* <Bird/> */}
          <Alien/>
          <Rocket
          isRotating={isRotating}
          scale = {RocketScale}
          position= {RocketPosition}
          rotation = {[-0.2,6.4,4.8]}
          />
          {/* <Plane 
            isRotating={isRotating}
            scale = {planeScale}
            position= {planePosition}
            rotation = {[0,20,0]}
          /> */}
          {/* <Island
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          /> */}
          <Earth
          position ={EarthPosition}
          scale = {EarthScale}
          rotation = {EarthRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home