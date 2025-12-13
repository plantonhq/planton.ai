'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, TrendingUp } from 'lucide-react';
import TimelineVisualization from '../shared/TimelineVisualization';

export default function Milestones() {
  const milestones = [
    {
      date: 'Month 3',
      title: 'Hetzner Cloud Integration Complete',
      description: 'Platform provider-agnostic. Containers deploying on Planton Cloud (Hetzner backend).',
      milestone: true,
    },
    {
      date: 'Month 6',
      title: 'AI Agent Prototype + 50 Cloud Projects',
      description: '1-2 AI agents working in prototype. 50 projects deployed on Planton Cloud. Beta customers providing feedback.',
      milestone: true,
    },
    {
      date: 'Month 9',
      title: 'US GTM Motion Proven',
      description: 'First US customers acquired. Repeatable sales process identified. Channel or direct motion validated.',
      milestone: true,
    },
    {
      date: 'Month 12',
      title: 'Agent Fleet Production + ₹10-20L MRR',
      description: 'AI agents in production with measurable ROI. Cloud services generating ₹10-20L MRR. Unit economics proven.',
      milestone: true,
    },
    {
      date: 'Month 15',
      title: '5 Enterprise Pilots + 100+ Teams',
      description: 'Enterprise design partners engaged. 100+ teams using platform. SOC 2 compliance in progress.',
      milestone: true,
    },
    {
      date: 'Month 18',
      title: 'Series A Ready',
      description: '$500k+ ARR. Both initiatives scaled. Proven unit economics and repeatable GTM. Ready to raise Series A.',
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
            18-Month Milestones
          </h1>
          <p className="text-xl text-gray-300">
            Clear success metrics for Series A readiness
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

        {/* Series A Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Series A Success Criteria (Month 18)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Revenue & Growth Metrics</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">$500K+ ARR</div>
                    <div className="text-xs text-gray-600">6x growth from current ~$10K ARR</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">100+ customers across segments</div>
                    <div className="text-xs text-gray-600">Mix of consulting, SMB, enterprise pilots</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">40%+ gross margin</div>
                    <div className="text-xs text-gray-600">Healthy unit economics proven</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Repeatable GTM motion</div>
                    <div className="text-xs text-gray-600">CAC &lt; LTV, predictable acquisition</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product & Technology Proof</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">AI agents in production</div>
                    <div className="text-xs text-gray-600">Measurable ROI, customer satisfaction</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Planton Cloud stable</div>
                    <div className="text-xs text-gray-600">Multi-provider, paying customers, 99.9% uptime</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">SOC 2 compliance achieved</div>
                    <div className="text-xs text-gray-600">Enterprise-ready security posture</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Platform ready for scale</div>
                    <div className="text-xs text-gray-600">Infrastructure, team, processes for 1000+ customers</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* De-Risking Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Phased Risk Mitigation
            </h3>
          </div>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We validate each phase before scaling. If AI agents don't show ROI by month 9, 
            we double down on cloud provider. If cloud provider margins don't work, we focus on SaaS. 
            Both initiatives are valuable independently.
          </p>
          <p className="text-gray-300">
            <strong className="text-white">We're not all-in on speculative bets.</strong> Each milestone 
            has clear success criteria. We pivot or adjust based on data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          Final ask and next steps →
        </motion.div>
      </div>
    </div>
  );
}
