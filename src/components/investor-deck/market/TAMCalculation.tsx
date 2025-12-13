'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Target } from 'lucide-react';

export default function TAMCalculation() {
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
            Total Addressable Market
          </h1>
          <p className="text-xl text-gray-300">
            Big enough to matter, focused enough to win
          </p>
        </motion.div>

        {/* Bottom-Up TAM (detailed) - already shown in Market Size, so reference it */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Bottom-Up Model
            </h3>
          </div>

          <div className="text-center mb-8">
            <div className="text-lg text-gray-700 mb-4">
              50,000 companies × 2% share × $100K ARR =
            </div>
            <div className="text-5xl font-bold text-violet-600 mb-2">
              $100M ARR
            </div>
            <div className="text-gray-600">
              → <strong className="text-gray-900">$1B+ valuation</strong> at 10x ARR multiple
            </div>
          </div>

          <div className="bg-violet-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Assumptions Validation</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>50,000 companies:</strong> SaaS companies, tech firms, enterprises with dev teams globally
              </div>
              <div>
                <strong>2% market share:</strong> Conservative for a category-defining product
              </div>
              <div>
                <strong>$100K ARR:</strong> Mid-market average (SMB: $20k, Enterprise: $200k+)
              </div>
              <div>
                <strong>10x multiple:</strong> Standard for B2B SaaS with strong growth
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top-Down Validation */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">$200B+</div>
            <div className="text-white font-semibold mb-1">Cloud Infrastructure</div>
            <div className="text-sm text-gray-400">Annual market size, growing 20%+ YoY</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-violet-400 mb-2">$10B+</div>
            <div className="text-white font-semibold mb-1">DevOps Tools</div>
            <div className="text-sm text-gray-400">CI/CD, IaC, monitoring, orchestration</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">$1-5B</div>
            <div className="text-white font-semibold mb-1">Our Segment</div>
            <div className="text-sm text-gray-400">Multi-cloud automation + AI + simplified cloud</div>
          </motion.div>
        </div>

        {/* Comparable Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Comparable Company Outcomes
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xl font-bold text-orange-400 mb-2">HashiCorp</div>
              <div className="text-2xl font-bold text-white mb-1">$5B+</div>
              <div className="text-xs text-gray-400">Terraform, multi-cloud IaC</div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xl font-bold text-blue-400 mb-2">Pulumi</div>
              <div className="text-2xl font-bold text-white mb-1">$1B+</div>
              <div className="text-xs text-gray-400">Modern IaC platform</div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-xl font-bold text-violet-400 mb-2">Temporal</div>
              <div className="text-2xl font-bold text-white mb-1">$1.5B</div>
              <div className="text-xs text-gray-400">Workflow orchestration</div>
            </div>
          </div>
        </motion.div>

        {/* Investor Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl p-6 text-center mt-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Target className="w-6 h-6 text-violet-600" />
            <h4 className="text-xl font-bold text-gray-900">Investor Takeaway</h4>
          </div>
          <p className="text-lg text-gray-700">
            The DevOps automation market is <strong className="text-violet-600">large enough for venture-scale outcomes</strong> and 
            <strong className="text-violet-600"> focused enough to build defensible position</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center text-gray-400"
        >
          How we'll capture this market →
        </motion.div>
      </div>
    </div>
  );
}
