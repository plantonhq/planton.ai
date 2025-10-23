'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function InfraChartsImpact() {
  return (
    <div className="h-full overflow-y-auto flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-6xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mb-6"
            >
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              Real Customer Impact
            </h1>
            <p className="text-xl text-gray-600">
              IT Consulting Agency • Paying Customer
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 text-center border-2 border-violet-200 demo-card-shadow"
            >
              <Users className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <div className="text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-gray-600 font-medium text-lg">Different Clients</div>
              <p className="text-sm text-gray-500 mt-2">Same chart, different parameters</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 text-center border-2 border-violet-200 demo-card-shadow"
            >
              <Clock className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <div className="text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                ~20 min
              </div>
              <div className="text-gray-600 font-medium text-lg">Complete Infrastructure</div>
              <p className="text-sm text-gray-500 mt-2">Was: 3+ weeks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 text-center border-2 border-violet-200 demo-card-shadow"
            >
              <CheckCircle2 className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <div className="text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                &lt;1 hr
              </div>
              <div className="text-gray-600 font-medium text-lg">Code to Live URL</div>
              <p className="text-sm text-gray-500 mt-2">In client&apos;s domain</p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-10 text-white text-center demo-card-shadow"
          >
            <div className="text-6xl mb-4 opacity-50">&ldquo;</div>
            <p className="text-2xl font-medium italic leading-relaxed mb-4">
              Every single time they need to duplicate terraform code
            </p>
            <p className="text-3xl font-black">
              → SOLVED
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-xl p-6 border-2 border-violet-200">
              <h3 className="font-bold text-lg mb-3 text-violet-900">Before Infra Charts</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>3+ weeks per client setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Copy-paste Terraform code every time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Error-prone manual configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Lost deals due to slow delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border-2 border-violet-300">
              <h3 className="font-bold text-lg mb-3 text-violet-900">With Infra Charts</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>20 minutes to production infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Reusable chart across all clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Reliable, tested deployments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Win more deals with fast delivery</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

