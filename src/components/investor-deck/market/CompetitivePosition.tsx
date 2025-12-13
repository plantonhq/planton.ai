'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, X } from 'lucide-react';

export default function CompetitivePosition() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Competitive Position
          </h1>
          <p className="text-xl text-gray-300">
            We don't compete with AWS. We compete with complexity.
          </p>
        </motion.div>

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8 overflow-x-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How We Compare
          </h3>

          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                <th className="text-center py-3 px-4 font-bold text-violet-600">Planton</th>
                <th className="text-center py-3 px-4 font-bold text-gray-600">Terraform/Pulumi</th>
                <th className="text-center py-3 px-4 font-bold text-gray-600">Vercel/Heroku</th>
                <th className="text-center py-3 px-4 font-bold text-gray-600">Cloud Consoles</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">Multi-cloud consistency</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">No code required</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">Backend + Infrastructure</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">Opinionated + Orchestration</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">Built-in CI/CD</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-700">Open source foundation</td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td className="py-3 px-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Our Moats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Our Defensible Moats
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-white font-semibold mb-2">1. Open Source Foundation</div>
                <p className="text-sm text-gray-300">
                  Project Planton creates community + transparency. Hard to compete with trust.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-white font-semibold mb-2">2. 150+ Battle-Tested Modules</div>
                <p className="text-sm text-gray-300">
                  2+ years to build. Each module refined with real deployments. Time to replicate.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-white font-semibold mb-2">3. Superior Developer Experience</div>
                <p className="text-sm text-gray-300">
                  Forms not code. Validation before deploy. Live feedback. Developers love it = retention.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-white font-semibold mb-2">4. Multi-Cloud Knowledge Graph</div>
                <p className="text-sm text-gray-300">
                  Unique dataset across clouds. Foundation for AI agents. Unfair advantage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-violet-600">Positioning:</span> The Vercel of Backend Infrastructure
          </h3>
          <p className="text-lg text-gray-700">
            Powered by open source. Multi-cloud by default. Developer experience first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          Now, the ask →
        </motion.div>
      </div>
    </div>
  );
}
