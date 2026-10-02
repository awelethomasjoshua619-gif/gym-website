import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

interface GymArtifactProps {
  position: [number, number, number];
  type?: 'plate' | 'gear' | 'dumbbell';
  color?: string;
}

export const GymArtifact = ({ position, type = 'plate', color = "#cc0000" }: GymArtifactProps) => {
  const meshRef = useRef<THREE.Group>(null!);
  const { scrollYProgress } = useScroll();
  const mouse = useRef({ x: 0, y: 0 });

  // Handle mouse move for local physics
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const scroll = scrollYProgress.get();
    const time = state.clock.elapsedTime;

    // Follow cursor with smoothing (lerp)
    const targetRotateX = mouse.current.y * 0.5;
    const targetRotateY = mouse.current.x * 0.5;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotateX + scroll * 5, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotateY + time * 0.2, 0.1);
    
    // Floating motion
    meshRef.current.position.y = position[1] + Math.sin(time) * 0.2;
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {type === 'plate' && (
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[1, 1, 0.2, 32]} />
            <meshStandardMaterial 
              color={color} 
              metalness={0.9} 
              roughness={0.1}
              envMapIntensity={1}
            />
            {/* Center Hole */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.25, 16]} />
              <meshStandardMaterial color="#000" />
            </mesh>
          </mesh>
        )}

        {type === 'gear' && (
          <mesh castShadow>
            <torusKnotGeometry args={[0.7, 0.2, 128, 16]} />
            <meshStandardMaterial 
              color="#e0e0e0" 
              metalness={1} 
              roughness={0.05}
            />
          </mesh>
        )}

        {type === 'dumbbell' && (
          <group scale={0.5}>
            <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.1, 0.1, 4, 16]} />
              <meshStandardMaterial color="#888" metalness={1} />
            </mesh>
            <mesh position={[0, 1.8, 0]}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, -1.8, 0]}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        )}
      </Float>
    </group>
  );
};
