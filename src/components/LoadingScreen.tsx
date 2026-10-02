import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center"
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Spinning Barbell Component */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-4"
        >
          {/* Bar */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-silver -translate-y-1/2" />
          {/* Weights */}
          <div className="absolute left-0 top-0 w-4 h-12 bg-brand-grey border border-brand-red -translate-y-[40%]" />
          <div className="absolute left-4 top-0 w-3 h-10 bg-brand-grey border border-brand-red -translate-y-[30%]" />
          <div className="absolute right-0 top-0 w-4 h-12 bg-brand-grey border border-brand-red -translate-y-[40%]" />
          <div className="absolute right-4 top-0 w-3 h-10 bg-brand-grey border border-brand-red -translate-y-[30%]" />
        </motion.div>
        
        {/* Glow */}
        <div className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-2xl font-display tracking-[0.5em] text-brand-silver"
      >
        GYMWEB
      </motion.div>
    </motion.div>
  );
};
