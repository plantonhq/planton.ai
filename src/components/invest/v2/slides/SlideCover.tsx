'use client';

import React from 'react';
import { Slide, SlideTitle, Badge } from '../shared';

export default function SlideCover() {
  return (
    <Slide variant="gradient">
      {/* Logo/Brand */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Planton
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Cloud
        </span>
      </div>

      {/* Tagline */}
      <SlideTitle className="mb-3 sm:mb-4 md:mb-6">
        DevOps in a Box
      </SlideTitle>

      {/* One-liner */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
        Deploy infrastructure and services to any cloud.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        No DevOps expertise required.
      </p>

      {/* Key Metrics - Compact grid */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">3+</div>
          <div className="text-xs sm:text-sm text-white/50">Years Building</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">$500K+</div>
          <div className="text-xs sm:text-sm text-white/50">Self-Funded</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">100%</div>
          <div className="text-xs sm:text-sm text-white/50">Retention</div>
        </div>
      </div>

      {/* Stage Badge */}
      <Badge variant="pink" className="mb-4">
        Seed Stage • Raising $500K
      </Badge>

      {/* Date */}
      <p className="text-xs sm:text-sm text-white/40">
        January 2026
      </p>
    </Slide>
  );
}

