'use client';

import React from 'react';
import { ArrowRight, Mail, Globe, Github } from 'lucide-react';
import { Slide } from '../shared';

export default function SlideClose() {
  return (
    <Slide variant="gradient">
      {/* Main Message */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
        DevOps Shouldn&apos;t Be{' '}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          This Hard
        </span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-lg mx-auto px-4">
        <span className="sm:whitespace-nowrap">We&apos;ve Spent 3+ Years and $500K Building the Platform We Wished Existed.</span>
        <br />
        <span className="sm:whitespace-nowrap">Now We Need Partners to Take It Global.</span>
      </p>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-sm mx-auto mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
          Let&apos;s Talk
        </h3>
        <p className="text-sm text-white/80 mb-3 sm:mb-4">
          Interested in learning more?
        </p>
        <a
          href="mailto:swarup@planton.ai"
          className="inline-flex items-center justify-center gap-2 bg-white text-violet-600 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-white/90 transition-colors text-sm sm:text-base"
        >
          <Mail className="w-4 h-4" />
          swarup@planton.ai
        </a>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
        <a
          href="https://planton.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
        >
          <Globe className="w-4 h-4" />
          planton.ai
        </a>
        <a
          href="https://github.com/project-planton/project-planton"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href="https://planton.ai/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          Demo
        </a>
      </div>

      {/* Tagline */}
      <p className="text-xs text-white/30 mt-6 sm:mt-8">
        Planton Cloud • DevOps in a Box • January 2026
      </p>
    </Slide>
  );
}

