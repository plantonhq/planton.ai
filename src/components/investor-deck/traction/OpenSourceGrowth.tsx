'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitPullRequest, TrendingUp } from 'lucide-react';

export default function OpenSourceGrowth() {
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
            Open Source: Early Stage
          </h1>
          <p className="text-xl text-gray-300">
            Honest assessment and growth roadmap
          </p>
        </motion.div>

        {/* Current State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Project Planton: Current Status
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">&lt;100</div>
              <div className="text-sm text-gray-600">GitHub Stars</div>
              <div className="text-xs text-gray-500 mt-2">Early stage, authentic growth</div>
            </div>

            <div className="text-center">
              <GitPullRequest className="w-10 h-10 text-violet-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">Growing</div>
              <div className="text-sm text-gray-600">Community Engagement</div>
              <div className="text-xs text-gray-500 mt-2">Issues, PRs, discussions</div>
            </div>

            <div className="text-center">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">2024</div>
              <div className="text-sm text-gray-600">Focus Year</div>
              <div className="text-xs text-gray-500 mt-2">Community growth priority</div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-bold text-gray-900 mb-3">Honest Assessment</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>We're early stage in open source.</strong> We've prioritized product depth and 
              customer success over vanity metrics. GitHub stars will come as we invest in community growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Our focus has been:</strong> Building a complete, production-ready platform. 
              Serving paying customers. Proving the product works. Now we're ready to scale community adoption.
            </p>
          </div>
        </motion.div>

        {/* Context from Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            OSS at Seed Stage: What Matters
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Many successful infrastructure startups raised seed with minimal stars. 
            What matters at this stage:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Quality Over Quantity</div>
              <div className="text-sm text-gray-400">
                Temporal, Pulumi raised seed with limited community. They focused on product first.
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Usage Matters More</div>
              <div className="text-sm text-gray-400">
                Active deployments &gt; passive stars. We have real production usage.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Community Growth Roadmap (Post-Funding)
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Developer Advocacy</div>
                <div className="text-sm text-gray-300">
                  Hire devrel. Write tutorials. Speak at conferences. Build in public.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Content Marketing</div>
                <div className="text-sm text-gray-300">
                  Technical blog posts. Hacker News launches. Developer community outreach.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Community Programs</div>
                <div className="text-sm text-gray-300">
                  Contributor rewards. Documentation bounties. Plugin ecosystem.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          Design partners and pipeline →
        </motion.div>
      </div>
    </div>
  );
}
