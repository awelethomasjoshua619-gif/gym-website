import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

export const ScrollArtifact = ({ position = [2, 0, 0] as [number, number, number], color = "#cc0000" }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate based on time + scroll progress
    const scroll = scrollYProgress.get();
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 + scroll * 10;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + scroll * 5;
    
    // Subtle float & scale pulse
    const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={color}
          speed={5}
          distort={0.3}
          radius={1}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};
