'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase, Zap, Building2 } from 'lucide-react';

export default function CustomerSegments() {
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
            Customer Segmentation
          </h1>
          <p className="text-xl text-gray-300">
            Three personas, clear priorities
          </p>
        </motion.div>

        {/* Segment Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* IT Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-10 h-10 text-blue-600" />
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                BEACHHEAD
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              IT Consulting
            </h3>
            <div className="text-sm text-gray-500 mb-4">Fastest Sales Cycle</div>

            <div className="space-y-3 mb-6">
              <div>
                <div className="text-xs text-gray-500 mb-1">Value Proposition</div>
                <div className="text-sm text-gray-700">
                  Speed to deploy client projects. Win more deals.
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">ACV Target</div>
                <div className="text-sm font-semibold text-gray-900">$10-50K</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Sales Cycle</div>
                <div className="text-sm font-semibold text-gray-900">2-4 weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Win Condition (Month 12)</div>
                <div className="text-sm font-semibold text-gray-900">10 consulting firms</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-700">
              <strong>Strategy:</strong> Channel partner program. Reseller agreements. 
              Enable firms to deploy for clients.
            </div>
          </motion.div>

          {/* Small/Mid-Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-10 h-10 text-violet-600" />
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                PLG FOCUS
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Small/Mid-Market
            </h3>
            <div className="text-sm text-gray-500 mb-4">Product-Led Growth</div>

            <div className="space-y-3 mb-6">
              <div>
                <div className="text-xs text-gray-500 mb-1">Value Proposition</div>
                <div className="text-sm text-gray-700">
                  Self-service DevOps without hiring expensive specialists
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">ACV Target</div>
                <div className="text-sm font-semibold text-gray-900">$20-100K</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Sales Cycle</div>
                <div className="text-sm font-semibold text-gray-900">4-8 weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Win Condition (Month 18)</div>
                <div className="text-sm font-semibold text-gray-900">50 teams using platform</div>
              </div>
            </div>

            <div className="bg-violet-50 rounded-lg p-3 text-xs text-gray-700">
              <strong>Strategy:</strong> Free tier. Self-serve signup. 
              Land-and-expand within organizations.
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Building2 className="w-10 h-10 text-orange-600" />
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                FUTURE
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Enterprise
            </h3>
            <div className="text-sm text-gray-500 mb-4">Longest Cycle, Highest Value</div>

            <div className="space-y-3 mb-6">
              <div>
                <div className="text-xs text-gray-500 mb-1">Value Proposition</div>
                <div className="text-sm text-gray-700">
                  Governance, compliance, visibility at scale
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">ACV Target</div>
                <div className="text-sm font-semibold text-gray-900">$100K+</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Sales Cycle</div>
                <div className="text-sm font-semibold text-gray-900">6-12 months</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Win Condition (Month 18)</div>
                <div className="text-sm font-semibold text-gray-900">3-5 enterprise pilots</div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-3 text-xs text-gray-700">
              <strong>Strategy:</strong> Design partners now. 
              Dedicated enterprise sales team at Series A.
            </div>
          </motion.div>
        </div>

        {/* Beachhead Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Beachhead: IT Consulting in India → SMBs in US
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            Start with consulting firms (fastest cycles, channel leverage). 
            Prove product works. Expand to US SMBs via product-led growth. 
            Move upmarket to enterprise as product matures.
          </p>
          <p className="text-gray-300">
            <strong className="text-white">Classic land-and-expand.</strong> Win small, prove value, scale big.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center text-gray-400"
        >
          Our competitive positioning →
        </motion.div>
      </div>
    </div>
  );
}
