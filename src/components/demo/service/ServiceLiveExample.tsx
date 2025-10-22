'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Zap, Clock, TrendingUp } from 'lucide-react';

export default function ServiceLiveExample() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Live Service Example</h2>
        <p className="text-gray-600 mt-1">
          Your service is now live and serving production traffic
        </p>
      </div>

      <div className="flex-1 overflow-auto bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto p-8">
          {/* Service card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mb-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Billing Service</h3>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
              <p className="text-purple-100">Java Spring Boot - Payment Processing API</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Live URL */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Live URL
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 font-mono text-violet-600 text-sm font-semibold">
                    https://billing-api.acmecorp.com
                  </div>
                  <button className="px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-colors flex items-center gap-2 shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </button>
                </div>
              </div>

              {/* Deployment details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-gray-900">No Dockerfile</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Deployed using BuildPacks with automatic Java runtime detection and optimization.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">No GitHub Actions</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Platform-managed CI/CD handles all builds and deployments automatically.
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-violet-600" />
                    <span className="text-xs font-semibold text-violet-700">Requests</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1.2M</div>
                  <div className="text-xs text-gray-600">Last 24h</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700">Latency</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">45ms</div>
                  <div className="text-xs text-gray-600">p95</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-700">Uptime</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-600">30 days</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-semibold text-orange-700">Deploys</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">47</div>
                  <div className="text-xs text-gray-600">This month</div>
                </motion.div>
              </div>

              {/* Configuration summary */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Service Configuration</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Repository</div>
                    <div className="text-gray-900 font-mono">acmecorp-engineering/billing-service</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Branch</div>
                    <div className="text-gray-900 font-mono">main</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Build Method</div>
                    <div className="text-gray-900">BuildPacks (Java)</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Deployment Target</div>
                    <div className="text-gray-900">AWS EKS (us-east-1)</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Secrets Backend</div>
                    <div className="text-gray-900">AWS Secrets Manager</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">SSL Certificate</div>
                    <div className="text-gray-900">Auto-managed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

