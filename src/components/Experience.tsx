const spaces = [
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000',
    title: 'The training floor',
    detail: 'Room to move, lift, and focus',
  },
  {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
    title: 'Group sessions',
    detail: 'Bring your energy. Find your rhythm.',
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000',
    title: 'Strength equipment',
    detail: 'Tools to support every level',
  },
];

export const Experience = () => (
  <section id="experience-target" className="bg-[#111] px-6 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Come see for yourself</p>
          <h2 className="text-5xl md:text-7xl">Your space to <span className="text-brand-red">get stronger.</span></h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/60 md:text-base">A welcoming training floor, considered equipment, and room to focus on what matters to you.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {spaces.map((space, index) => (
          <article key={space.title} className={`group relative min-h-[330px] overflow-hidden bg-black md:min-h-[430px] ${index === 1 ? 'md:translate-y-8' : ''}`}>
            <img src={space.url} alt={space.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">0{index + 1} / 03</p>
              <h3 className="mb-2 text-2xl text-white">{space.title}</h3>
              <p className="text-sm text-white/70">{space.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
