'use client';

import React from 'react';
import { Slide, SlideTitle, SlideSubtitle, CheckIcon, XIcon, WarningIcon } from '../shared';

const comparisonData = [
  { feature: 'Setup Time', planton: '<1 hour', terraform: '1-2 weeks', vercel: 'N/A' },
  { feature: 'Backend CI/CD', planton: 'included', terraform: 'diy', vercel: 'frontend' },
  { feature: 'Your Cloud', planton: 'yes', terraform: 'yes', vercel: 'no' },
  { feature: 'Open Modules', planton: '120+', terraform: 'write', vercel: 'no' },
  { feature: 'Cost (7 devs)', planton: '$450/mo', terraform: '$1,200+', vercel: '$200+' },
];

type StatusType = 'yes' | 'no' | 'partial' | 'text';

function getStatus(value: string): { type: StatusType; display: string } {
  if (value === 'yes' || value === 'included' || value === '120+' || value === '<1 hour' || value === '$450/mo') {
    return { type: 'yes', display: value };
  }
  if (value === 'no' || value === 'N/A' || value === 'frontend') {
    return { type: 'no', display: value };
  }
  if (value === 'diy' || value === 'write' || value === '1-2 weeks') {
    return { type: 'partial', display: value };
  }
  return { type: 'text', display: value };
}

function StatusCell({ value }: { value: string }) {
  const { type, display } = getStatus(value);
  
  return (
    <div className="flex items-center justify-center gap-1">
      {type === 'yes' && <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
      {type === 'no' && <XIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
      {type === 'partial' && <WarningIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
      <span className={`text-xs sm:text-sm ${
        type === 'yes' ? 'text-emerald-400 font-medium' : 
        type === 'no' ? 'text-red-400' : 
        type === 'partial' ? 'text-amber-400' : 'text-white/60'
      }`}>
        {display}
      </span>
    </div>
  );
}

export default function SlideComparison() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Why Planton Wins</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        The only platform that&apos;s fully open source, multi-cloud, and no lock-in
      </SlideSubtitle>

      {/* Comparison Table */}
      <div className="w-full max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 gap-2 p-2 sm:p-3 bg-white/5 border-b border-white/10">
          <div className="text-xs sm:text-sm text-white/50 text-left">Feature</div>
          <div className="text-xs sm:text-sm text-white font-semibold text-center">Planton</div>
          <div className="text-xs sm:text-sm text-white/50 text-center">Terraform</div>
          <div className="text-xs sm:text-sm text-white/50 text-center">Vercel</div>
        </div>
        
        {/* Rows */}
        {comparisonData.map((row, index) => (
          <div 
            key={row.feature}
            className={`grid grid-cols-4 gap-2 p-2 sm:p-3 ${
              index < comparisonData.length - 1 ? 'border-b border-white/10' : ''
            }`}
          >
            <div className="text-xs sm:text-sm text-white/70 text-left">{row.feature}</div>
            <StatusCell value={row.planton} />
            <StatusCell value={row.terraform} />
            <StatusCell value={row.vercel} />
          </div>
        ))}
      </div>

      {/* Key differentiator */}
      <p className="text-xs sm:text-sm text-white/50 mt-4 sm:mt-6 max-w-lg mx-auto">
        <span className="text-emerald-400">✓</span> Only platform combining PaaS developer experience + IaC infrastructure + your cloud
      </p>
    </Slide>
  );
}

