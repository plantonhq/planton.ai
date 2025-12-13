'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Globe } from 'lucide-react';

export default function SlideSolution() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1a0f] via-[#152d1a] to-[#0a1a0f] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-5xl w-full"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Solution
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto">
          One platform to deploy infrastructure and services across any cloud.
        </p>

        {/* Main Value Prop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* InfraHub */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">InfraHub</h3>
            </div>
            <p className="text-white/70 mb-4">
              Deploy any cloud resource with a single API
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                AWS, GCP, Azure, Kubernetes
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Pre-built infrastructure templates
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Point-and-click deployment
              </li>
            </ul>
          </motion.div>

          {/* ServiceHub */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-8 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-violet-400" />
              <h3 className="text-2xl font-bold text-white">ServiceHub</h3>
            </div>
            <p className="text-white/70 mb-4">
              Vercel-like experience for backend services
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Git push to production
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                No Dockerfile required
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Built-in CI/CD with Tekton
              </li>
            </ul>
          </motion.div>
        </div>

        {/* The Promise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-white/10 rounded-xl p-6 max-w-2xl mx-auto"
        >
          <p className="text-2xl text-white font-medium">
            &ldquo;Vercel for Backend&rdquo;
          </p>
          <p className="text-white/60 mt-2">
            The simplicity of Vercel. The power of any cloud.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
