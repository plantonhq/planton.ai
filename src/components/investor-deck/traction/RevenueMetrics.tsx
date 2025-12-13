'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users } from 'lucide-react';
import MetricCard from '../shared/MetricCard';

export default function RevenueMetrics() {
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
            Early Traction
          </h1>
          <p className="text-xl text-gray-300">
            Pre-revenue by VC standards, but validated PMF signal
          </p>
        </motion.div>

        {/* Current Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetricCard
              value="~$800"
              label="Monthly Recurring Revenue"
              trend="up"
              trendValue="Growing with customer adoption"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MetricCard
              value="1-5"
              label="Paying Customers"
              trendValue="Early adopters, strong retention"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MetricCard
              value="~$10K"
              label="Annual Run Rate"
              trendValue="Seed stage baseline"
            />
          </motion.div>
        </div>

        {/* Context and Framing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Honest Framing: What This Means
            </h3>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <strong className="text-gray-900">We're pre-revenue by typical VC standards.</strong> But this is deliberate. 
              We've spent 2+ years building product depth over optimizing for vanity metrics.
            </p>
            <p className="leading-relaxed">
              <strong className="text-gray-900">The signal that matters:</strong> Paying customers exist. 
              They're using the product in production. They're renewing. They're referring others.
            </p>
            <p className="leading-relaxed">
              <strong className="text-gray-900">For seed-stage dev tools, this is normal.</strong> Many successful 
              infrastructure startups raised seed with <strong>&lt;$1k MRR</strong>. Temporal, Pulumi, and others 
              all started here. The focus is product-market fit, not revenue scale.
            </p>
          </div>
        </motion.div>

        {/* Customer Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">
              What We're Tracking
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-lg font-semibold text-white mb-2">
                Customer Retention & Engagement
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Active usage in production environments</li>
                <li>• Multiple deployments per customer</li>
                <li>• Support tickets for feature requests (not bugs)</li>
                <li>• Referrals to other potential customers</li>
              </ul>
            </div>

            <div>
              <div className="text-lg font-semibold text-white mb-2">
                Pipeline & Momentum
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Active conversations with prospects</li>
                <li>• Design partner pilots underway</li>
                <li>• Geographic expansion (India → US)</li>
                <li>• Channel partner interest (IT consulting)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 inline-block">
            <p className="text-xl text-gray-200">
              <strong className="text-white">2+ years of product building →</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
