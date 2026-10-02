import { HeartHandshake, Target, TrendingUp } from 'lucide-react';

const values = [
  { icon: HeartHandshake, title: 'Coaching that listens', copy: 'Get guidance shaped around your experience, goals, and the way you want to train.' },
  { icon: Target, title: 'A plan with purpose', copy: 'Know what you are working on today and how it connects to where you want to go.' },
  { icon: TrendingUp, title: 'Progress that lasts', copy: 'Build steady habits, celebrate small wins, and keep moving forward at your own pace.' },
];

export const Stats = () => (
  <section className="border-y border-white/10 bg-brand-dark px-6 py-20 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">The GYMWEB difference</p>
        <h2 className="text-4xl md:text-6xl">Good training. <span className="text-white/45">Good people.</span></h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {values.map(({ icon: Icon, title, copy }, index) => (
          <article key={title} className="border-t border-white/15 pt-6">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-white/35">0{index + 1}</span>
              <Icon size={22} className="text-brand-red" strokeWidth={1.8} />
            </div>
            <h3 className="mb-3 text-xl">{title}</h3>
            <p className="max-w-sm text-sm leading-6 text-white/60">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
