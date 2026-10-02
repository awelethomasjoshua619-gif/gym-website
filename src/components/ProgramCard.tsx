import { ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const ProgramCard = ({ title, description, icon: Icon, image }: ProgramCardProps) => (
  <a href="#contact" className="group relative flex min-h-[390px] flex-col justify-end overflow-hidden border border-white/10 bg-brand-grey p-7 transition-colors hover:border-brand-red/70 focus-visible:outline">
    <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
    <div className="absolute left-0 top-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
    <div className="relative z-10">
      <div className="mb-5 flex items-center justify-between">
        <span className="flex size-12 items-center justify-center border border-white/30 bg-black/30 text-brand-red"><Icon size={24} /></span>
        <ArrowUpRight className="text-white/55 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-red" size={20} />
      </div>
      <h3 className="mb-3 text-2xl font-display text-white">{title}</h3>
      <p className="max-w-[30ch] text-sm leading-6 text-white/70">{description}</p>
      <span className="mt-6 inline-block border-b border-brand-red pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">Find your class</span>
    </div>
  </a>
);
