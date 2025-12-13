'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
import TeamMemberCard from '../shared/TeamMemberCard';

export default function TeamShowcase() {
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
            We Have a Team
          </h1>
          <p className="text-xl text-gray-300">
            3 full-time employees, paid for 2 years
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TeamMemberCard
              name="Full-Time Web Developer"
              role="Software Engineer"
              tenure="2 years • Paid from personal savings"
              initials="WD"
              description="Frontend and backend development. Building web console, APIs, and user interfaces."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TeamMemberCard
              name="Full-Time UX Designer"
              role="Product Designer"
              tenure="2 years • Paid from personal savings"
              initials="UX"
              description="User experience design. Creating intuitive interfaces that developers love to use."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TeamMemberCard
              name="Full-Time Admin"
              role="Operations"
              tenure="2 years • Paid from personal savings"
              initials="AD"
              description="Administrative operations. Handling logistics, support, and operational workflows."
            />
          </motion.div>
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">
              We're Not Looking to Build a Team. We Have One.
            </h3>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed mb-4">
            This isn't a founding team that will assemble after funding. We've been working together 
            for 2 years. Paid from personal savings. Building, iterating, shipping.
          </p>
          <p className="text-lg text-gray-300">
            <strong className="text-white">With funding:</strong> Hire 2-3 more to scale engineering and GTM. 
            We know exactly who we need and why.
          </p>
        </motion.div>

        {/* Hiring Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Post-Funding Hiring Plan
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-violet-600 font-bold mb-2">Engineering (2 hires)</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Senior ML Engineer (AI agent fleet)</li>
                <li>• Senior SRE (cloud provider initiative)</li>
              </ul>
            </div>

            <div>
              <div className="text-violet-600 font-bold mb-2">GTM (1 hire)</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Head of Sales/Growth (US market entry)</li>
                <li>• Developer Advocate (community building)</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            <strong>Strategic hiring:</strong> Nimble team. Hire only when necessary. 
            Focus on smart people who can wear multiple hats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          Proof of commitment →
        </motion.div>
      </div>
    </div>
  );
}
