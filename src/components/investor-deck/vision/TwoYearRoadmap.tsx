'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Rocket } from 'lucide-react';
import TimelineVisualization from '../shared/TimelineVisualization';

export default function TwoYearRoadmap() {
  const milestones = [
    {
      date: 'Q1-Q2 2024',
      title: 'Phase 0: Provider Abstraction',
      description: 'Hetzner integration complete. Platform provider-agnostic. Foundation for cloud provider initiative.',
      milestone: true,
    },
    {
      date: 'Q3-Q4 2024',
      title: 'Phase 1: AI Agent MVP + Planton Cloud Beta',
      description: '1-2 AI agents working. 50 projects on Planton Cloud. Prototype validates both initiatives.',
      milestone: true,
    },
    {
      date: 'Q1-Q2 2025',
      title: 'Phase 2: Production & Expansion',
      description: 'Agent fleet in production. Multi-provider cloud (Hetzner + OVH). ₹10-20L MRR from cloud services.',
      milestone: true,
    },
    {
      date: 'Q3-Q4 2025',
      title: 'Phase 3: Enterprise Features',
      description: 'SOC 2 compliance. Single-tenant deployments. Enterprise pilots. 100+ teams on platform.',
      milestone: true,
    },
    {
      date: '2026',
      title: 'Scale & Series A',
      description: 'Both initiatives proven. $500k+ ARR. Ready for Series A to scale GTM and engineering.',
      milestone: true,
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-8 overflow-y-auto">
      <div className="max-w-6xl w-full py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Two-Year Execution Roadmap
          </h1>
          <p className="text-xl text-gray-300">
            Phased risk mitigation: Validate each step before scaling
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <TimelineVisualization items={milestones} />
        </motion.div>

        {/* Milestones with Funding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              18-Month Milestones with $500k Funding
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-violet-600 font-bold mb-2">Month 6</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• AI agent prototype (1-2 agents working)</li>
                <li>• 50 projects on Planton Cloud</li>
                <li>• Hetzner integration stable</li>
              </ul>
            </div>

            <div>
              <div className="text-violet-600 font-bold mb-2">Month 12</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Agent fleet in production</li>
                <li>• ₹10-20L MRR from cloud services</li>
                <li>• Multi-provider expansion (OVH)</li>
              </ul>
            </div>

            <div>
              <div className="text-violet-600 font-bold mb-2">Month 18</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Both initiatives scaled</li>
                <li>• 100+ teams, 5 enterprise pilots</li>
                <li>• Ready for Series A</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Success Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">
              Series A Success Criteria (Month 18)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-white font-semibold mb-3">Revenue & Growth</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• $500k+ ARR (6x current)</li>
                <li>• 100+ customers across segments</li>
                <li>• Strong unit economics (40%+ gross margin)</li>
                <li>• Repeatable GTM motion proven</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-3">Product & Tech</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• AI agents in production with measurable ROI</li>
                <li>• Planton Cloud stable with paying customers</li>
                <li>• SOC 2 compliance achieved</li>
                <li>• Platform ready for enterprise scale</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          The Postman-scale dream →
        </motion.div>
      </div>
    </div>
  );
}
