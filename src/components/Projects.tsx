'use client';
import { motion } from 'framer-motion';
// import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of project one.',
    //   image: '/home/scrpt/Pictures/Screenshots/project.png',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of project two.',
    //   image: '/home/scrpt/Pictures/Screenshots/project.png',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of project three.',
    //   image: '/home/scrpt/Pictures/Screenshots/project.png',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            /> */}
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Demo
                </a>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
