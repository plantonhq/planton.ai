'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Building2 } from 'lucide-react';

export default function PainPoints() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Who Feels This Pain?
          </h1>
          <p className="text-xl text-gray-300">
            Different companies, same problem: DevOps is too hard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* IT Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              IT Consulting Agencies
            </h3>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">Pain Points:</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    <strong>3+ weeks</strong> setup delays per client project
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    <strong>Lost deals</strong> due to slow delivery
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    Client onboarding <strong>delays</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-500/20 pt-4">
              <div className="text-sm text-gray-400 mb-2">What They Need:</div>
              <p className="text-gray-300 text-sm">
                Quick infrastructure bootstrapping. Production-ready in minutes, not weeks.
              </p>
            </div>
          </motion.div>

          {/* Small Product Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Zap className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Small Product Companies
            </h3>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">Pain Points:</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    Can't afford <strong>$150K+/year</strong> DevOps hire
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    Developers spending <strong>40% time</strong> on ops
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    Infrastructure becomes <strong>scaling bottleneck</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-violet-500/20 pt-4">
              <div className="text-sm text-gray-400 mb-2">What They Need:</div>
              <p className="text-gray-300 text-sm">
                Self-service platform. No DevOps expertise needed. Like Vercel, but for backend.
              </p>
            </div>
          </motion.div>

          {/* Established Product Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6"
          >
            <Building2 className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Established Enterprises
            </h3>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">Pain Points:</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    <strong>73%</strong> have compliance gaps
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    <strong>28 security incidents/year</strong> from misconfigs
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-red-400 mt-1">•</div>
                  <div className="text-gray-300">
                    <strong>Zero visibility</strong> into infrastructure state
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-orange-500/20 pt-4">
              <div className="text-sm text-gray-400 mb-2">What They Need:</div>
              <p className="text-gray-300 text-sm">
                Governance, visibility, compliance. Golden paths and guardrails at scale.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="bg-white rounded-xl p-6 inline-block">
            <p className="text-xl text-gray-800">
              <strong className="text-violet-600">The Insight:</strong> Different companies, 
              same core problem - DevOps is fragmented and time-consuming
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
