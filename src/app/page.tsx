import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Questions from '@/components/Questions';
import Experience from '@/components/Experience';
import PricingPlans from '@/components/PricingPlans';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <PricingPlans />
      <Contact />
      <Questions />
    </div>
  );
}
