import { EffectComposer, Noise, Vignette, ChromaticAberration, Scanline } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import * as THREE from 'three';

export const CinematicEffects = () => {
  const { scrollYProgress } = useScroll();
  const [distortion, setDistortion] = useState(0);

  // Intensify chromatic aberration based on scroll speed
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const prev = scrollYProgress.getPrevious() ?? latest; // Guard against undefined
      const speed = Math.abs(latest - prev);
      setDistortion(speed * 3); // Slightly reduced for stability
    });
  }, [scrollYProgress]);

  const offset = new THREE.Vector2(0.002 + distortion, 0.002 + distortion);

  return (
    <EffectComposer>
      <Noise 
        opacity={0.05} 
        premultiply 
        blendFunction={BlendFunction.SOFT_LIGHT} 
      />
      <Vignette 
        eskil={false} 
        offset={0.5} 
        darkness={0.5} 
      />
      <ChromaticAberration
        offset={offset} // Pass Vector2 for R3F compatibility
        blendFunction={BlendFunction.NORMAL}
      />
      <Scanline 
        opacity={0.02} 
        density={2.5} 
      />
    </EffectComposer>
  );
};
