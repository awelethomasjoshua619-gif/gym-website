import { TrainerCard } from './TrainerCard';
import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Strength coaching',
    role: 'Build a strong foundation',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Group training',
    role: 'Find your rhythm and community',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Sports performance',
    role: 'Train for the way you move',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Nutrition support',
    role: 'Build habits that support you',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800'
  }
];

export const Trainers = () => {
  return (
    <section id="trainers" className="relative bg-brand-dark px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Meet your coaches</p>
            <h2 className="text-5xl md:text-7xl">Expertise with <span className="text-white/45">a human side.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-brand-silver/60 md:text-base">Our coaches are here to help you feel comfortable, get clear guidance, and keep progressing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.name} {...trainer} />
          ))}
        </div>
        <a href="#contact" className="mt-12 inline-flex items-center gap-3 border-b border-brand-red pb-2 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-brand-red">Talk to a coach <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
};
