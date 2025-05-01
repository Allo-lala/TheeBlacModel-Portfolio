import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Environment, MeshDistortMaterial } from '@react-three/drei';
import { Group, Mesh } from 'three';

const FONT_URL = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';

interface ModelProps {
  text: string;
}

const Model: React.FC<ModelProps> = ({ text }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font={FONT_URL}
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <MeshDistortMaterial 
          color="#ffffff" 
          attach="material" 
          distort={0.2} 
          speed={1.5} 
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </Text3D>
    </Center>
  );
};

const AbstractShapes = () => {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(i * 0.5) * 3, 
            Math.cos(i * 0.3) * 3, 
            Math.sin(i * 0.4) * 3
          ]}
        >
          <dodecahedronGeometry args={[0.3, 0]} />
          <MeshDistortMaterial 
            color="#ffffff" 
            attach="material" 
            distort={0.2} 
            speed={1} 
            transparent
            opacity={0.5}
            envMapIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

interface ModelCanvasProps {
  text: string;
}

const ModelCanvas: React.FC<ModelCanvasProps> = ({ text }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="studio" />
      <Model text={text} />
      <AbstractShapes />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ModelCanvas;