'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Code, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function UseOfFunds() {
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
            Use of Funds
          </h1>
          <p className="text-xl text-gray-300">
            18-month runway with clear allocation
          </p>
        </motion.div>

        {/* Pie Chart Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Capital Allocation
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white mb-4">
                <div>
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-xs">Engineering</div>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">$200K</div>
              <div className="text-sm text-gray-600">Product Development</div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-4">
                <div>
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-xs">Sales & Marketing</div>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">$200K</div>
              <div className="text-sm text-gray-600">Go-to-Market</div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mb-4">
                <div>
                  <div className="text-3xl font-bold">20%</div>
                  <div className="text-xs">Operations</div>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">$100K</div>
              <div className="text-sm text-gray-600">Infrastructure & Ops</div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Code className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">
              40% Engineering ($200K)
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong className="text-white">Senior ML Engineer</strong>
                <div className="text-xs text-gray-400">AI agent fleet R&D and development</div>
              </div>
              <div>
                <strong className="text-white">Senior SRE</strong>
                <div className="text-xs text-gray-400">Cloud provider initiative (Hetzner integration)</div>
              </div>
              <div>
                <strong className="text-white">2 Additional Engineers</strong>
                <div className="text-xs text-gray-400">Expand product features and scale infrastructure</div>
              </div>
            </div>
          </motion.div>

          {/* Sales & Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <TrendingUp className="w-10 h-10 text-violet-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">
              40% Sales & Marketing ($200K)
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong className="text-white">US Market Entry</strong>
                <div className="text-xs text-gray-400">Conferences, partnerships, presence building</div>
              </div>
              <div>
                <strong className="text-white">Head of Sales/Growth</strong>
                <div className="text-xs text-gray-400">Hire by month 6-9 to scale GTM</div>
              </div>
              <div>
                <strong className="text-white">Developer Advocate</strong>
                <div className="text-xs text-gray-400">Community growth, content, evangelism</div>
              </div>
              <div>
                <strong className="text-white">Design Partner Program</strong>
                <div className="text-xs text-gray-400">Support early customers, gather feedback</div>
              </div>
            </div>
          </motion.div>

          {/* Operations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
          >
            <Shield className="w-10 h-10 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">
              20% Operations ($100K)
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong className="text-white">Cloud Infrastructure</strong>
                <div className="text-xs text-gray-400">Hetzner, hosting, database costs</div>
              </div>
              <div>
                <strong className="text-white">Compliance</strong>
                <div className="text-xs text-gray-400">SOC 2, ISO 27001 preparation</div>
              </div>
              <div>
                <strong className="text-white">Legal & Accounting</strong>
                <div className="text-xs text-gray-400">Corporate ops, IP protection</div>
              </div>
              <div>
                <strong className="text-white">Buffer</strong>
                <div className="text-xs text-gray-400">Contingencies, insurance</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Runway Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            18-Month Runway Breakdown
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Monthly Burn Rate</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Engineering (4 new hires + current team)</span>
                  <span className="font-semibold">~$18K/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Sales & Marketing (2 hires + programs)</span>
                  <span className="font-semibold">~$15K/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Operations & Infrastructure</span>
                  <span className="font-semibold">~$5K/mo</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 font-bold">
                  <span>Total Monthly Burn</span>
                  <span className="text-violet-600">~$38K/mo</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">Runway & Milestones</h4>
              <div className="bg-violet-50 rounded-lg p-4 mb-3">
                <div className="text-2xl font-bold text-violet-600 mb-1">18 months</div>
                <div className="text-sm text-gray-600">
                  Gets us to Series A readiness with clear milestones
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>AI agent MVP by month 6</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Planton Cloud beta by month 6</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>US GTM proven by month 9</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Both initiatives production-ready month 18</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          Detailed milestones and success metrics →
        </motion.div>
      </div>
    </div>
  );
}
