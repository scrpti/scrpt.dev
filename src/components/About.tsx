'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl text-center text-gray-600 text-lg leading-relaxed"
      >
        <p>
          I&apos;m Pedro (scrpt), a passionate software developer focused on building 
          modern and efficient web applications.
          <br /><br />
          I love working with JavaScript, TypeScript, Next.js, and constantly learning new technologies. 
          I am currently building awesome projects and open to new opportunities 🚀
        </p>
      </motion.div>
    </section>
  );
}
