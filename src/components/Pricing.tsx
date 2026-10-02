import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Open gym',
    price: 'Get in touch',
    features: ['Train on your schedule', 'Strength and cardio equipment', 'A welcoming space for all levels', 'Ask us about day passes'],
    highlight: false
  },
  {
    name: 'Group training',
    price: 'Get in touch',
    features: ['Coach-led sessions', 'A supportive group setting', 'Options for different experience levels', 'Ask about the weekly schedule'],
    highlight: true
  },
  {
    name: 'Personal coaching',
    price: 'Get in touch',
    features: ['One-to-one coaching', 'A plan built around your goals', 'Regular progress check-ins', 'Flexible session options'],
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-brand-dark px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Membership</p>
          <h2 className="mb-6 text-5xl md:text-7xl">Choose how <span className="text-brand-red">you train.</span></h2>
          <p className="mx-auto max-w-xl text-sm leading-6 text-brand-silver/60 md:text-base">Tell us what you are looking for and our team will walk you through the options, schedule, and current rates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-12 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 ${
                plan.highlight ? 'bg-brand-red scale-105 z-10' : 'bg-brand-grey border border-white/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1">
                  Coach-led option
                </div>
              )}
              
              <h3 className="text-2xl font-display uppercase tracking-widest mb-4">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-3xl font-display">{plan.price}</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-8" />

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-brand-silver/80">
                    <Check size={14} className={plan.highlight ? 'text-white' : 'text-brand-red'} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`w-full py-4 font-display tracking-widest uppercase text-sm transition-all duration-300 ${
                plan.highlight ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-brand-dark text-white hover:bg-brand-red'
              }`}>
                Ask about {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
