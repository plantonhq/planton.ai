'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Target, MessageCircle } from 'lucide-react';

export default function DesignPartners() {
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
            Pipeline & Momentum
          </h1>
          <p className="text-xl text-gray-300">
            Building traction, expanding reach
          </p>
        </motion.div>

        {/* Current State */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
          >
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">1-5</h3>
            <p className="text-gray-300 mb-2">Paying Customers</p>
            <p className="text-sm text-gray-400">
              Production usage. Active deployments. Strong retention signals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <MessageCircle className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Active</h3>
            <p className="text-gray-300 mb-2">Prospect Conversations</p>
            <p className="text-sm text-gray-400">
              IT consulting firms. Small product companies. Enterprise pilots.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Target className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Trials</h3>
            <p className="text-gray-300 mb-2">Design Partner Pilots</p>
            <p className="text-sm text-gray-400">
              Testing platform. Providing feedback. Shaping roadmap.
            </p>
          </motion.div>
        </div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Geographic Strategy
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-lg font-bold text-violet-600 mb-2">India (Current)</div>
              <p className="text-sm text-gray-700 mb-3">
                Proving ground. First customers. Learning and iteration.
              </p>
              <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                ✓ Active
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-blue-600 mb-2">US (Primary Target)</div>
              <p className="text-sm text-gray-700 mb-3">
                Largest market. Scale focus. Next 6-12 months with funding.
              </p>
              <div className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                Next Phase
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-purple-600 mb-2">Global (Long-term)</div>
              <p className="text-sm text-gray-700 mb-3">
                Follow US success. International expansion. 12-18 months.
              </p>
              <div className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                Future
              </div>
            </div>
          </div>
        </motion.div>

        {/* Segment Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Segment Validation: What's Resonating
          </h3>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-semibold">IT Consulting Firms</div>
                <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Strong
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Fastest sales cycle. Clear pain point. Immediate value. Channel partner potential.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-semibold">Small/Mid-Market SaaS</div>
                <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Testing
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Self-service potential. Need nurturing. Product-led growth opportunity.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-semibold">Enterprise</div>
                <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Opportunistic
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Long sales cycles. Need more features (SOC 2, single-tenant). Series A focus.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="bg-white rounded-xl p-6 inline-block">
            <p className="text-xl text-gray-800">
              <strong className="text-violet-600">Our product is ready. Now we need fuel for go-to-market.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
