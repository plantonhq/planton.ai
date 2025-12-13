'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cloud, Bot, TrendingUp } from 'lucide-react';

export default function WhyNow() {
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
            Why Now?
          </h1>
          <p className="text-xl text-gray-300">
            The perfect storm for DevOps automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Cloud Complexity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
          >
            <Cloud className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Cloud Complexity at Breaking Point
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              3 hyperscalers. 100s of services each. Every company choosing between:
            </p>
            <div className="space-y-2 text-gray-400">
              <div>• AWS: 200+ services, steep learning curve</div>
              <div>• GCP: Different paradigm, vendor lock-in fears</div>
              <div>• Azure: Microsoft ecosystem complexity</div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              <strong className="text-white">The insight:</strong> Companies don't want 200 services. 
              They want the 20 that matter.
            </p>
          </motion.div>

          {/* AI Breakthroughs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
          >
            <Bot className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Enables DevOps Automation
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              DeepSeek, agent architectures, and specialized AI make automation possible:
            </p>
            <div className="space-y-2 text-gray-400">
              <div>• GitHub Copilot: $100M+ ARR in 2 years</div>
              <div>• Cursor: Forked VSCode, built AI layer</div>
              <div>• Multi-agent systems: Specialist &gt; Generalist</div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              <strong className="text-white">The insight:</strong> AI for DevOps is now feasible. 
              We have the foundation to build on.
            </p>
          </motion.div>

          {/* Open Source Maturity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
          >
            <Sparkles className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Open Source Foundation Ready
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Kubernetes, Terraform, Pulumi create the building blocks:
            </p>
            <div className="space-y-2 text-gray-400">
              <div>• Kubernetes: Standard for container orchestration</div>
              <div>• Terraform/Pulumi: IaC is mature and proven</div>
              <div>• Protocol Buffers: Schema definition at scale</div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              <strong className="text-white">The insight:</strong> We don't reinvent the wheel. 
              We build the opinionated layer on top.
            </p>
          </motion.div>

          {/* Market Shift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
          >
            <TrendingUp className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Market Momentum Building
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cloud-agnostic tooling is the next wave:
            </p>
            <div className="space-y-2 text-gray-400">
              <div>• Vercel: $3B valuation for frontend DX</div>
              <div>• Railway, Render, Fly.io: Simplified cloud gaining traction</div>
              <div>• Postman: API tools → $5.6B valuation</div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              <strong className="text-white">The insight:</strong> Developer experience tools 
              that reduce complexity win big.
            </p>
          </motion.div>
        </div>

        {/* FOMO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <p className="text-2xl font-bold text-gray-900 mb-3">
            The Next Wave of Dev Tools Is Being Built <span className="text-violet-600">Right Now</span>
          </p>
          <p className="text-lg text-gray-700">
            This is the perfect moment to build the DevOps automation platform. 
            The technology is ready. The market is ready. The timing is right.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
