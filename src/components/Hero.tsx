'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image'; // Importa esto arriba del Hero



export default function Hero() {
  const { scrollY } = useScroll();

  // Hacemos que el GIF desaparezca a medida que haces scroll
  const gifOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* GIF de fondo */}
      <motion.div
        style={{ opacity: gifOpacity }}
        className="absolute inset-0 z-0"
        >
        <Image
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTB1amF4MWVpcG4yOGpxaXB0dWhyemxkY29iM3Nnbm9ueWgxbmU4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jMbfmwkrcm82PRlYa9/giphy.gif" // Cambia la ruta según tu estructura de carpetas
            alt="Background GIF"
            layout="fill"
            objectFit="cover"
            priority
        />
        </motion.div>

      {/* Contenido */}
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          Hi, I&apos;m Pedro <span className="text-blue-400">(scrpti)</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          Former Software Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block border border-white text-white px-6 py-3 rounded-full text-lg cursor-pointer hover:bg-white hover:text-black transition"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
