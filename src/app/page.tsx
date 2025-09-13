import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
    </div>
  );
}
