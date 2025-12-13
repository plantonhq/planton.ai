'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function SolutionSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <Lightbulb className="w-12 h-12 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900">The Solution</h2>
        </div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-blue-600 mb-6"
          >
            DevOps in a Box
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            Provision infrastructure across any cloud in <span className="font-bold text-blue-600">minutes</span>, not days
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            Deploy backend services with <span className="font-bold text-blue-600">zero DevOps overhead</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            Take control when needed — it&apos;s all based on <span className="font-bold text-blue-600">standard tools</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
