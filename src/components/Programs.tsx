import { motion } from 'framer-motion';
import { ProgramCard } from './ProgramCard';
import { Shield, Zap, Activity, Award } from 'lucide-react';

const programs = [
  {
    title: 'Strength Training',
    description: 'Build strength and confidence with a progressive plan and coaching that meets you where you are.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cross Training',
    description: 'Keep your training varied with coached sessions built around stamina, mobility, and real-world strength.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Conditioning',
    description: 'Improve your fitness at your pace with supportive, high-energy classes and a clear path forward.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Elite Athlete',
    description: 'Prepare for your sport with focused strength, movement, and performance coaching.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="relative overflow-hidden bg-[#111] px-6 py-24 md:py-32">
      {/* Background Decorative Text */}
      <div className="pointer-events-none absolute -right-24 top-24 size-[28rem] rounded-full bg-brand-red/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Find your way in</p>
            <h2 className="mb-6 text-5xl md:text-7xl">Training that <span className="text-brand-red">moves you.</span></h2>
            <p className="max-w-xl text-base leading-7 text-brand-silver/70 md:text-lg">
              Start with what feels right. Our coaches help you build a routine that fits your goals, experience, and schedule.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 border-b border-brand-red pb-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-brand-red">Talk to a coach <span aria-hidden="true">↗</span></a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
