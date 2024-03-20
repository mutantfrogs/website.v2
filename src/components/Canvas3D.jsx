import {Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import React from 'react'

function Mesh3D(){

    const meshRef = React.useRef();
    const scale = 1.5;

    //function to animate mesh
    useFrame(() => {
        if (!meshRef.current) {
        return;
        }

    });

    return(
        <mesh ref={meshRef} scale={[scale, scale, scale]}>
            <boxGeometry args={[2,3,0.25]} />
            <meshStandardMaterial/>
        </mesh>
    )
}

export default function Canvas3D(){
    return(
        <div>
            <Canvas style={{ width: '50vw', height: '60vh'}} orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[10, 10, 10]} /> 
                <Mesh3D/>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}