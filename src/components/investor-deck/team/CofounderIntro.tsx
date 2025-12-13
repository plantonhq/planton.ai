'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Target } from 'lucide-react';

export default function CofounderIntro() {
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
            Not a Solo Founder
          </h1>
          <p className="text-xl text-gray-300">
            We're building this together
          </p>
        </motion.div>

        {/* Co-founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold">
              CF
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Co-founder</h3>
              <p className="text-xl text-blue-600">Partner in Vision & Execution</p>
              <p className="text-sm text-gray-500 mt-1">Complementary Skills • 15% Equity</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Background & Expertise</h4>
              <p className="text-gray-700 leading-relaxed">
                [Your co-founder's background - technical expertise, business acumen, 
                previous experience, or whatever complementary skills they bring to the partnership]
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Why This Partnership Works</h4>
              <p className="text-gray-700 leading-relaxed">
                Complementary skill sets. Shared vision for building globally impactful products from India. 
                Division of responsibilities enables faster execution and better decisions.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6"
          >
            <Handshake className="w-10 h-10 text-violet-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">15% Equity</h4>
            <p className="text-sm text-gray-300">
              Meaningful stake shows commitment and long-term alignment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
          >
            <Users className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Shared Vision</h4>
            <p className="text-sm text-gray-300">
              Both committed to building India's next global developer tool
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6"
          >
            <Target className="w-10 h-10 text-green-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Clear Roles</h4>
            <p className="text-sm text-gray-300">
              Division of responsibilities enables velocity and balanced decision-making
            </p>
          </motion.div>
        </div>

        {/* Strength Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl p-6 text-center"
        >
          <p className="text-2xl font-bold text-gray-900">
            <span className="text-violet-600">Not a solo founder concern.</span> We're building this as a partnership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          Meet the full team →
        </motion.div>
      </div>
    </div>
  );
}
