'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Planton
        </h1>
        <p className="text-3xl text-gray-600 font-light">
          DevOps in a Box
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 space-y-4"
        >
          <p className="text-xl text-gray-500">Seed Round</p>
          <p className="text-lg text-gray-400">December 2025</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
