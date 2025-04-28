'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Collage de fondo */}
      <div className="absolute inset-0 z-0 grid grid-cols-4 gap-2 opacity-20 blur-sm">
        <Image src="/foto1.jpeg" alt="Pedro 1" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto2.jpeg" alt="Pedro 2" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto3.jpeg" alt="Pedro 3" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto4.jpeg" alt="Pedro 4" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto5.jpeg" alt="Pedro 5" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto6.jpeg" alt="Pedro 5" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto7.jpeg" alt="Pedro 5" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="/foto3.jpeg" alt="Pedro 5" width={400} height={400} className="object-cover w-full aspect-square" />
      </div>


      {/* Contenido del About */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">About Me</h2>
        <p className="text-lg md:text-xl text-black-300 mb-4">
          I'm Pedro (scrpt), a passionate Full Stack Developer currently pursuing a degree in Software Engineering and specializing in Blockchain technologies.
        </p>
        <p className="text-lg md:text-xl text-black-400 mb-4">
          I combine creativity and precision, building high-quality web applications using technologies like JavaScript, TypeScript, Next.js, and modern frameworks.
        </p>
        <p className="text-lg md:text-xl text-black-400 mb-4">
          I love solving complex problems, optimizing performance, and creating seamless user experiences. I'm constantly learning, working on new projects, and open to exciting tech opportunities 🚀.
        </p>
      </motion.div>
    </section>
  );
}
