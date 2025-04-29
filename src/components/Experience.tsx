'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experience = [
  {
    title: 'Backend Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Building web apps for clients using FastAPI, Express and MongoDB.',
  },
  {
    title: 'Full Stack Developer',
    company: 'PyMWare',
    period: '2024 - Present',
    description: 'Designing internal tools and ERP solutions for small businesses.',
  },
  {
    title: 'Next Opportunity',
    company: 'Your Company?',
    period: 'Open to Offers',
    description: 'Let\'s build something impactful together. I\'m open to freelance, part-time, or full-time roles where I can make a difference.',
    future: true,
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 pt-24 pb-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-10">
      {experience.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative border-l-4 ${item.future ? 'border-dashed border-gray-500' : 'border-blue-500'} pl-6 py-4 ${item.future ? 'bg-white/10' : 'bg-white/5'} rounded-md backdrop-blur-md`}
        >
          <div className={`absolute -left-[22px] top-5 p-2 rounded-full ${item.future ? 'bg-gray-500' : 'bg-blue-500'}`}>
            <FaBriefcase className="text-white" />
          </div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-300">{item.company}</p>
          <p className="text-sm text-gray-400 mb-2">{item.period}</p>
          <p className="text-gray-200 text-sm">{item.description}</p>
        </motion.div>
      ))}
      </div>
    </section>
  );
}
