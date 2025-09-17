'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';

interface IntroCTAProps {
  onProviderSelect: (provider: string) => void;
}

// Icon component using real SVG files from planton-cloud
const ProviderIcon = ({ providerId }: { providerId: string }) => {
  const getIconPath = (id: string) => {
    switch (id) {
      case 'aws':
        return '/images/resources/aws.svg';
      case 'gcp':
        return '/images/resources/gcp.svg';
      case 'azure':
        return '/images/resources/azure.svg';
      default:
        return '/images/resources/aws.svg';
    }
  };

  return (
    <img 
      src={getIconPath(providerId)} 
      alt={`${providerId} icon`}
      className="w-16 h-16"
    />
  );
};

export default function IntroCTA({ onProviderSelect }: IntroCTAProps) {
  const [selectedProvider, setSelectedProvider] = useState<string>('');

  const providers = [
    {
      id: 'aws',
      name: 'AWS',
      icon: 'aws',
    },
    {
      id: 'gcp',
      name: 'Google Cloud',
      icon: 'gcp',
    },
    {
      id: 'azure',
      name: 'Azure',
      icon: 'azure',
    },
  ];

  const handleProviderClick = (providerId: string) => {
    setSelectedProvider(providerId);
  };

  const handleContinue = () => {
    if (selectedProvider) {
      onProviderSelect(selectedProvider);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-8"
        >
          <Play className="w-5 h-5" />
          See it in action
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Choose your cloud provider
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Select where you want to deploy. Don&apos;t worry, you can always add more providers later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              onClick={() => handleProviderClick(provider.id)}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedProvider === provider.id ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div
                className={`bg-white border border-gray-200 rounded-2xl p-8 demo-card-shadow hover:demo-card-hover transition-all duration-200 ${
                  selectedProvider === provider.id
                    ? 'ring-4 ring-offset-2 ring-violet-500'
                    : ''
                }`}
              >
                {selectedProvider === provider.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                )}

                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <ProviderIcon providerId={provider.icon} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{provider.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={handleContinue}
            disabled={!selectedProvider}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              selectedProvider
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue with {providers.find(p => p.id === selectedProvider)?.name || 'Selection'}
          </button>

          <p className="text-sm text-gray-500">
            This is a demo. No real infrastructure will be created.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
