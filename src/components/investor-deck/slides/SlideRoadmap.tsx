'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cloud, Bot } from 'lucide-react';

const roadmapItems = [
  {
    phase: 'Now',
    title: 'DevOps in a Box',
    icon: CheckCircle,
    color: 'emerald',
    items: [
      'InfraHub - Infrastructure provisioning',
      'ServiceHub - Vercel for backend',
      'Multi-cloud support (AWS, GCP, Azure)',
    ],
    status: 'Live',
  },
  {
    phase: 'Next 12 Months',
    title: 'AI Agent Fleet',
    icon: Bot,
    color: 'violet',
    items: [
      'Specialized agents per DevOps function',
      'Pipeline troubleshooter agent',
      'Infrastructure optimization agent',
    ],
    status: 'In R&D',
  },
  {
    phase: 'Long Term',
    title: 'Become a Cloud Provider',
    icon: Cloud,
    color: 'pink',
    items: [
      'Join AWS, GCP, Azure, DigitalOcean, Civo',
      'Simple, focused service catalog',
      'Software layer on Tier-2 data centers',
    ],
    status: 'Vision',
  },
];

export default function SlideRoadmap() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#110D1F] via-[#1e1b4b] to-[#110D1F] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-5xl w-full"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Roadmap
        </h2>
        <p className="text-xl text-white/60 mb-12">
          Three phases to become essential infrastructure
        </p>

        {/* Roadmap Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className={`bg-white/5 border rounded-2xl p-6 text-left ${
                item.color === 'emerald'
                  ? 'border-emerald-500/30'
                  : item.color === 'violet'
                  ? 'border-violet-500/30'
                  : 'border-pink-500/30'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${
                    item.color === 'emerald'
                      ? 'text-emerald-400'
                      : item.color === 'violet'
                      ? 'text-violet-400'
                      : 'text-pink-400'
                  }`} />
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.color === 'emerald'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : item.color === 'violet'
                      ? 'bg-violet-500/20 text-violet-400'
                      : 'bg-pink-500/20 text-pink-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Phase */}
              <div className="text-sm text-white/50 mb-1">{item.phase}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>

              {/* Items */}
              <ul className="space-y-2">
                {item.items.map((listItem, i) => (
                  <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                    <span className={`mt-1 ${
                      item.color === 'emerald'
                        ? 'text-emerald-400'
                        : item.color === 'violet'
                        ? 'text-violet-400'
                        : 'text-pink-400'
                    }`}>•</span>
                    {listItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 mt-10 text-sm max-w-2xl mx-auto"
        >
          Vision: Planton becomes a cloud provider alongside AWS, GCP, Azure—our moat is the control plane and DX
        </motion.p>
      </motion.div>
    </div>
  );
}
