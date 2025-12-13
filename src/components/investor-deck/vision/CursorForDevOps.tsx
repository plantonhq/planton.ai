'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, Layers } from 'lucide-react';

export default function CursorForDevOps() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">Goal #1:</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cursor for DevOps
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            AI agent fleet that automates DevOps workflows
          </p>
        </motion.div>

        {/* The Cursor Analogy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              The Cursor Analogy
            </h3>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong className="text-violet-600">Cursor forked VSCode to build AI magic on top.</strong> But 
            Cursor still needed VSCode underneath - the basic file system, editor, extensions. 
            All the foundational code editor functionality.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong className="text-violet-600">For DevOps, Planton is that foundational platform.</strong> We 
            handle all basic cloud operations: deploying infrastructure, managing resources, orchestrating dependencies. 
            The AI agent layer builds on top of this proven foundation.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Just like Cursor couldn't exist without VSCode, our AI DevOps agents couldn't exist without 
            the Planton platform handling the underlying operations.
          </p>
        </motion.div>

        {/* The Pivot Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            The Pivot: From One Copilot to Agent Fleet
          </h3>
          
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              <strong className="text-white">Our initial attempt:</strong> Build one monolithic DevOps copilot. 
              It seemed like the obvious path. But DevOps is too broad - one agent trying to handle everything 
              was impossible.
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">DeepSeek taught us:</strong> Specialist agents outperform generalists. 
              The same technology that makes Cursor effective isn't one giant AI - it's specialized models working 
              together, each excellent at its domain.
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">The insight:</strong> DevOps organizations are teams of specialists. 
              A CI/CD expert. An AWS expert. A cost optimization expert. Our agent fleet mirrors this structure.
            </p>
          </div>
        </motion.div>

        {/* Example Agents */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Bot className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">
              CI/CD Troubleshooter
            </h4>
            <p className="text-sm text-gray-300">
              Pipeline fails? This agent reads logs, identifies root cause, suggests fixes. 
              Expert in build failures, test issues, deployment errors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Bot className="w-10 h-10 text-violet-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">
              AWS RDS Deployment
            </h4>
            <p className="text-sm text-gray-300">
              Need a database? This agent knows AWS RDS inside-out. Secure configs, 
              backup policies, performance tuning. Expert in one service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
          >
            <Bot className="w-10 h-10 text-green-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">
              Cost Optimization
            </h4>
            <p className="text-sm text-gray-300">
              Analyzes resource usage. Suggests rightsizing. Identifies waste. 
              Expert in cloud cost management across providers.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400"
        >
          How the agent fleet works →
        </motion.div>
      </div>
    </div>
  );
}
