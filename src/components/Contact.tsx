import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="relative bg-[#111] px-6 py-24 md:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Your next step</p>
        <h2 className="mb-8 text-5xl md:text-7xl">Let's get <span className="text-brand-red">moving.</span></h2>
        <p className="mb-12 max-w-lg text-base leading-7 text-white/60">Have a question, or want to see the space? Send us a note and tell us what you are looking for. We will help you find a good place to start.</p>

        <div className="space-y-8">
          <div className="flex gap-5">
            <div className="flex size-12 shrink-0 items-center justify-center border border-brand-red/25 bg-brand-red/10"><MapPin className="text-brand-red" size={21} /></div>
            <div>
              <h3 className="mb-2 text-sm tracking-widest">Visit the gym</h3>
              <p className="text-sm leading-6 text-white/55">123 Elite Performance Way<br />Carbon Heights</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex size-12 shrink-0 items-center justify-center border border-brand-red/25 bg-brand-red/10"><Mail className="text-brand-red" size={21} /></div>
            <div>
              <h3 className="mb-2 text-sm tracking-widest">Email the team</h3>
              <a href="mailto:info@gymweb.com" className="text-sm text-white/55 transition-colors hover:text-white">info@gymweb.com</a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="relative border border-white/10 bg-brand-dark p-7 md:p-12"
      >
        <h3 className="mb-2 text-2xl">Tell us a little about you.</h3>
        <p className="mb-8 text-sm leading-6 text-white/50">Your email app will open with your message ready to review.</p>
        <form className="space-y-7" action="mailto:info@gymweb.com" method="post" encType="text/plain">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Name" className="w-full border-b border-white/15 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-brand-red" />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full border-b border-white/15 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-brand-red" />
          </div>
          <div>
            <label htmlFor="contact-program" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">What are you interested in?</label>
            <select id="contact-program" name="interest" defaultValue="" required className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white/70 outline-none transition-colors focus:border-brand-red">
              <option value="" disabled className="bg-[#111]">Choose a training option</option>
              <option className="bg-[#111]">Strength Training</option>
              <option className="bg-[#111]">Group Training</option>
              <option className="bg-[#111]">Personal Coaching</option>
              <option className="bg-[#111]">Open Gym</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Anything else we should know?</label>
            <textarea id="contact-message" name="message" placeholder="Tell us what you are working toward" rows={3} className="w-full resize-y border-b border-white/15 bg-transparent py-3 text-sm leading-6 outline-none transition-colors placeholder:text-white/25 focus:border-brand-red" />
          </div>
          <button type="submit" className="group flex min-h-14 w-full items-center justify-center gap-4 bg-brand-red px-6 text-sm font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white hover:text-black">
            Start a conversation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);
