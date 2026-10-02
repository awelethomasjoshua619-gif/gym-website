import { motion } from 'framer-motion';

export const ScannerCircle = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer Rotating Ring */}
      <motion.svg 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-48 h-48 opacity-20"
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="white" 
          strokeWidth="0.5" 
          strokeDasharray="2, 5" 
        />
      </motion.svg>

      {/* Inner Pulsing Ring */}
      <motion.svg 
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-40 h-40 opacity-40"
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" cy="50" r="40" 
          fill="none" 
          stroke="#cc0000" 
          strokeWidth="1" 
          strokeDasharray="10, 20" 
        />
      </motion.svg>

      {/* Decorative Bits */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-brand-red opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-brand-red opacity-50" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-brand-red opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-brand-red opacity-50" />
    </div>
  );
};
