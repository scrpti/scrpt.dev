'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Alergenos App',
    description: 'App to manage allergens information for Panadería Inma.',
    link: 'https://alergenos-inma.vercel.app/',
    image: 'https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745932134/owv5x2s4avgc1wxj1zqo.png',
    tech: ['Next.js', 'Tailwind', 'MongoDB'],
  },
  {
    title: 'WhatsApp Bot',
    description: 'Automated bot for order management via WhatsApp.',
    link: 'https://wa.me/34631912763',
    image: 'https://res.cloudinary.com/ds7vt7dl9/image/upload/v1746003905/ybry5grgbaacdghxgyr8.png',
    tech: ['Node.js', 'Twilio', 'MongoDB'],
  },
  {
    title: 'PyMWare',
    description: 'ERP tool to solve daily SME management problems.',
    link: 'https://pymware-front.vercel.app/',
    image: 'https://res.cloudinary.com/ds7vt7dl9/image/upload/v1745932344/zrfqaoojt3pcos5qzqgb.png',
    tech: ['Next.js', 'Express', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md flex flex-col"
          >
            {/* Imagen */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-gray-200 px-2 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
