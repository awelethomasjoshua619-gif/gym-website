import { useEffect, useState } from 'react';

export const DataStream = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoords({
        x: Math.floor(Math.random() * 1000),
        y: Math.floor(Math.random() * 1000),
        z: Math.floor(Math.random() * 1000)
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[8px] text-white/30 space-y-1 select-none pointer-events-none">
      <div className="flex justify-between gap-4">
        <span>X_AXIS:</span>
        <span className="text-brand-red/60">{coords.x.toString(16).toUpperCase().padStart(4, '0')}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span>Y_AXIS:</span>
        <span className="text-brand-red/60">{coords.y.toString(16).toUpperCase().padStart(4, '0')}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span>Z_AXIS:</span>
        <span className="text-brand-red/60">{coords.z.toString(16).toUpperCase().padStart(4, '0')}</span>
      </div>
      <div className="pt-1 border-t border-white/10 mt-1 opacity-50">
        SCAN_ID: ELITE_{Math.floor(Math.random() * 9999)}
      </div>
    </div>
  );
};
