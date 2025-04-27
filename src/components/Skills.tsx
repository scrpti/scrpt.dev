'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Skills() {
  return (
    <section id="skills" className="h-screen flex flex-col justify-center items-center text-center px-4">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-10 text-5xl text-blue-600"
      >
        {[ 
          { icon: <FaReact />, label: 'React' },
          { icon: <SiNextdotjs />, label: 'Next.js' },
          { icon: <SiTailwindcss />, label: 'TailwindCSS' },
          { icon: <SiTypescript />, label: 'TypeScript' },
          { icon: <FaNodeJs />, label: 'Node.js' },
          { icon: <FaGithub />, label: 'GitHub' }
        ].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center transition-all duration-300 hover:text-blue-500 hover:drop-shadow-lg"
          >
            {skill.icon}
            <span className="text-sm mt-2 text-gray-600">{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
