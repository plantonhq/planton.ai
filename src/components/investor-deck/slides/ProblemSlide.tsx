'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function ProblemSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <h2 className="text-4xl font-bold text-gray-900">The Problem</h2>
        </div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            DevOps teams spend <span className="font-bold text-red-600">80% of their time</span> on repetitive infrastructure tasks
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            Developers wait <span className="font-bold text-red-600">days</span> for infrastructure, not minutes
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            Cloud providers are powerful but <span className="font-bold text-red-600">overwhelmingly complex</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 text-xl text-gray-500 italic"
          >
            Every company reinvents the same DevOps wheel
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
