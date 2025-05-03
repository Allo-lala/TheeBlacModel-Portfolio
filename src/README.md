i here is a working code, i want every letter to be having a single better fall, I can even see the sparkles and camera fly. import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Environment, Center, OrbitControls, Sparkles } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

const FONT_URL = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';

const FallingLetter = ({
  char,
  index,
  total,
  loopDelay = 6,
}: {
  char: string;
  index: number;
  total: number;
  loopDelay?: number;
}) => {
  const ref = useRef<Mesh>(null);
  const [y, setY] = useState(5);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const dropTimeout = setTimeout(() => {
      const dropInterval = setInterval(() => {
        setY((prev) => {
          if (prev <= 0) {
            clearInterval(dropInterval);
            setLanded(true);
            return 0;
          }
          return prev - 0.2;
        });
      }, 16);
    }, index * 300); // delay per letter

    return () => {
      clearInterval(dropTimeout);
    };
  }, [index]);

  // Optional loop: reset after full word has landed
  useEffect(() => {
    if (!landed) return;

    const reset = setTimeout(() => {
      setY(5);
      setLanded(false);
    }, loopDelay * 1000); // Wait 6s to restart

    return () => clearTimeout(reset);
  }, [landed, loopDelay]);

  useFrame((state) => {
    if (ref.current && landed) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(t + index) * 0.05;
    }
  });

  return (
    <Text3D
      ref={ref}
      font={FONT_URL}
      size={0.6}
      height={0.1}
      bevelEnabled
      bevelThickness={0.01}
      bevelSize={0.01}
      bevelSegments={2}
      position={[index - total / 2, y, 0]}
    >
      {char}
      <meshStandardMaterial color="white" />
    </Text3D>
  );
};

const FallingText = ({ text }: { text: string }) => {
  const chars = text.split('');
  return (
    <Center>
      {chars.map((char, i) => (
        <FallingLetter key={i} char={char} index={i} total={chars.length} />
      ))}
    </Center>
  );
};

const FloatingParticles = () => (
  <Sparkles
    count={80}
    speed={0.4}
    scale={5}
    size={1.2}
    color="white"
    opacity={0.7}
  />
);

const ModelCanvas: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <FloatingParticles />
        <FallingText text={text} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ModelCanvas; the word should rotate, let the letters keep falling and after the last one there should be a delay and then repeat, you should also find a better font