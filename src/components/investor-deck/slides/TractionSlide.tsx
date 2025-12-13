'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2 } from 'lucide-react';

export default function TractionSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <BarChart3 className="w-12 h-12 text-green-600" />
          <h2 className="text-4xl font-bold text-gray-900">Where We Are</h2>
        </div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Production Platform
              </div>
              <div className="text-xl text-gray-600">
                Full-featured DevOps automation platform ready to scale
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Early Revenue
              </div>
              <div className="text-xl text-gray-600">
                $800 MRR with paying customers validating the product
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-4"
          >
            <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                $500K+ Personal Investment
              </div>
              <div className="text-xl text-gray-600">
                3+ years building with deep founder commitment
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 text-xl text-gray-500 italic text-center"
          >
            We&apos;ve proven we can build. Now we need fuel to scale.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
