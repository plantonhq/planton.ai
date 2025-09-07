'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, GitBranch, Zap, Users } from 'lucide-react';

export default function IntroStakes() {
  return (
    <div className="h-full flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Current DevOps is a
            <span className="text-red-600"> nightmare</span>
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Tool Fragmentation</h3>
                <p className="text-gray-600">
                  10+ different tools for CI/CD, IaC, monitoring, each with its own learning curve
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Copy-Paste Hell</h3>
                <p className="text-gray-600">
                  Same infrastructure code duplicated across environments, teams can&apos;t share modules
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Security Afterthought</h3>
                <p className="text-gray-600">
                  Compliance and governance bolted on later, causing delays and vulnerabilities
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Tribal Knowledge</h3>
                <p className="text-gray-600">
                  Only a few engineers understand the entire system, creating bottlenecks
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 shadow-xl">
            <div className="space-y-4">
              {/* Broken pipeline visualization */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <GitBranch className="w-8 h-8 text-gray-400" />
                </div>
                <div className="flex-1 mx-4 h-2 bg-red-300 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 flex gap-2 items-center justify-center">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <XCircle className="w-4 h-4 text-red-600" />
                    <XCircle className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center opacity-50">
                  <Zap className="w-8 h-8 text-gray-300" />
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  <XCircle className="w-4 h-4" />
                  Pipeline Failed
                </div>
                <p className="text-gray-600 mt-2 text-sm">Error: Configuration mismatch across environments</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <Users className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Dev Team</p>
                  <p className="text-xs font-bold text-red-600">Blocked</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <Users className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Ops Team</p>
                  <p className="text-xs font-bold text-orange-600">Firefighting</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <Users className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Security</p>
                  <p className="text-xs font-bold text-red-600">Escalating</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
