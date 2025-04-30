'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-300 mb-12 max-w-xl"
      >
        Let&apos;s work together! I&apos;m open to freelance, part-time or full-time roles. Reach out through any channel or send me a message.
      </motion.p>

      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href="mailto:pedroscarpati@proton.me"
          className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaEnvelope />
          Email
        </a>
        <a
          href="https://wa.me/34644451595"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-scarpati-951a0032a"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="https://github.com/scrpti"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      {/* Formulario funcional con feedback */}
      {submitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 text-lg mt-4"
        >
          ✅ Thank you! Your message has been sent.
        </motion.p>
      ) : (
        <form
          action="https://formspree.io/f/mwpovrgl"
          method="POST"
          onSubmit={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setSubmitted(true);
            }, 1000);
          }}
          className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Botón con loading */}
          {loading ? (
            <button
              disabled
              className="w-full flex justify-center items-center bg-blue-500 text-white py-3 rounded-md font-medium cursor-not-allowed"
            >
              <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Sending...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition font-medium"
            >
              Send Message
            </button>
          )}
        </form>
      )}
      <div className='mt-12'>
      <a
        href="/cv-pedro-scarpati.pdf"
        download
        className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg flex items-center gap-3 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 14a1 1 0 011-1h3v-3H6l4-4 4 4h-1v3h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z" />
        </svg>
        Download CV
      </a>
      </div>
    </section>
    
  );
}
