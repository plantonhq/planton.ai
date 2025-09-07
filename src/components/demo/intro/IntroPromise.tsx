'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles, Cloud } from 'lucide-react';

export default function IntroPromise() {
  return (
    <div className="h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
        >
          <Sparkles className="w-4 h-4" />
          The Solution
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
          PlantonCloud makes
          <br />
          multi-cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">simple</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          One platform to deploy anywhere. Build once, deploy everywhere with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600 mb-3 mx-auto" />
            <h3 className="font-bold text-gray-900 mb-2">Deploy in Minutes</h3>
            <p className="text-gray-600 text-sm">Not months. Pre-built blocks for instant infrastructure.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6"
          >
            <CheckCircle className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h3 className="font-bold text-gray-900 mb-2">Zero Lock-in</h3>
            <p className="text-gray-600 text-sm">Open-source core. Your code, your clouds, your control.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6"
          >
            <CheckCircle className="w-10 h-10 text-purple-600 mb-3 mx-auto" />
            <h3 className="font-bold text-gray-900 mb-2">Enterprise Ready</h3>
            <p className="text-gray-600 text-sm">Built-in security, compliance, and governance from day one.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-center gap-8">
              <div className="opacity-80">
                <Cloud className="h-10 w-10 text-orange-500" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">P</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="opacity-80">
                <Cloud className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">Unified deployment across all clouds</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
