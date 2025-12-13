'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, AlertCircle, CheckCircle } from 'lucide-react';

export default function AgentFleetExplainer() {
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
            Agent Fleet Architecture
          </h1>
          <p className="text-xl text-gray-300">
            Specialist agents collaborating, like a real DevOps team
          </p>
        </motion.div>

        {/* Example Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Example: Automated Troubleshooting Workflow
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-lg p-3 shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">Developer Pushes Code → Pipeline Fails</div>
                <p className="text-sm text-gray-600">
                  Standard deployment failure. Developer is blocked.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">CI/CD Agent Diagnoses</div>
                <p className="text-sm text-gray-600">
                  Reads build logs. Identifies: Docker build error - missing environment variable.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-violet-100 rounded-lg p-3 shrink-0">
                <Bot className="w-6 h-6 text-violet-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">Infra Agent Checks</div>
                <p className="text-sm text-gray-600">
                  Verifies: No resource constraints. Infrastructure is healthy. Problem is in build config.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 shrink-0">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">Cost Agent Suggests Optimization</div>
                <p className="text-sm text-gray-600">
                  "Fix deployed. By the way: Use spot instances for CI runners to save 60% on build costs."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">Developer Unblocked</div>
                <p className="text-sm text-gray-600">
                  Total time: 2 minutes. No manual DevOps intervention needed.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-3">Current State: R&D</h4>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Not production yet.</strong> We're in prototype phase. 
              Proof-of-concept working for simple scenarios.
            </p>
            <div className="text-sm text-gray-400">
              Goal: AI agent MVP by end of 2024 with funding
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-3">Market Validation</h4>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">We're not alone.</strong> Microsoft Azure Copilot agents, 
              Kubiya, Qovery all moving this direction.
            </p>
            <div className="text-sm text-gray-400">
              Trend confirms: AI for DevOps is the next wave
            </div>
          </div>
        </motion.div>

        {/* Why This Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Specialist Agents Win
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Research shows: In high-stakes domains like infrastructure management, 
            <strong className="text-white"> specialist AI agents outperform generalists</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Precision Matters</div>
              <div className="text-sm text-gray-400">
                Wrong infrastructure decisions cost money. Specialists have domain expertise.
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Reproducibility</div>
              <div className="text-sm text-gray-400">
                Narrow focus means consistent, reliable outputs. No hallucinations.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          Goal #2: Cloud provider strategy →
        </motion.div>
      </div>
    </div>
  );
}
