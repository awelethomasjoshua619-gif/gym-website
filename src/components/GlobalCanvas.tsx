import { Canvas } from '@react-three/fiber';
import { EnergyShader } from './EnergyShader';
import { CinematicEffects } from './CinematicEffects';

export const GlobalCanvas = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050505']} />
        
        {/* Persistent background shader */}
        <EnergyShader />

        <CinematicEffects />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Canvas>
    </div>
  );
};
