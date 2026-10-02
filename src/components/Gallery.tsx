const communityImages = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=900', alt: 'Weights and equipment on the gym floor' },
  { src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=900', alt: 'A group training together' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=900', alt: 'Training in action' },
];

export const Gallery = () => (
  <section id="gallery" className="bg-brand-dark px-6 py-24 md:py-32">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">More than a workout</p>
        <h2 className="mb-6 text-5xl md:text-7xl">Come as you are. <span className="text-white/45">Leave a little stronger.</span></h2>
        <p className="max-w-lg text-base leading-7 text-white/60">Whether you are picking up a weight for the first time or building toward a new goal, you belong on the floor. Start a conversation with our team and we will help you find your next step.</p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-brand-red pb-2 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-brand-red">Meet the team <span aria-hidden="true">↗</span></a>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <img src={communityImages[0].src} alt={communityImages[0].alt} loading="lazy" className="col-span-2 h-56 w-full object-cover sm:h-72" />
        <img src={communityImages[1].src} alt={communityImages[1].alt} loading="lazy" className="h-40 w-full object-cover sm:h-56" />
        <img src={communityImages[2].src} alt={communityImages[2].alt} loading="lazy" className="h-40 w-full object-cover sm:h-56" />
      </div>
    </div>
  </section>
);
