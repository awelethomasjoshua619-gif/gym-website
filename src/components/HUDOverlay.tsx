import { motion } from 'framer-motion';

export const HUDOverlay = () => {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden opacity-20">
      {/* Moving Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Corner Brackets */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/20" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-white/20" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-white/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/20" />

      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"
      />

      {/* Technical Data Readouts */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[8px] text-brand-red uppercase tracking-tighter">Status</span>
          <span className="text-[10px] text-white/40 font-mono">SYSTEM_ACTIVE</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] text-brand-red uppercase tracking-tighter">Power</span>
          <span className="text-[10px] text-white/40 font-mono">0.89 GW</span>
        </div>
      </div>

      <div className="absolute bottom-24 right-10 flex flex-col items-end gap-2">
        <span className="text-[8px] text-brand-red uppercase tracking-tighter">Coordinates</span>
        <span className="text-[10px] text-white/40 font-mono">40.7128° N, 74.0060° W</span>
      </div>
    </div>
  );
};
