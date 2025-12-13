'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Building } from 'lucide-react';

export default function PostmanComparison() {
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
            The Postman-Scale Dream
          </h1>
          <p className="text-xl text-gray-300">
            From Bangalore to global standard
          </p>
        </motion.div>

        {/* Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Postman Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8"
          >
            <div className="text-3xl font-bold text-orange-400 mb-6">Postman Journey</div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Side Project (2012)</div>
                  <div className="text-sm text-gray-400">Chrome extension in Bangalore</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Word of Mouth Growth</div>
                  <div className="text-sm text-gray-400">500k users → 30M users organically</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Enterprise Adoption</div>
                  <div className="text-sm text-gray-400">98% of Fortune 500 companies</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">$5.6B Valuation</div>
                  <div className="text-sm text-gray-400">Global standard for API development</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-orange-500/20">
              <div className="text-sm text-gray-400">
                <strong className="text-white">The Problem Solved:</strong> API development was fragmented. 
                Postman made it effortless.
              </div>
            </div>
          </motion.div>

          {/* Planton Journey */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
          >
            <div className="text-3xl font-bold text-violet-400 mb-6">Planton Journey</div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building className="w-6 h-6 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Open Source + SaaS (2023)</div>
                  <div className="text-sm text-gray-400">Platform in India for the world</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Bottom-Up Adoption</div>
                  <div className="text-sm text-gray-400">Developers discover → Teams adopt → Enterprises scale</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Global DevOps Standard</div>
                  <div className="text-sm text-gray-400">The goal: Every company doing DevOps</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-violet-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">$1B+ Potential</div>
                  <div className="text-sm text-gray-400">DevOps tools market opportunity</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-violet-500/20">
              <div className="text-sm text-gray-400">
                <strong className="text-white">The Problem Solving:</strong> DevOps is fragmented. 
                Planton makes it effortless.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Parallels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Parallels</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-violet-600 font-bold mb-2">Both Solve Fragmentation</div>
              <div className="text-sm text-gray-600">
                Postman: APIs<br />
                Planton: Cloud Infrastructure
              </div>
            </div>

            <div>
              <div className="text-violet-600 font-bold mb-2">Both From India</div>
              <div className="text-sm text-gray-600">
                Bangalore to the world.<br />
                Proving it can be done.
              </div>
            </div>

            <div>
              <div className="text-violet-600 font-bold mb-2">Both Developer-First</div>
              <div className="text-sm text-gray-600">
                Bottom-up adoption.<br />
                Love from developers.
              </div>
            </div>

            <div>
              <div className="text-violet-600 font-bold mb-2">Both Open Source Origin</div>
              <div className="text-sm text-gray-600">
                Community-driven growth.<br />
                Then commercial platform.
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Difference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            The Difference: We're Aiming From Day One
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed mb-4">
            Postman stumbled into greatness as a side project. We're building for this outcome deliberately. 
            We know the path. We've seen it done.
          </p>
          <p className="text-lg text-gray-300">
            <strong className="text-white">This is audacious.</strong> But so was building reusable rockets. 
            So was challenging the Fortune 500 from Bangalore. The bar for what's possible is higher than most people think.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center text-gray-400"
        >
          Now, let's talk about the team making this happen →
        </motion.div>
      </div>
    </div>
  );
}
