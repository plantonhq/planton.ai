'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Terminal } from 'lucide-react';

export default function ProductOverview() {
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
            The Solution
          </h1>
          <p className="text-2xl text-violet-400 mb-4">
            Kubernetes-style consistency for all cloud infrastructure
          </p>
          <p className="text-lg text-gray-300">
            Same structure. Same workflow. Any cloud. Without abstraction.
          </p>
        </motion.div>

        {/* Restaurant Analogy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Restaurant Analogy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Imagine restaurants where every one has a completely different menu format, 
            ordering process, and terminology. You spend more energy figuring out how to order 
            than enjoying your meal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-violet-600">Planton is the standardized ordering system.</strong> No matter 
            which restaurant (cloud provider) you visit, the ordering experience is identical. 
            The dishes are provider-specific, but the structure is consistent.
          </p>
        </motion.div>

        {/* Three Layers */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">1. APIs</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Protocol Buffers define schemas with validation rules. 
              Auto-generated SDKs in multiple languages. 
              Published to Buf Schema Registry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Layers className="w-12 h-12 text-violet-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">2. IaC Modules</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Battle-tested Pulumi and Terraform modules. 
              Provider-specific but consistent patterns. 
              Open source for transparency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
          >
            <Terminal className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">3. CLI</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Orchestration layer that ties everything together. 
              Validates, maps, executes. 
              Same commands for any resource.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 inline-block">
            <p className="text-xl text-gray-200">
              150+ deployment components across AWS, GCP, Azure, Kubernetes →
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
