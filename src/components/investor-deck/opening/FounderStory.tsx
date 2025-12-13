'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Target } from 'lucide-react';

export default function FounderStory() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            This Is My Life's Work
          </h1>
          <p className="text-xl text-gray-300">
            2+ years, $500k invested, extreme conviction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <Heart className="w-12 h-12 text-violet-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              First Principles
            </h3>
            <p className="text-gray-600">
              Breaking down complex problems to fundamental truths. No sacred cows, no assumptions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <Zap className="w-12 h-12 text-violet-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Maniacal Urgency
            </h3>
            <p className="text-gray-600">
              30 years. That's all Elon needed to revolutionize multiple industries. Time is precious.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <Target className="w-12 h-12 text-violet-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Delete Waste
            </h3>
            <p className="text-gray-600">
              If you don't put back 10% of what you deleted, you didn't delete enough.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            "If Bangalore can build Postman for 30 million developers worldwide, 
            we can build Planton for every company doing DevOps."
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I've lived the DevOps pain for years. Watching teams reinvent the same wheel, 
            seeing infrastructure deployment take weeks instead of minutes, 
            observing how cloud fragmentation slows down innovation.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong className="text-white">Planton is my answer.</strong> Not a side project. 
            Not a hobby. My life's work. And we're just getting started.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
