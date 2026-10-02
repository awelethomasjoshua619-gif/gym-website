import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Coaches', href: '#trainers' },
  { name: 'The space', href: '#experience-target' },
  { name: 'Membership', href: '#pricing' },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 180 && !menuOpen);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/85 px-5 backdrop-blur-xl md:px-10"
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-7xl items-center justify-between">
        <a href="#hero" onClick={closeMenu} className="group flex items-center gap-3" aria-label="GYMWEB home">
          <span className="flex size-10 items-center justify-center bg-brand-red text-white transition-transform group-hover:-rotate-12">
            <Dumbbell size={22} strokeWidth={2.4} />
          </span>
          <span className="text-xl font-display font-bold tracking-[0.12em]">GYM<span className="text-brand-red">WEB</span></span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-xs font-semibold uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden items-center gap-2 bg-brand-red px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black sm:inline-flex">
          Book a visit <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center border border-white/15 text-white md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col py-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={closeMenu} className="border-b border-white/5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/75">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu} className="mt-4 bg-brand-red px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.14em]">
                Book a visit <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
