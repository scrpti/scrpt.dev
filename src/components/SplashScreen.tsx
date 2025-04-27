'use client';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function SplashScreen() {
  const [textFinished, setTextFinished] = useState(false);

  useEffect(() => {
    if (textFinished) {
      const timer = setTimeout(() => {
        // Opcional: podrías hacer algo cuando termine
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [textFinished]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-black text-green-400 font-mono text-2xl transition-opacity duration-1000">
      <Typewriter
        options={{
          strings: ["Hi, I'm scrpt and this is my CV"],
          autoStart: true,
          loop: false,
          delay: 50,
          cursor: '_',
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .start()
            .callFunction(() => setTextFinished(true));
        }}
      />
    </section>
  );
}
