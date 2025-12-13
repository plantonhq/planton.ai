'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Users, Lock, Shield } from 'lucide-react';

export default function ProjectPlantonFoundation() {
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
            Project Planton: The Open Source Foundation
          </h1>
          <p className="text-xl text-gray-300">
            Transparency, trust, zero vendor lock-in
          </p>
        </motion.div>

        {/* Why Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-8 h-8 text-violet-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Why We Open-Sourced Infrastructure Layer
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Customer Trust
              </div>
              <p className="text-sm text-gray-600">
                See exactly how infrastructure is deployed. No black box. 
                Inspect every Pulumi module, every Terraform config.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Community Growth
              </div>
              <p className="text-sm text-gray-600">
                Developers contribute new components. Platform engineers fork and customize. 
                Ecosystem tools emerge.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Zero Lock-In
              </div>
              <p className="text-sm text-gray-600">
                Export manifests. Use standalone CLI. Continue managing infrastructure 
                even if you leave our SaaS platform.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Strategic Separation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <Shield className="w-10 h-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Strategic Separation
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-white">Open Source (Project Planton):</strong>
                <div className="text-gray-300 mt-1">
                  API definitions, IaC modules, CLI, documentation
                </div>
              </div>
              <div>
                <strong className="text-white">Commercial (Planton Cloud SaaS):</strong>
                <div className="text-gray-300 mt-1">
                  UI, CI/CD, team management, RBAC, observability, support
                </div>
              </div>
            </div>
          </motion.div>

          {/* Buf Schema Registry */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
          >
            <Users className="w-10 h-10 text-violet-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Buf Schema Registry
            </h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Beautiful auto-generated documentation. Navigate API schemas with ease. 
              Auto-generated SDKs in Go, Python, TypeScript, Java.
            </p>
            <p className="text-xs text-gray-400">
              Platform engineers import SDKs to build internal tools without reinventing schemas
            </p>
          </motion.div>
        </div>

        {/* The Confidence Signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">
              The Confidence Signal
            </h3>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed">
            "Customers can leave our platform but keep using their infrastructure configurations. 
            This reduces vendor lock-in to near-zero."
          </p>
          <p className="text-gray-400 mt-4">
            For enterprises evaluating us: "If we ever need to leave, we can." 
            That confidence accelerates sales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center text-gray-400"
        >
          See it in action →
        </motion.div>
      </div>
    </div>
  );
}
