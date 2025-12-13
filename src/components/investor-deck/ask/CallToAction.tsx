'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, Calendar, ExternalLink } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-white">Let's Build the</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Next Postman Together
            </span>
          </h1>
        </motion.div>

        {/* The Recap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You're Investing In
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-bold text-violet-600 mb-2">The Opportunity</div>
              <ul className="space-y-1 text-gray-700">
                <li>• $10B+ DevOps tools market</li>
                <li>• Every software company struggles with infra</li>
                <li>• Perfect timing: AI + cloud complexity</li>
                <li>• Billion-dollar outcome potential</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-violet-600 mb-2">The Product</div>
              <ul className="space-y-1 text-gray-700">
                <li>• 150+ deployment components built</li>
                <li>• Working platform: InfraHub + ServiceHub</li>
                <li>• Open source foundation (Project Planton)</li>
                <li>• Paying customers in production</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-violet-600 mb-2">The Team</div>
              <ul className="space-y-1 text-gray-700">
                <li>• Co-founder + 3 full-time employees</li>
                <li>• $500k+ invested personally</li>
                <li>• 2+ years full-time building</li>
                <li>• Proven execution, not just ideas</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-violet-600 mb-2">The Vision</div>
              <ul className="space-y-1 text-gray-700">
                <li>• AI agent fleet (Cursor for DevOps)</li>
                <li>• Software cloud provider (Vercel for backend)</li>
                <li>• India's next global dev tool</li>
                <li>• Postman-scale ambition</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* The Ask - Clear and Direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 mb-8 text-center"
        >
          <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            The Ask: $500K SAFE at $6-8M Cap
          </h3>
          <p className="text-xl text-white/90 mb-2">
            18 months of runway to reach Series A milestones
          </p>
          <p className="text-lg text-white/80">
            Ground floor of the next Postman from India
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Next Steps
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-violet-100 rounded-lg p-4 mb-3">
                <Calendar className="w-8 h-8 text-violet-600 mx-auto" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">1. Due Diligence</h4>
              <p className="text-sm text-gray-600">
                Technical deep dives. Customer references. Financial review.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-3">
                <ExternalLink className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2. Product Demo</h4>
              <p className="text-sm text-gray-600">
                Live walkthrough. Technical Q&A. Design partner intros.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-4 mb-3">
                <Mail className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">3. Term Sheet</h4>
              <p className="text-sm text-gray-600">
                Discuss terms. Align on vision. Move forward together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conviction Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 mb-8"
        >
          <p className="text-2xl text-white text-center leading-relaxed mb-6">
            "I believe deeply that Planton will become the next Postman."
          </p>
          <p className="text-xl text-gray-200 text-center">
            <strong className="text-white">With your partnership, we'll make it happen.</strong>
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Let's Talk
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:swarup@planton.cloud"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              swarup@planton.cloud
            </a>

            <a
              href="https://planton.ai/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-violet-600 text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Try Interactive Demo
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Happy to provide deeper technical dives, connect with design partners, 
            or answer any questions about the product, vision, or execution plan.
          </p>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-2xl text-gray-300">
            Thank you for your time and consideration.
          </p>
          <p className="text-gray-500 mt-2">
            Press ESC to return to start
          </p>
        </motion.div>
      </div>
    </div>
  );
}
