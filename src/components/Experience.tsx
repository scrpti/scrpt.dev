'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'Freelance',
      role: 'Full Stack Developer',
      date: '2023 - Present',
      description: 'Building web applications for clients using Next.js, Node.js, and MongoDB.',
    },
    {
      company: 'PyMWare',
      role: 'Full Stack Developer',
      date: '2024 - present',
      description: '',
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-8 max-w-3xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
            <p className="text-gray-600 mb-1">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-4">{exp.date}</p>
            <p className="text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
