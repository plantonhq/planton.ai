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
    <Slide variant="gradient">
      <SlideTitle>Traction</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Early Revenue with Production Platform
      </SlideSubtitle>

      {/* Metrics Grid - 2x2 on mobile, 4 inline on desktop */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
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
      <Callout className="max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
          <h3 className="text-sm sm:text-base font-semibold text-white">What We&apos;ve Built</h3>
        </div>
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-left">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-white/70 whitespace-nowrap">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>{milestone}</span>
            </div>
          ))}
        </div>
      </Callout>

      {/* Stage Context */}
      <p className="text-xs text-white/40 mt-4 sm:mt-6">
        Early Stage: Focused on Product-Market Fit Before Aggressive Growth
      </p>
    </Slide>
  );
}

