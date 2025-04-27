'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // 4 segundos de splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <main className="h-[5000px] bg-transparent">
          <Hero />
          <About />
           <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
