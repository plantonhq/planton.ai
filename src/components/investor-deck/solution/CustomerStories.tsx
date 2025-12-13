'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap } from 'lucide-react';
import QuoteCard from '../shared/QuoteCard';

export default function CustomerStories() {
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
            Early Customer Success
          </h1>
          <p className="text-xl text-gray-300">
            From weeks of setup to same-day deployments
          </p>
        </motion.div>

        {/* IT Consulting Agency Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              IT Consulting Agency Case Study
            </h3>
          </div>

          {/* Before/After */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-lg font-bold text-red-700 mb-3">Before Planton</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• 3+ weeks per client project setup</div>
                <div>• Manual infrastructure provisioning</div>
                <div>• Lost deals due to slow delivery</div>
                <div>• Client onboarding delays</div>
                <div>• Repetitive work for every project</div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-lg font-bold text-green-700 mb-3">After Planton</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• <strong>20 minutes</strong> per client deployment</div>
                <div>• Automated infrastructure with forms</div>
                <div>• Same-day client demos</div>
                <div>• Instant client onboarding</div>
                <div>• <strong>3 clients</strong> deployed in first month</div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-4 bg-violet-50 rounded-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">90%</div>
              <div className="text-sm text-gray-600">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Clients Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">&lt;1hr</div>
              <div className="text-sm text-gray-600">Code to Live URL</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <QuoteCard
            quote="We went from losing clients due to slow setup to impressing them with same-day infrastructure demos. Planton changed our business."
            author="IT Consulting Firm"
            role="Early Design Partner"
          />
        </motion.div>

        {/* Design Partners & Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <Clock className="w-10 h-10 text-blue-400 mb-4" />
            <div className="text-2xl font-bold text-white mb-2">1-5</div>
            <div className="text-gray-300">Paying Customers</div>
            <div className="text-sm text-gray-400 mt-2">~$800 MRR, strong retention</div>
          </div>

          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
            <Zap className="w-10 h-10 text-violet-400 mb-4" />
            <div className="text-2xl font-bold text-white mb-2">India</div>
            <div className="text-gray-300">Current Market</div>
            <div className="text-sm text-gray-400 mt-2">Proving ground, first customers</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
            <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
            <div className="text-2xl font-bold text-white mb-2">US Next</div>
            <div className="text-gray-300">Primary Target</div>
            <div className="text-sm text-gray-400 mt-2">Scale focus in 6-12 months</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 inline-block">
            <p className="text-xl text-gray-200">
              <strong className="text-white">Our product is ready.</strong> Now we need fuel for go-to-market →
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
