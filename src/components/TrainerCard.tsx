import { motion } from 'framer-motion';

interface TrainerCardProps {
  name: string;
  role: string;
  image: string;
}

export const TrainerCard = ({ name, role, image }: TrainerCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ once: true, amount: 0.15 }}
    className="group relative aspect-[4/5] overflow-hidden bg-brand-grey"
  >
    <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/15 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <span className="mb-3 block h-0.5 w-8 bg-brand-red transition-all duration-300 group-hover:w-14" />
      <h3 className="mb-1 text-2xl text-white">{name}</h3>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">{role}</p>
    </div>
  </motion.article>
);
