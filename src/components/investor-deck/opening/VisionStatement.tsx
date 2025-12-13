'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Bot, Cloud, ArrowRight } from 'lucide-react';

export default function VisionStatement() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-white">Planton Will Become</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              The Next Postman
            </span>
          </h1>
          <p className="text-2xl text-gray-300">
            With two audacious goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Goal 1: Cursor for DevOps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
          >
            <Bot className="w-16 h-16 text-blue-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              1. Cursor for DevOps
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              AI agent fleet that automates DevOps workflows
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-0.5 text-blue-400" />
                <span>Specialist agents, not generalist copilot</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-0.5 text-blue-400" />
                <span>CI/CD troubleshooter, AWS deployment, cost optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-0.5 text-blue-400" />
                <span>Built on our platform's multi-cloud knowledge graph</span>
              </div>
            </div>
          </motion.div>

          {/* Goal 2: Cloud Provider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
          >
            <Cloud className="w-16 h-16 text-violet-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              2. Software Cloud Provider
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Vercel for backend - simple, fast, cost-effective
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-0.5 text-violet-400" />
                <span>Software abstraction over rented infrastructure</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-0.5 text-violet-400" />
                <span>20% of services used 80% of time (containers, DBs, buckets)</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 mt-0.5 text-violet-400" />
                <span>Partner with Hetzner, OVH - focus on DX, not hardware</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <div className="mb-4">
            <Rocket className="w-12 h-12 text-violet-600 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why This Matters
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The DevOps tools market is <strong className="text-violet-600">$10B+</strong> and growing. 
            Every software company struggles with infrastructure. 
            The timing is perfect: AI breakthroughs enable automation, cloud complexity is at a breaking point, 
            and the next wave of dev tools is being built <strong className="text-violet-600">right now</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400 text-lg"
        >
          Let me show you why this isn't crazy →
        </motion.div>
      </div>
    </div>
  );
}
