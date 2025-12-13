'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Rocket } from 'lucide-react';

export default function HowItWorksSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full space-y-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-2 gap-12">
          {/* InfraHub */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">InfraHub</h3>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Provision infrastructure across <span className="font-semibold">any cloud</span>
            </p>
            
            <ul className="space-y-3 text-lg text-gray-600">
              <li>• Multi-cloud automation</li>
              <li>• Unified API for all providers</li>
              <li>• Production-ready templates</li>
            </ul>
          </motion.div>
          
          {/* ServiceHub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">ServiceHub</h3>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Deploy services <span className="font-semibold">like Vercel</span>, but for backend
            </p>
            
            <ul className="space-y-3 text-lg text-gray-600">
              <li>• No-code CI/CD pipelines</li>
              <li>• Git push to deploy</li>
              <li>• Full control with Tekton</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xl text-gray-500 italic pt-8"
        >
          Complete DevOps automation from infrastructure to deployment
        </motion.div>
      </motion.div>
    </div>
  );
}
