'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Network, Server, Shield, Zap } from 'lucide-react';

export default function DeploymentStoreProviders() {
  const providerCategories = [
    {
      title: 'Major Cloud Providers',
      providers: [
        { name: 'AWS', components: '100+', color: 'from-orange-500 to-orange-600', icon: Cloud },
        { name: 'GCP', components: '80+', color: 'from-blue-500 to-blue-600', icon: Cloud },
        { name: 'Azure', components: '75+', color: 'from-cyan-500 to-cyan-600', icon: Cloud },
      ],
    },
    {
      title: 'Specialized Cloud',
      providers: [
        { name: 'DigitalOcean', components: 'Container, Database, Networking', color: 'from-blue-400 to-blue-500', icon: Server },
        { name: 'Civo', components: 'Kubernetes, Compute', color: 'from-green-500 to-green-600', icon: Server },
      ],
    },
    {
      title: 'Data & Infrastructure Platforms',
      providers: [
        { name: 'MongoDB Atlas', components: 'Managed MongoDB', color: 'from-green-600 to-green-700', icon: Database },
        { name: 'Snowflake', components: 'Data Warehouse', color: 'from-cyan-600 to-blue-600', icon: Database },
        { name: 'Confluent', components: 'Managed Kafka', color: 'from-indigo-500 to-indigo-600', icon: Network },
      ],
    },
    {
      title: 'Edge & CDN',
      providers: [
        { name: 'Cloudflare', components: 'DNS, CDN, Security', color: 'from-orange-400 to-orange-500', icon: Shield },
      ],
    },
    {
      title: 'Container Platforms',
      providers: [
        { name: 'Kubernetes', components: 'Native K8s resources', color: 'from-blue-600 to-purple-600', icon: Zap },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            10+ Cloud & Platform Providers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            One platform, unified experience across all major cloud providers and infrastructure platforms
          </p>
          <div className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full">
            <p className="text-lg font-bold">
              One platform • 10+ providers • 500+ components
            </p>
          </div>
        </motion.div>

        {/* Provider Categories */}
        {providerCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {category.providers.map((provider, providerIndex) => {
                const Icon = provider.icon;
                return (
                  <motion.div
                    key={provider.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + providerIndex * 0.05, duration: 0.4 }}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 demo-card-shadow hover:border-violet-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {provider.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {provider.components}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Unified Multi-Cloud Platform</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Deploy infrastructure across any provider with the same deployment experience. 
            No need to learn provider-specific tools or workflows.
          </p>
        </motion.div>
      </div>
    </div>
  );
}


