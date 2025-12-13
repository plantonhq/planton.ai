'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, PieChart, TrendingUp, Shield } from 'lucide-react';
import MetricCard from '../shared/MetricCard';

export default function CommitmentProof() {
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
            Proof of Commitment
          </h1>
          <p className="text-xl text-gray-300">
            $500k+ invested, 2 years full-time, team paid throughout
          </p>
        </motion.div>

        {/* Investment Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetricCard
              value="$500K+"
              label="Personal Investment (2 years)"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MetricCard
              value="2+"
              label="Years Full-Time Building"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MetricCard
              value="3"
              label="Full-Time Team Members Paid"
            />
          </motion.div>
        </div>

        {/* Cap Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Cap Table: Conservative Dilution
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-violet-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">80%</div>
              <div className="text-sm text-gray-700 font-semibold">Founder</div>
              <div className="text-xs text-gray-500 mt-1">Primary equity holder</div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15%</div>
              <div className="text-sm text-gray-700 font-semibold">Co-founder</div>
              <div className="text-xs text-gray-500 mt-1">Meaningful alignment</div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5%</div>
              <div className="text-sm text-gray-700 font-semibold">Team Pool</div>
              <div className="text-xs text-gray-500 mt-1">Reserved for key hires</div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Current runway:</strong> Entirely self-funded. No external capital yet. 
              This will be our first institutional funding round.
            </p>
          </div>
        </motion.div>

        {/* The Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              I Paid More Than We're Asking You To Pay
            </h3>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed mb-4">
            At a <strong className="text-white">$6-8M valuation cap</strong>, I essentially paid a similar price 
            per share for my equity as we're asking investors to pay.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I invested $500k+ of personal savings. Paid a full team for 2 years. This is my life's work. 
            <strong className="text-white"> I have more skin in the game than anyone else ever will.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          Now let's talk market and go-to-market →
        </motion.div>
      </div>
    </div>
  );
}
