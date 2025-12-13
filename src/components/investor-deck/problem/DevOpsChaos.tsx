'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Layers, Clock } from 'lucide-react';

export default function DevOpsChaos() {
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
            The DevOps Chaos
          </h1>
          <p className="text-xl text-gray-300">
            Every company reinvents the same wheel
          </p>
        </motion.div>

        {/* The Fragmentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-violet-400" />
            Three Different Clouds, Three Different Experiences
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-orange-400 mb-3">AWS</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• CloudFormation syntax</div>
                <div>• IAM roles and policies</div>
                <div>• Security Groups</div>
                <div>• Parameter Groups</div>
                <div>• 200+ services to learn</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-blue-400 mb-3">GCP</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Deployment Manager</div>
                <div>• Cloud IAM</div>
                <div>• Authorized Networks</div>
                <div>• Configuration Flags</div>
                <div>• Different UI paradigm</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-cyan-400 mb-3">Azure</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• ARM templates</div>
                <div>• Azure AD</div>
                <div>• Firewall Rules</div>
                <div>• Server Parameters</div>
                <div>• Microsoft-specific terms</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">The Burden</h4>
            <p className="text-gray-300 leading-relaxed">
              Every company builds the same infrastructure. Kubernetes clusters. 
              Databases. Load balancers. CI/CD pipelines. The same patterns, 
              reinvented thousands of times.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <Clock className="w-8 h-8 text-red-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">The Cost</h4>
            <p className="text-gray-300 leading-relaxed">
              IT consulting firms: <strong className="text-white">3+ weeks per client project setup</strong>.
              Startups: <strong className="text-white">40% of developer time</strong> on operations.
              Enterprises: <strong className="text-white">73% have compliance gaps</strong>.
            </p>
          </div>
        </motion.div>

        {/* The Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <p className="text-2xl text-gray-700 italic mb-4">
            "We need infrastructure ready on day one, not week three."
          </p>
          <p className="text-sm text-gray-500">— Every IT Consulting Client</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          Same problem. Different variations. →
        </motion.div>
      </div>
    </div>
  );
}
