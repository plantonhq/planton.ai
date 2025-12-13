'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users as UsersIcon, Globe } from 'lucide-react';

export default function TheAskSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <Target className="w-12 h-12 text-green-600" />
          <h2 className="text-4xl font-bold text-gray-900">The Ask</h2>
        </div>
        
        <div className="space-y-10">
          {/* Amount */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="text-6xl font-bold text-green-600 mb-4">
              $500K
            </div>
            <div className="text-2xl text-gray-600">
              SAFE • Seed Round
            </div>
          </motion.div>
          
          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Use of Funds</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">Engineering</div>
                  <div className="text-sm text-gray-600">
                    Build AgentFleet (Cursor for DevOps)
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <Globe className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">Infrastructure</div>
                  <div className="text-sm text-gray-600">
                    Cloud provider platform development
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <UsersIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">Team</div>
                  <div className="text-sm text-gray-600">
                    Senior engineers, ML/AI talent
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <Target className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">Go-to-Market</div>
                  <div className="text-sm text-gray-600">
                    Enterprise sales, US expansion
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-xl text-gray-700 pt-8 font-medium"
          >
            18-month runway to reach Series A milestones
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
