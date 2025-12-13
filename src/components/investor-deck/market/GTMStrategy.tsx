'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Building2, Globe } from 'lucide-react';

export default function GTMStrategy() {
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
            Go-to-Market Strategy
          </h1>
          <p className="text-xl text-gray-300">
            Multi-pronged approach, testing what works
          </p>
        </motion.div>

        {/* Three GTM Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Building2 className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              1. IT Consulting Firms
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Channel partnerships for distribution leverage
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div>• Current focus in India</div>
              <div>• Firms use Planton for client projects</div>
              <div>• Reseller/implementation partnerships</div>
              <div>• Fastest path to multiple customers</div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <div className="text-xs text-gray-400">
                <strong className="text-white">Status:</strong> Active conversations, early pilots
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Users className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              2. Direct to Developers
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Product-led growth through open source
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div>• Project Planton as top-of-funnel</div>
              <div>• Content marketing & tutorials</div>
              <div>• Hacker News, Reddit, dev communities</div>
              <div>• Self-serve SaaS conversion</div>
            </div>
            <div className="mt-4 pt-4 border-t border-violet-500/20">
              <div className="text-xs text-gray-400">
                <strong className="text-white">Status:</strong> Bottom-up adoption starting
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
          >
            <Target className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              3. Enterprise Pilots
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Opportunistic high-value contracts
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div>• Design partner engagements</div>
              <div>• Influence product roadmap</div>
              <div>• Long sales cycles (6-12 months)</div>
              <div>• Series A focus for scale</div>
            </div>
            <div className="mt-4 pt-4 border-t border-green-500/20">
              <div className="text-xs text-gray-400">
                <strong className="text-white">Status:</strong> Early conversations, requirements gathering
              </div>
            </div>
          </motion.div>
        </div>

        {/* Geographic Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Geographic Expansion Plan
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                NOW: India
              </div>
              <p className="text-gray-700 mb-2 font-semibold">Proving Ground</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• First customers</li>
                <li>• Learning and iteration</li>
                <li>• Cost-effective development</li>
                <li>• Channel partner validation</li>
              </ul>
            </div>

            <div>
              <div className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                6-12 MONTHS: US
              </div>
              <p className="text-gray-700 mb-2 font-semibold">Primary Market</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Largest market opportunity</li>
                <li>• Higher willingness to pay</li>
                <li>• Scale focus with funding</li>
                <li>• Enterprise customers</li>
              </ul>
            </div>

            <div>
              <div className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                12-18 MONTHS: Global
              </div>
              <p className="text-gray-700 mb-2 font-semibold">Expansion</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Follow US success</li>
                <li>• Europe, Asia-Pacific</li>
                <li>• International partnerships</li>
                <li>• Postman-like global reach</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Honest Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Honest Assessment: Still Learning
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We're testing multiple channels to find the repeatable motion. IT consulting shows promise 
            (fast cycles). Direct-to-developer builds community. Enterprise is long-term.
          </p>
          <p className="text-gray-300">
            <strong className="text-white">We don't claim to have it figured out.</strong> We're data-driven 
            and will double down on what works. That agility is our strength at this stage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          Customer segmentation strategy →
        </motion.div>
      </div>
    </div>
  );
}
