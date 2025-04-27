'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-6 text-white flex items-center justify-center text-sm"
    >
      <p>
        © {new Date().getFullYear()} scrpt.dev — All rights reserved
      </p>
    </motion.footer>
  );
}
