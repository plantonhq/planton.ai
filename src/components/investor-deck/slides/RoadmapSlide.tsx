'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Shield, Bot, Cloud } from 'lucide-react';

export default function RoadmapSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <Map className="w-12 h-12 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900">Roadmap</h2>
        </div>
        
        <div className="space-y-8">
          {/* Current */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md"
          >
            <div className="text-sm font-bold text-gray-400 w-20">TODAY</div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                DevOps in a Box
              </div>
              <div className="text-lg text-gray-600">
                InfraHub + ServiceHub providing complete automation
              </div>
            </div>
          </motion.div>
          
          {/* Next: Secrets Manager */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200"
          >
            <div className="text-sm font-bold text-purple-600 w-20">NEXT</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900">
                  Secrets Manager
                </div>
              </div>
              <div className="text-lg text-gray-600">
                Unified secrets management across all environments
              </div>
            </div>
          </motion.div>
          
          {/* Then: Agent Fleet */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200"
          >
            <div className="text-sm font-bold text-blue-600 w-20">2026</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Bot className="w-6 h-6 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900">
                  AgentFleet: Cursor for DevOps
                </div>
              </div>
              <div className="text-lg text-gray-600">
                AI agents automating DevOps workflows end-to-end
              </div>
            </div>
          </motion.div>
          
          {/* Future: Cloud Provider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-start gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200"
          >
            <div className="text-sm font-bold text-green-600 w-20">BEYOND</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Cloud className="w-6 h-6 text-green-600" />
                <div className="text-2xl font-bold text-gray-900">
                  Cloud Provider
                </div>
              </div>
              <div className="text-lg text-gray-600">
                First: Software layer (Hetzner, etc.) → Eventually: Own hardware
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
