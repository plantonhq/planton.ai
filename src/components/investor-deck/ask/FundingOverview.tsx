'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, FileText, TrendingUp, CheckCircle } from 'lucide-react';

export default function FundingOverview() {
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
            The Ask
          </h1>
          <p className="text-xl text-gray-300">
            $500k to fuel 18 months of execution
          </p>
        </motion.div>

        {/* Funding Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Funding Terms
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="text-sm text-gray-500 mb-2">Amount Raising</div>
              <div className="text-4xl font-bold text-violet-600 mb-1">$500K</div>
              <div className="text-xs text-gray-500">Seed round, institutional capital</div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Instrument</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">SAFE</div>
              <div className="text-xs text-gray-500">Simple Agreement for Future Equity</div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Valuation Cap</div>
              <div className="text-4xl font-bold text-violet-600 mb-1">$6-8M</div>
              <div className="text-xs text-gray-500">Target ~$7M cap</div>
            </div>
          </div>

          <div className="bg-violet-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Why a SAFE?</h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Standard for pre-seed/seed:</strong> Over 80% of early-stage deals use SAFEs. 
              Investor-friendly, clean, defers pricing to Series A.
            </p>
          </div>
        </motion.div>

        {/* Valuation Justification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Valuation Justification: $6-8M Cap
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Market Benchmarks</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Median pre-seed valuation: <strong className="text-white">$5-6M</strong> (2024)</li>
                <li>• We're slightly above median for good reason</li>
                <li>• Real product + team + revenue = premium justified</li>
                <li>• Silicon Valley seed rounds: $7-14M typical range</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Our Unique Position</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong className="text-white">2+ years</strong> of development (not idea stage)</li>
                <li>• <strong className="text-white">150+</strong> components built and tested</li>
                <li>• <strong className="text-white">$500k+</strong> already invested personally</li>
                <li>• <strong className="text-white">Real team</strong> paid for 2 years</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4 mt-6">
            <p className="text-gray-200 text-sm">
              <strong className="text-white">Key insight:</strong> I paid $500k for my equity. 
              At $6-8M cap, investors pay a similar per-share price. 
              <strong className="text-white"> I'm not asking investors to pay more than I did.</strong>
            </p>
          </div>
        </motion.div>

        {/* Why SAFE is Standard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6">
            <FileText className="w-8 h-8 text-violet-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Simple</h4>
            <p className="text-sm text-gray-600">
              No complex terms. Standard Y Combinator document. Fast to execute.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Investor-Friendly</h4>
            <p className="text-sm text-gray-600">
              Converts to equity at next priced round. Familiar to all VCs and angels.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Market Standard</h4>
            <p className="text-sm text-gray-600">
              80%+ of pre-seed/seed use SAFEs. This is what investors expect.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          How we'll use the capital →
        </motion.div>
      </div>
    </div>
  );
}
