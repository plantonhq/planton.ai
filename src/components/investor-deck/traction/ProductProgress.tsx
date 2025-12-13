'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Code2, Layers, CheckCircle } from 'lucide-react';
import MetricCard from '../shared/MetricCard';

export default function ProductProgress() {
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
            Product Progress
          </h1>
          <p className="text-xl text-gray-300">
            2+ years, $500k invested, significant technical achievement
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetricCard
              value="150+"
              label="Deployment Components"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MetricCard
              value="2x"
              label="IaC Modules Per Component"
              trendValue="Pulumi + Terraform"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MetricCard
              value="2+"
              label="Years Building"
              trendValue="Deep product maturity"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <MetricCard
              value="$500K+"
              label="Personal Investment"
              trendValue="Extreme commitment"
            />
          </motion.div>
        </div>

        {/* Platform Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Platform Built
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-violet-600" />
                <h4 className="text-lg font-bold text-gray-900">InfraHub</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>150+ deployment components across all clouds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Pulumi + Terraform modules for each</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Protocol Buffer APIs with validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Infra Charts for orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>DAG-based dependency resolution</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-violet-600" />
                <h4 className="text-lg font-bold text-gray-900">ServiceHub</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Git-to-prod CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>BuildPacks for containerization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>One-click deployments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>GitHub integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Rollback capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Technical Depth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              What Makes This Hard to Replicate
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-gray-300">
              <strong className="text-white block mb-2">Time Investment:</strong>
              2+ years of full-time work. Not something competitors build in months.
            </div>
            <div className="text-gray-300">
              <strong className="text-white block mb-2">Domain Expertise:</strong>
              Deep knowledge of AWS, GCP, Azure, K8s required for each component.
            </div>
            <div className="text-gray-300">
              <strong className="text-white block mb-2">Battle Testing:</strong>
              Real customer deployments reveal edge cases. Our modules are proven.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center text-gray-400"
        >
          Open source growth and community →
        </motion.div>
      </div>
    </div>
  );
}
