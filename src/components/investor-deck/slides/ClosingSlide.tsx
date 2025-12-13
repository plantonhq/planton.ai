'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Linkedin } from 'lucide-react';

export default function ClosingSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-700 p-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-12 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-bold mb-6">
            Let&apos;s Build the Future of DevOps
          </h1>
          <p className="text-2xl text-blue-100">
            Making infrastructure invisible so developers can focus on building
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 pt-8"
        >
          <div className="flex items-center justify-center gap-3 text-xl">
            <Mail className="w-6 h-6" />
            <span>swarup@planton.ai</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-xl">
            <Globe className="w-6 h-6" />
            <span>planton.ai</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-xl">
            <Linkedin className="w-6 h-6" />
            <span>linkedin.com/in/swarupdonepudi</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-8 text-lg text-blue-200 italic"
        >
          &ldquo;India&apos;s next globally loved developer tool&rdquo;
        </motion.div>
      </motion.div>
    </div>
  );
}
