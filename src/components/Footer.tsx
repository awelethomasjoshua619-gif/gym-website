import { ArrowUpRight, Dumbbell } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#070707] px-6 py-14 md:py-16">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
      <div>
        <a href="#hero" className="mb-5 inline-flex items-center gap-3" aria-label="GYMWEB home">
          <span className="flex size-9 items-center justify-center bg-brand-red"><Dumbbell size={19} /></span>
          <span className="text-xl font-display tracking-[0.12em]">GYM<span className="text-brand-red">WEB</span></span>
        </a>
        <p className="max-w-sm text-sm leading-6 text-white/50">A focused space to get stronger, move better, and find your people.</p>
      </div>

      <div>
        <h2 className="mb-5 text-xs tracking-[0.15em] text-white/80">EXPLORE</h2>
        <ul className="space-y-3 text-sm text-white/50">
          <li><a href="#programs" className="transition-colors hover:text-white">Training</a></li>
          <li><a href="#trainers" className="transition-colors hover:text-white">Coaches</a></li>
          <li><a href="#experience-target" className="transition-colors hover:text-white">The space</a></li>
          <li><a href="#pricing" className="transition-colors hover:text-white">Membership</a></li>
        </ul>
      </div>

      <div>
        <h2 className="mb-5 text-xs tracking-[0.15em] text-white/80">READY WHEN YOU ARE</h2>
        <a href="#contact" className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">Plan a first visit <ArrowUpRight size={16} className="text-brand-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
      </div>
    </div>

    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2025 GYMWEB. All rights reserved.</p>
      <a href="#hero" className="transition-colors hover:text-white">Back to top ↑</a>
    </div>
  </footer>
);
