'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Palette, Globe } from 'lucide-react';

export default function TeamSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <Users className="w-12 h-12 text-indigo-600" />
          <h2 className="text-4xl font-bold text-gray-900">The Team</h2>
        </div>
        
        <div className="space-y-8">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Swarup Donepudi
                </div>
                <div className="text-lg text-gray-600 mb-3">
                  Founder & CEO
                </div>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>• 10+ years DevOps engineering in Silicon Valley</li>
                  <li>• Built entire platform from ground up</li>
                  <li>• $500K+ personal investment over 3+ years</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Core Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-blue-600" />
                <div className="font-bold text-gray-900">Suresh Ataluri</div>
              </div>
              <div className="text-sm text-gray-600">
                Co-Founder • Experienced Full Stack Engineer
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-6 h-6 text-purple-600" />
                <div className="font-bold text-gray-900">Irshad Ahmed</div>
              </div>
              <div className="text-sm text-gray-600">
                Lead UX Designer • 5 years
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-green-600" />
                <div className="font-bold text-gray-900">Satish Lakhani</div>
              </div>
              <div className="text-sm text-gray-600">
                Full-Stack Engineer
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-orange-600" />
                <div className="font-bold text-gray-900">Avinash Sana</div>
              </div>
              <div className="text-sm text-gray-600">
                Operations & Business Dev
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-lg text-gray-500 italic pt-4"
          >
            Building from India, serving the world
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
