'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Heart, Code } from 'lucide-react';

export default function FounderBackground() {
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
            The Team: Founder
          </h1>
          <p className="text-xl text-gray-300">
            Uniquely qualified to solve this problem
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              SD
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Swarup Donepudi</h3>
              <p className="text-xl text-violet-600">Founder & CEO</p>
              <p className="text-sm text-gray-500 mt-1">DevOps Expert • Serial Builder</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-violet-600" />
                <h4 className="text-lg font-bold text-gray-900">Experience & Expertise</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Years of DevOps engineering across cloud providers</li>
                <li>• Built and scaled infrastructure for multiple companies</li>
                <li>• Deep expertise in AWS, GCP, Azure, Kubernetes</li>
                <li>• Led DevOps transformations for enterprise clients</li>
                <li>• Open source contributor to infrastructure tools</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-violet-600" />
                <h4 className="text-lg font-bold text-gray-900">Commitment & Investment</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>$500k+</strong> personal investment over 2 years</li>
                <li>• <strong>2+ years</strong> full-time building the product</li>
                <li>• Paid full-time team from personal savings</li>
                <li>• <strong>80%</strong> equity stake (skin in the game)</li>
                <li>• This is my life's work, not a side project</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Founder-Market Fit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-8 h-8 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">
              Founder-Market Fit: I've Lived This Pain
            </h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I've been the DevOps engineer staying up at 3 AM to fix deployments. I've watched teams 
            reinvent the same infrastructure patterns. I've seen companies waste weeks setting up what 
            should take hours.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong className="text-white">Planton is the product I wished I had a decade ago.</strong> Now I'm 
            building it for every DevOps engineer and every company struggling with cloud complexity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-gray-400"
        >
          Meet the co-founder →
        </motion.div>
      </div>
    </div>
  );
}
