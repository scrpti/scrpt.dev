'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Background() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // Color azul dinámico
  const backgroundColor = useTransform(
    scrollY,
    [0, 500, 1000, 1500],
    [
      '#0d1b2a', // azul marino muy oscuro
      '#1b263b', // azul petróleo oscuro
      '#274690', // azul profundo medio
      '#3b82f6'  // azul elegante más claro
    ]
  );

  // Opacidad que va subiendo (transición del GIF)
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 300],
    [0.3, 0.8] // 30% → 80% mientras haces scroll
  );

  return (
    <motion.div
      style={{ backgroundColor, opacity: backgroundOpacity }}
      className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] -z-10 blur-2xl"
    />
  );
}
