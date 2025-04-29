'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef<HTMLElement>(null); // 👈 este ref es el correcto
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Movimiento controlado: cuando bajas dentro de la sección, el fondo se mueve
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["-45%", "-20%", "0%"]);

  return (
    <section
      ref={ref} // 👈 asignamos el ref aquí
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Fondo de collage con movimiento */}
      <motion.div
        style={{ x }}
        className="absolute inset-0 z-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-2 opacity-20 blur-sm w-[300%] sm:w-[250%] md:w-[200%]"
      >
        {/* FOTOS "de relleno" al inicio */}
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915600/ofxsmezfyhac4bivhvm9.jpg" alt="Extra 1" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915599/ptfqcxquqdmex1q0kgzp.jpg" alt="Extra 2" width={400} height={400} className="object-cover w-full aspect-square" />

        {/* FOTOS PRINCIPALES */}
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915599/fcitnhh7hdzcbukc4op6.jpg" alt="Pedro 1" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915600/bvfotg5boyvrantghiys.jpg" alt="Pedro 2" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915600/s0navs4sf0mwatjnilz2.jpg" alt="Pedro 3" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915599/vvbgryuggh0gouhfubwk.jpg" alt="Pedro 4" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915599/vvbgryuggh0gouhfubwk.jpg" alt="Pedro 5" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915600/uatp8gb9kphxzuxc0hkg.jpg" alt="Pedro 6" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915599/fykngvy4jpmeyqxvbylf.jpg" alt="Pedro 7" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915600/ofxsmezfyhac4bivhvm9.jpg" alt="Pedro 8" width={400} height={400} className="object-cover w-full aspect-square" />

        {/* FOTOS "de relleno" al final */}
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915600/ofxsmezfyhac4bivhvm9.jpg" alt="Extra 3" width={400} height={400} className="object-cover w-full aspect-square" />
        <Image src="https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745915599/ptfqcxquqdmex1q0kgzp.jpg" alt="Extra 4" width={400} height={400} className="object-cover w-full aspect-square" />
      </motion.div>

      {/* Contenido del About */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4 sm:px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">About Me</h2>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          Hi, I&apos;m Pedro. Since I was a child, I have been passionate about computers, and today, programming has become my true vocation.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          I love designing and understanding everything related to 0s and 1s.
          In 2022, I began my professional career by enrolling in the Software Engineering degree at the University of Málaga.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          As someone who believes in constant learning, in 2024 I completed a course at Harvard University in Artificial Intelligence and Language Models.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          My curiosity for technology started early; back in my first year of high school, I was already reading about Bitcoin, Ethereum, and how blockchain could transform the future.
          In 2025, I pursued a University Extension in Blockchain Technologies, where I deepened my knowledge significantly.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          Outside of technology, I enjoy practicing sports like paddle surfing and snowboarding with friends. I also love attending Málaga CF matches, supporting my city&apos;s team.
        </p>
      </motion.div>
    </section>
  );
}
