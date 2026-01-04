'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, Metric, Callout } from '../shared';

const metrics = [
  { value: '450+', label: 'Deployments', sublabel: 'Production infra' },
  { value: '100%', label: 'Retention', sublabel: 'Since launch', highlight: true },
  { value: '5', label: 'Customers', sublabel: 'Paying' },
  { value: '$800+', label: 'MRR', sublabel: 'Growing' },
];

const milestones = [
  'Production Platform with Paying Customers',
  'Full InfraHub + ServiceHub Live',
  'Multi-Cloud: AWS, GCP, Azure, K8s',
  'Open Source on GitHub',
];

export default function SlideTraction() {
  return (
    <Slide variant="gradient" className="!justify-start !pt-12 sm:!pt-16 md:!pt-20">
      <SlideTitle>Traction</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-8 md:mb-10">
        Early Revenue with Production Platform
      </SlideSubtitle>

      {/* Metrics Grid - 2x2 on mobile, 4 inline on desktop */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mb-4 sm:mb-10 md:mb-12">
        {metrics.map((metric) => (
          <Metric
            key={metric.label}
            value={metric.value}
            label={metric.label}
            sublabel={metric.sublabel}
            highlight={metric.highlight}
          />
        ))}
      </div>

      {/* Milestones */}
      <Callout className="max-w-3xl sm:max-w-4xl sm:p-6 md:p-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-5">
          <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-400" />
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white">What We&apos;ve Built</h3>
        </div>
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-1.5 sm:gap-y-3 text-left">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base md:text-lg text-white/70 whitespace-nowrap">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>{milestone}</span>
            </div>
          ))}
        </div>
      </Callout>

      {/* Stage Context - styled on desktop, simple on mobile */}
      <div className="mt-4 sm:mt-8 md:mt-10">
        {/* Mobile: simple text */}
        <p className="sm:hidden text-xs text-white/40">
          Early Stage: Focused on Product-Market Fit Before Aggressive Growth
        </p>
        {/* Desktop: highlighted callout */}
        <div className="hidden sm:block bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-xl px-6 py-3 md:px-8 md:py-4">
          <p className="text-sm md:text-base text-white/60 font-medium">
            <span className="text-violet-400">Early Stage:</span> Focused on Product-Market Fit Before Aggressive Growth
          </p>
        </div>
      </div>
    </Slide>
  );
}

