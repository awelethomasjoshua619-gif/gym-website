import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Stats } from './components/Stats';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-athletic selection:bg-brand-red selection:text-white">
      <Navbar />
      <SmoothScroll>
        <main className="relative flex flex-col">
          <Hero />
          <Programs />
          <Stats />
          <Experience />
          <Trainers />
          <Gallery />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;
