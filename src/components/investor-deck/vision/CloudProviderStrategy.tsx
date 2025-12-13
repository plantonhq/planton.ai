'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Layers, DollarSign } from 'lucide-react';

export default function CloudProviderStrategy() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">Goal #2:</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Software Cloud Provider
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Vercel for backend - simple, fast, cost-effective
          </p>
        </motion.div>

        {/* The Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Insight: Why Be the Delivery Vehicle?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our original goal: Create a delivery vehicle that takes software from developers and deploys 
            it to the cloud. Noble, but limited.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong className="text-violet-600">The Elon Musk question:</strong> Question everything from first principles. 
            Why does there need to be an external delivery vehicle? Why aren't cloud providers offering this themselves?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-violet-600">The answer:</strong> Why be the delivery vehicle when you can be the hotel? 
            Become the cloud provider ourselves. Control the full stack for superior DX.
          </p>
        </motion.div>

        {/* Software Cloud Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Software Cloud Provider Model (NOT Hardware)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-white font-semibold mb-3">What We Build:</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Control plane (API layer)</li>
                <li>• Developer experience (forms, CLI, UI)</li>
                <li>• Intelligent placement engine</li>
                <li>• Unified networking</li>
                <li>• Billing and metering</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-3">What We Rent:</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Infrastructure from Hetzner, OVH, Scaleway</li>
                <li>• Global regions and data centers</li>
                <li>• Hardware and network</li>
                <li>• 24/7 operations handled by providers</li>
                <li>• Variable cost model (pay as customers use)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-white">Our competitive advantage is 100% software:</strong> Control plane abstraction, 
              opinionated service catalog, integrated CI/CD, superior DX. Not infrastructure margins.
            </p>
          </div>
        </motion.div>

        {/* The Kirkland Model */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
          >
            <Server className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              The "Kirkland Cloud" Model
            </h4>
            <p className="text-gray-300 mb-4">
              Curate <strong className="text-white">20% of services</strong> used <strong className="text-white">80% of time</strong>:
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div>• Containers (ECS-like service)</div>
              <div>• Managed DBs (Postgres, MySQL, Redis)</div>
              <div>• Object Storage (S3-compatible)</div>
              <div>• Load Balancers & DNS</div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Not 200 AWS services. Just the essentials that actually matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6"
          >
            <DollarSign className="w-10 h-10 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Why This Works Financially
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong className="text-white">Provider costs:</strong> 30-40% gross margin
              </div>
              <div>
                <strong className="text-white">Our margin:</strong> 30-40% on top
              </div>
              <div>
                <strong className="text-white">Pricing:</strong> 2-3x provider costs, still cheaper than AWS
              </div>
              <div className="pt-2 border-t border-green-500/20">
                <strong className="text-white">Compete on value:</strong> DX + speed + simplicity, 
                not raw compute pricing
              </div>
            </div>
          </motion.div>
        </div>

        {/* Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl p-6"
        >
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Market Validation: Render, Railway, Fly.io
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            These companies prove the model works. Render raised $50M Series B serving 500k+ developers. 
            Railway and Fly.io growing rapidly. They all build software cloud providers on rented infrastructure. 
            The demand for simpler clouds is real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          Two-year execution roadmap →
        </motion.div>
      </div>
    </div>
  );
}
