'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, GitBranch, Zap, Shield } from 'lucide-react';

export default function InfraHubExplainer() {
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
            InfraHub: Infrastructure as LEGO Blocks
          </h1>
          <p className="text-xl text-gray-300">
            150+ components • Form-based configuration • Orchestrated deployment
          </p>
        </motion.div>

        {/* LEGO Blocks Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Box className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Individual LEGO Blocks
            </h3>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Each deployment component is a standardized LEGO block. 
            PostgresKubernetes. AwsRdsInstance. GcpCloudSql. RedisKubernetes. 
            150+ blocks covering all major cloud providers.
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-sm font-semibold text-blue-700">PostgresK8s</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 text-center">
              <div className="text-sm font-semibold text-orange-700">AWS RDS</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="text-sm font-semibold text-green-700">GCP GKE</div>
            </div>
            <div className="bg-violet-50 rounded-lg p-3 text-center">
              <div className="text-sm font-semibold text-violet-700">RedisK8s</div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Forms not Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Zap className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Forms Instead of Code
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Developers fill out forms with popular configuration knobs. 
              No Terraform or Pulumi expertise needed.
            </p>
            <p className="text-sm text-gray-400">
              Based on Pareto Principle: 20% of configs used 80% of time
            </p>
          </motion.div>

          {/* Validation Before Deployment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Shield className="w-10 h-10 text-violet-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Validation Before Deployment
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Proto-validate catches errors before any cloud API calls. 
              Instant feedback, no wasted time.
            </p>
            <p className="text-sm text-gray-400">
              90%+ of errors caught locally, saving time and money
            </p>
          </motion.div>
        </div>

        {/* Infra Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Infra Charts: Orchestrated LEGO Sets
            </h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Production environments need many interconnected resources. 
            Infra Charts package multiple LEGO blocks as reusable templates with dependency orchestration.
          </p>
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-2">Example: AWS ECS Environment Chart</div>
            <div className="text-gray-300">
              7 parameters → 9 resources → 20 minutes → Production ready
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center text-gray-400"
        >
          Built on open source foundation →
        </motion.div>
      </div>
    </div>
  );
}
