import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const PowerMeter = () => {
  const { scrollYProgress } = useScroll();
  const [isPeak, setIsPeak] = useState(false);
  
  // Smooth out the scroll value for high-end feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const powerPercentage = useTransform(scaleY, [0, 1], [0, 100]);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return powerPercentage.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
      if (latest > 98) {
        setIsPeak(true);
      } else {
        setIsPeak(false);
      }
    });
  }, [powerPercentage]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 group">
      {/* Label */}
      <div className="vertical-text flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-brand-red tracking-[0.3em] uppercase">Power Level</span>
        <span className="text-2xl font-display text-white w-12 text-center">
          {displayValue}<span className="text-xs text-brand-red ml-1">%</span>
        </span>
      </div>

      {/* Meter Track */}
      <div className="relative w-[6px] h-[30vh] bg-white/10 rounded-full overflow-hidden border border-white/5">
        {/* Progress Fill */}
        <motion.div 
          style={{ scaleY, originY: 1 }}
          className="absolute inset-0 bg-brand-red shadow-[0_0_15px_rgba(204,0,0,0.8)]"
        />
        
        {/* Glow Flicker Effect */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 0.2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20 mix-blend-overlay"
        />
      </div>

      {/* Peak Indicator */}
      <motion.div 
        animate={isPeak ? { scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] } : { scale: 1, opacity: 0.3 }}
        transition={isPeak ? { duration: 0.4, repeat: Infinity } : { duration: 0.4 }}
        className={`w-2 h-2 rounded-full ${isPeak ? 'bg-brand-red' : 'bg-white/20'}`}
      />

      {/* Visual HUD Brackets */}
      <div className="absolute -inset-4 border-r border-white/5 pointer-events-none group-hover:border-white/20 transition-colors" />
    </div>
  );
};
