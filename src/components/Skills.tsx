'use client';

import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiSolidity,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Python', icon: SiPython },
  { name: 'Solidity', icon: SiSolidity },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-white"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Icon className="text-blue-400 text-4xl mb-2" />
              <span className="mt-1 text-base text-gray-100 font-medium tracking-wide">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
