'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, Metric, Grid, Callout } from '../shared';

const metrics = [
  { value: '450+', label: 'Deployments', sublabel: 'Production infra' },
  { value: '100%', label: 'Retention', sublabel: 'Since launch', highlight: true },
  { value: '5', label: 'Customers', sublabel: 'Paying' },
  { value: '$450+', label: 'MRR', sublabel: 'Growing' },
];

const milestones = [
  'Production platform with paying customers',
  'Full InfraHub + ServiceHub live',
  'Multi-cloud: AWS, GCP, Azure, K8s',
  'Open-source Project Planton on GitHub',
];

export default function SlideTraction() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Traction</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Early revenue with production platform
      </SlideSubtitle>

      {/* Metrics Grid - 2x2 */}
      <Grid cols={4} gap="sm" className="mb-4 sm:mb-6">
        {metrics.map((metric) => (
          <Metric
            key={metric.label}
            value={metric.value}
            label={metric.label}
            sublabel={metric.sublabel}
            highlight={metric.highlight}
          />
        ))}
      </Grid>

      {/* Milestones */}
      <Callout className="max-w-xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
          <h3 className="text-sm sm:text-base font-semibold text-white">What We&apos;ve Built</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-left">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>{milestone}</span>
            </div>
          ))}
        </div>
      </Callout>

      {/* Stage Context */}
      <p className="text-xs text-white/40 mt-4 sm:mt-6">
        Early stage: Focused on product-market fit before aggressive growth
      </p>
    </Slide>
  );
}

