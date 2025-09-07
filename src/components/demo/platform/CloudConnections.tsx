'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Link, CheckCircle, Loader2, ExternalLink } from 'lucide-react';

interface CloudProvider {
  id: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  isConnected: boolean;
  isConnecting: boolean;
}

export default function CloudConnections() {
  const [providers, setProviders] = useState<CloudProvider[]>([
    {
      id: 'aws',
      name: 'AWS',
      description: 'Amazon Web Services',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      isConnected: false,
      isConnecting: false,
    },
    {
      id: 'gcp',
      name: 'Google Cloud',
      description: 'Google Cloud Platform',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      isConnected: false,
      isConnecting: false,
    },
    {
      id: 'azure',
      name: 'Azure',
      description: 'Microsoft Azure',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      isConnected: false,
      isConnecting: false,
    },
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      description: 'Edge network & security',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      isConnected: false,
      isConnecting: false,
    },
    {
      id: 'digitalocean',
      name: 'DigitalOcean',
      description: 'Simple cloud infrastructure',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      isConnected: false,
      isConnecting: false,
    },
  ]);

  const handleConnect = async (providerId: string) => {
    setProviders(prev =>
      prev.map(p =>
        p.id === providerId ? { ...p, isConnecting: true } : p
      )
    );

    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setProviders(prev =>
      prev.map(p =>
        p.id === providerId
          ? { ...p, isConnecting: false, isConnected: true }
          : p
      )
    );
  };

  const connectedCount = providers.filter(p => p.isConnected).length;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Cloud Connections</h2>
            <p className="text-gray-600 mt-1">
              Connect your cloud providers to start deploying infrastructure
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Connected</p>
              <p className="text-2xl font-bold text-gray-900">
                {connectedCount}/{providers.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Grid */}
      <div className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${provider.bgColor} rounded-xl border-2 ${
                provider.isConnected
                  ? 'border-green-400'
                  : 'border-gray-200'
              } overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <AnimatePresence>
                    {provider.isConnected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-green-100 rounded-full p-2"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {provider.description}
                </p>

                {!provider.isConnected ? (
                  <button
                    onClick={() => handleConnect(provider.id)}
                    disabled={provider.isConnecting}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                      provider.isConnecting
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {provider.isConnecting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Connecting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Link className="w-4 h-4" />
                        Connect
                      </span>
                    )}
                  </button>
                ) : (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">
                      ✓ Connected
                    </span>
                    <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                      Manage
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {connectedCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Great! You&apos;ve connected {connectedCount} provider{connectedCount !== 1 ? 's' : ''}.
              {connectedCount < providers.length && ' You can always add more later.'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
