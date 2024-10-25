import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import white8x8 from '../assets/white8x8.png';
import face8x8 from '../assets/face8x8.png';
import face16x8 from '../assets/face16x8.png';
//import qr from '../assets/qr.png';
import qr from '../assets/tempQR.png';


function Mesh3D() {
  const meshRef = useRef();
  const scale = 1.5;
  const textureRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // animation variables
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameDurations = [4000, 200];
  const frameDiviations = [2000, 50]
  const frameCount = 4;
  const frameWidth = 1 / frameCount;

  //load textures
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const textures = [
      white8x8, //right
      white8x8, //left
      white8x8, //top
      white8x8, //bottom
      face16x8, //front
      qr, //back
    ];

    textureRef.current = textures.map((texturePath, index) => {
    const texture = loader.load(texturePath);
      
      //applies spritesheet rules to front face
      if (index === 4) {
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.set(frameWidth, 1);
      } else {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
      }
  
      return new THREE.MeshStandardMaterial({ map: texture });
    });

    if (meshRef.current) {
      meshRef.current.material = textureRef.current;
      meshRef.current.material.needsUpdate = true;
    }
  }, []);

  //handle mouse move
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  //adds event listener to mouse movement for head tracking
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  //face animation logic
  useEffect(() => {
    //change frames
    const updateFrame = () => {
      setCurrentFrame((prevFrame) => {
        switch (prevFrame) {
          case 0:
            return 1;
          case 1:
            return 0;
        }
      });
    };

    //wait different times depending on current frame
    const timeoutId = setTimeout(() => {
      updateFrame();
    }, (calculateTimeout()));

    //cleanup
    return () => clearTimeout(timeoutId);
  }, [currentFrame]);

  const calculateTimeout = () => {
    const operatorStatus = Math.random();

    if(operatorStatus > 0.5){
      console.log(frameDurations[currentFrame] + frameDiviations[currentFrame]);
      return(frameDurations[currentFrame] + frameDiviations[currentFrame]);
    } 
    else {
      console.log(frameDurations[currentFrame] - frameDiviations[currentFrame]);
      return(frameDurations[currentFrame] - frameDiviations[currentFrame]);
    }
  }
  
  //function to animate cube
  useFrame(() => {
    //updates face with current frame
    const meshFace = meshRef.current.material[4];
    const offsetX = currentFrame * frameWidth;
    meshFace.map.offset.x = offsetX;
    meshFace.needsUpdate = true;

    //head follows mouse
    if (meshRef.current) {
      meshRef.current.rotation.x = -mousePosition.y * 0.5;
      meshRef.current.rotation.y = mousePosition.x * 0.5; 
    }
  });

  return (
    <mesh ref={meshRef} scale={[scale, scale, scale]}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

export default function Canvas3D() {
  return (
          <div className='flexContainerColumn'>
            <Canvas style={{ width: '275px', height: '275px'}} orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
              <ambientLight intensity={0.5} />
              <directionalLight color="white" position={[10, 10, 10]} />
              <Mesh3D />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
      </div>
  );
}
