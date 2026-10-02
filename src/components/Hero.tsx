import { ArrowDownRight, ArrowRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const heroImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=85&w=2200';

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative flex min-h-[max(740px,100svh)] w-full items-center overflow-hidden bg-[#080808] pt-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Strength training floor at GYMWEB" className="h-full w-full object-cover object-center opacity-65" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-[#070707]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-14 px-6 pb-32 pt-16 md:px-10 lg:grid-cols-[1fr_280px] lg:gap-20"
      >
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-white/75">
            <span className="h-px w-10 bg-brand-red" /> Training with purpose
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(4.2rem,12vw,10.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.065em]">
            Built by
            <span className="mt-3 block text-brand-red">showing up.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
            A focused space to get stronger, move better, and find your people. Expert coaching, great equipment, and a plan that fits your life.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-brand-red px-7 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-black">
              Book your first visit <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#programs" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 bg-black/20 px-7 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:border-white hover:bg-white/10">
              Explore training <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div className="hidden border-l border-white/20 pl-7 text-sm text-white/65 lg:block">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Make room for progress</p>
          <p className="mb-5 flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-brand-red" /> <span>123 Elite Performance Way<br />Carbon Heights</span></p>
          <p className="leading-6 text-white/55">See the space and find a good place to start.</p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65 sm:grid-cols-4 md:px-10">
          <span>Strength & conditioning</span>
          <span>Coached by experts</span>
          <span>All levels welcome</span>
          <span className="text-brand-red">Your first visit starts here ↗</span>
        </div>
      </div>
    </section>
  );
};
