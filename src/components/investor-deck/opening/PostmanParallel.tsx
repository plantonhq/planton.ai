'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, TrendingUp } from 'lucide-react';

export default function PostmanParallel() {
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
            The Postman Parallel
          </h1>
          <p className="text-xl text-gray-300">
            From Bangalore to the world: It's been done before
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Postman */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-bold text-orange-400">Postman</div>
              <span className="text-sm text-gray-400">2012 - Present</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Started in Bangalore</div>
                  <div className="text-sm text-gray-400">Chrome extension side project</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">30 Million Users</div>
                  <div className="text-sm text-gray-400">Pure word-of-mouth growth</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">98% of Fortune 500</div>
                  <div className="text-sm text-gray-400">Global enterprise adoption</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">$5.6B Valuation</div>
                  <div className="text-sm text-gray-400">From India to unicorn</div>
                </div>
              </div>
            </div>

            <div className="border-t border-orange-500/20 pt-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">The Problem:</strong> API development was fragmented. 
                Every developer struggled with testing APIs across different tools.
              </p>
            </div>
          </motion.div>

          {/* Planton */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-bold text-violet-400">Planton</div>
              <span className="text-sm text-gray-400">2023 - Present</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Started in India</div>
                  <div className="text-sm text-gray-400">Open source + SaaS platform</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Early Adopters</div>
                  <div className="text-sm text-gray-400">Growing community, paying customers</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Global DevOps Market</div>
                  <div className="text-sm text-gray-400">Targeting worldwide adoption</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Building for Scale</div>
                  <div className="text-sm text-gray-400">The journey begins</div>
                </div>
              </div>
            </div>

            <div className="border-t border-violet-500/20 pt-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">The Problem:</strong> DevOps is fragmented. 
                Every company struggles with infrastructure across different clouds.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 inline-block">
            <p className="text-xl text-gray-200">
              <strong className="text-white">The Insight:</strong> Postman made API development effortless.
              <br />
              <strong className="text-violet-400">We're doing that for DevOps.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
