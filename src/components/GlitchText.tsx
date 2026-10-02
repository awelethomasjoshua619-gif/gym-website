import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
      
      // Random interval for more "organic" feel
      setTimeout(triggerGlitch, Math.random() * 5000 + 2000);
    };

    const initialTimeout = setTimeout(triggerGlitch, 3000);
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="relative inline-block px-4">
      <span className={`relative z-10 ${className}`}>{text}</span>
      
      {isGlitching && (
        <>
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 0.8, x: 8 }}
            className="absolute top-0 left-0 text-brand-red z-0"
          >
            {text}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 0.8, x: -8 }}
            className="absolute top-0 left-0 text-cyan-400 z-0"
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
};
