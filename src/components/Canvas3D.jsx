import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import white8x8 from '../assets/white8x8.png';
import face8x8 from '../assets/face8x8.png';
import qr from '../assets/qr.png';

function Mesh3D() {
  const meshRef = useRef();
  const scale = 1.5;
  const textureRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //load textures
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const textures = [
      white8x8, //right
      white8x8, //left
      white8x8, //top
      white8x8, //bottom
      face8x8, //front
      qr, //back
    ];

    textureRef.current = textures.map((texturePath) => {
      const texture = loader.load(texturePath);
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      return new THREE.MeshStandardMaterial({ map: texture });
    });

    if (meshRef.current) {
      meshRef.current.material = textureRef.current;
    }
  }, []);

  //handle mouse move
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  //function to animate cube
  useFrame(() => {
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
    <div>
      <Canvas
        style={{ width: '32vw', height: '32vh', marginLeft: 'auto', marginRight: 'auto' }}
        orthographic
        camera={{ zoom: 100, position: [0, 0, 100] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[10, 10, 10]} />
        <Mesh3D />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
