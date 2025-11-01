'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Network, ArrowRight } from 'lucide-react';

export default function DeploymentStoreMultiCloud() {
  const comparisons = [
    {
      category: 'Kubernetes',
      icon: Server,
      color: 'from-purple-500 to-purple-600',
      providers: [
        { name: 'AWS', service: 'EKS' },
        { name: 'GCP', service: 'GKE' },
        { name: 'Azure', service: 'AKS' },
        { name: 'Civo', service: 'Civo Kubernetes' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      providers: [
        { name: 'AWS', service: 'RDS' },
        { name: 'GCP', service: 'Cloud SQL' },
        { name: 'Azure', service: 'Azure Database' },
        { name: 'MongoDB', service: 'Atlas' },
      ],
    },
    {
      category: 'Load Balancers',
      icon: Network,
      color: 'from-orange-500 to-orange-600',
      providers: [
        { name: 'AWS', service: 'ALB / NLB' },
        { name: 'GCP', service: 'Cloud Load Balancing' },
        { name: 'Azure', service: 'Load Balancer' },
        { name: 'DigitalOcean', service: 'Load Balancer' },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Same Pattern, Any Cloud
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Deploy equivalent resources across multiple cloud providers with a unified experience
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full">
            <p className="text-lg font-bold">
              Same deployment experience, any cloud
            </p>
          </div>
        </motion.div>

        {/* Comparison Sections */}
        {comparisons.map((comparison, index) => {
          const Icon = comparison.icon;
          return (
            <motion.div
              key={comparison.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden demo-card-shadow"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${comparison.color} px-8 py-5`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{comparison.category}</h2>
                </div>
              </div>

              {/* Provider Comparison */}
              <div className="p-8">
                <div className="grid md:grid-cols-4 gap-4">
                  {comparison.providers.map((provider, providerIndex) => (
                    <motion.div
                      key={provider.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.15 + providerIndex * 0.05, duration: 0.4 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 text-center"
                    >
                      <div className="font-bold text-lg text-gray-900 mb-2">
                        {provider.name}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {provider.service}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Unified Multi-Cloud Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Consistent API</h3>
                <p className="text-sm text-gray-700">Same deployment patterns across all providers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">No Vendor Lock-in</h3>
                <p className="text-sm text-gray-700">Switch providers without rewriting infrastructure</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Team Efficiency</h3>
                <p className="text-sm text-gray-700">Learn once, deploy anywhere</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 text-white text-center"
        >
          <p className="text-lg font-medium">
            Deploy the same infrastructure pattern across AWS, GCP, Azure, and 7 other providers
          </p>
        </motion.div>
      </div>
    </div>
  );
}


