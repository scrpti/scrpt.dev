'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-xl"
      >
        <p className="text-lg text-gray-600 mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s connect! 🚀
        </p>

        <div className="flex justify-center gap-6 text-4xl text-blue-600">
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
