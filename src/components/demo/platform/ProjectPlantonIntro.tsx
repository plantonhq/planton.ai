'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Package, Terminal, Github } from 'lucide-react';

export default function ProjectPlantonIntro() {
  const pillars = [
    {
      title: 'Component Definitions',
      description: 'Type-safe YAML specs',
      icon: FileCode,
      color: 'from-blue-500 to-blue-600',
      details: [
        'Declarative API specs',
        '500+ components',
        'Multi-cloud support',
      ],
    },
    {
      title: 'Terraform Modules',
      description: 'Production-ready IaC',
      icon: Package,
      color: 'from-purple-500 to-purple-600',
      details: [
        'Battle-tested code',
        'Best practices built-in',
        'Continuously updated',
      ],
    },
    {
      title: 'CLI Tool',
      description: 'YAML-based deployment',
      icon: Terminal,
      color: 'from-green-500 to-green-600',
      details: [
        'Simple CLI interface',
        'GitOps workflow',
        'Resource management',
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mb-6"
            >
              <Github className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              Project Planton
            </h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Open-Source Infrastructure Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              The foundation powering Planton Cloud is completely open source
            </p>
            
            {/* Stats */}
            <div className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
              <p className="text-lg font-bold">
                500+ components • 10+ providers • 1 unified API
              </p>
            </div>

            {/* GitHub Link */}
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Github className="w-5 h-5" />
              <a 
                href="https://github.com/plantonhq/project-planton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-sm hover:text-violet-600 transition-colors"
              >
                github.com/plantonhq/project-planton
              </a>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 demo-card-shadow"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-violet-600 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-3">The Foundation is Open Source</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Complete transparency. Fork it, customize it, contribute back. 
              No proprietary lock-in—just production-ready infrastructure code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

