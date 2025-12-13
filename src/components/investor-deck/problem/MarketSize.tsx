'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target } from 'lucide-react';
import MetricCard from '../shared/MetricCard';

export default function MarketSize() {
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
            The Market Opportunity
          </h1>
          <p className="text-xl text-gray-300">
            Big enough to matter, focused enough to win
          </p>
        </motion.div>

        {/* Bottom-up TAM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Bottom-Up TAM Calculation
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">50,000</div>
              <div className="text-sm text-gray-600">
                Mid-size companies using DevOps tools globally
              </div>
            </div>
            <div className="flex items-center justify-center text-2xl text-gray-400">×</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">2%</div>
              <div className="text-sm text-gray-600">
                Conservative market share target
              </div>
            </div>
            <div className="flex items-center justify-center text-2xl text-gray-400">×</div>
          </div>

          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-violet-600 mb-2">$100K ARR</div>
            <div className="text-sm text-gray-600">Average revenue per customer</div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-600 mb-2">$100M ARR</div>
              <div className="text-lg text-gray-700">Potential at 2% market share</div>
              <div className="text-sm text-gray-500 mt-2">
                → <strong>$1B+ valuation</strong> at 10x ARR multiple
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top-down validation */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MetricCard
              value="$200B+"
              label="Cloud Infrastructure Market (annual)"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MetricCard
              value="$10B+"
              label="DevOps Tools Market (annual)"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <MetricCard
              value="$1-5B"
              label="Our Addressable Segment"
            />
          </motion.div>
        </div>

        {/* Comparisons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-violet-400" />
            <h4 className="text-xl font-bold text-white">Comparable Valuations</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-gray-300">
              <strong className="text-white">HashiCorp:</strong> $5B+ valuation (Terraform, multi-cloud IaC)
            </div>
            <div className="text-gray-300">
              <strong className="text-white">Pulumi:</strong> $1B+ valuation (Modern IaC platform)
            </div>
            <div className="text-gray-300">
              <strong className="text-white">Temporal:</strong> $1.5B valuation (Workflow orchestration)
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          The prize is worth the fight →
        </motion.div>
      </div>
    </div>
  );
}
