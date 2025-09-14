'use client'

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Load from '@/components/sub/Load';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import Toggle from '@/components/sub/Toggle';
import Questions from '@/components/Questions';
import Experience from '@/components/Experience';
import { useEffect, useRef, useState } from 'react';
import PricingPlans from '@/components/PricingPlans';

export default function Home() {
  const compsRef = useRef<HTMLDivElement>(null);

  const [id, setId] = useState('');
  const [mounted, setMounted]= useState(false);

  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            if (intersecting) {
              setId(entry.target.id);
            }
          })
        },
        { threshold: 0.3 },
      );
      
      if (compsRef?.current) {
        const compsArr = Array.from(compsRef.current?.children);
        compsArr.forEach((comp) => {
          observer.observe(comp);
        });
      }
    }, 1000);

  }, []);

  if (!mounted) {
    return <><Load /></>
  }

  return (
    <>
      <Toggle>
        <Navbar id={id} />
        <div className="w-min" ref={compsRef}>
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
      </Toggle>
    </>
  );
}
