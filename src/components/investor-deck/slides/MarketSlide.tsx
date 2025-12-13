'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export default function MarketSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <TrendingUp className="w-12 h-12 text-purple-600" />
          <h2 className="text-4xl font-bold text-gray-900">Market Opportunity</h2>
        </div>
        
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="text-6xl font-bold text-purple-600 mb-4">
              $150B
            </div>
            <div className="text-xl text-gray-600">
              Annual cloud infrastructure spending
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            <span className="font-bold">Every software company</span> needs DevOps
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl text-gray-700 leading-relaxed"
          >
            DevOps tools market growing at <span className="font-bold text-purple-600">18% CAGR</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-4 text-xl text-gray-500 italic"
          >
            Capturing 1% = $1.5B revenue opportunity
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
