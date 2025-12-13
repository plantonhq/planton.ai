'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function WelcomeScreen() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        {/* Logo Area */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Rocket className="w-20 h-20 mx-auto text-violet-500 mb-6" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Planton Cloud</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Becoming the Next Postman
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl text-gray-300 mb-8"
        >
          Building India's second globally loved developer tool
        </motion.p>

        {/* One-liner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4"
        >
          <p className="text-lg text-gray-200">
            DevOps automation for every software company, from India to the world
          </p>
        </motion.div>

        {/* Logos Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <div className="text-4xl font-bold text-violet-400">Planton</div>
          <div className="text-gray-500 text-2xl">+</div>
          <div className="text-4xl font-bold text-orange-400">Postman</div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-gray-500 mt-4"
        >
          Both from India • Both developer-first • Both solving fragmentation
        </motion.p>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-gray-500 text-sm"
        >
          Press → or click Next to begin
        </motion.div>
      </motion.div>
    </div>
  );
}
