'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

export default function DemoVideo() {
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
            See It In Action
          </h1>
          <p className="text-xl text-gray-300">
            Interactive demo showing the complete workflow
          </p>
        </motion.div>

        {/* Demo Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="aspect-video bg-gradient-to-br from-violet-900/50 to-purple-900/50 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
            {/* Placeholder for demo */}
            <div className="absolute inset-0 bg-[url('/demo-preview.jpg')] bg-cover bg-center opacity-20" />
            <div className="relative z-10">
              <Play className="w-20 h-20 text-white opacity-80" />
              <p className="text-white mt-4 text-lg">Click to Play Demo</p>
            </div>
          </div>

          {/* What's Shown */}
          <h3 className="text-2xl font-bold text-white mb-4">
            2-Minute Highlight Reel
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="text-violet-400 mt-1">1.</div>
                <div className="text-gray-300">
                  <strong className="text-white">Lego Catalog:</strong> Educational panel + component selection
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-violet-400 mt-1">2.</div>
                <div className="text-gray-300">
                  <strong className="text-white">Configuration:</strong> Form-based, no code required
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-violet-400 mt-1">3.</div>
                <div className="text-gray-300">
                  <strong className="text-white">Deploy Logs:</strong> Live deployment progress
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="text-violet-400 mt-1">4.</div>
                <div className="text-gray-300">
                  <strong className="text-white">Infra Charts DAG:</strong> Orchestration visualization
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-violet-400 mt-1">5.</div>
                <div className="text-gray-300">
                  <strong className="text-white">Service Hub:</strong> GitHub to production in minutes
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Try The Interactive Demo
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Experience the full platform at your own pace
          </p>
          <a
            href="https://planton.ai/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            planton.ai/demo
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-gray-400"
        >
          Real customer success stories →
        </motion.div>
      </div>
    </div>
  );
}
