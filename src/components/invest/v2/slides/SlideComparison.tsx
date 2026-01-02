'use client';

import React from 'react';
import { Slide, SlideTitle, SlideSubtitle, CheckIcon, XIcon, WarningIcon } from '../shared';

const comparisonData = [
  { feature: 'Setup Time', planton: '<1 hour', terraform: '1-2 weeks', vercel: 'N/A', heroku: 'minutes' },
  { feature: 'Backend CI/CD', planton: true, terraform: 'DIY', vercel: 'frontend', heroku: true },
  { feature: 'Your Cloud', planton: true, terraform: true, vercel: false, heroku: false },
  { feature: 'Infra Control', planton: true, terraform: true, vercel: false, heroku: false },
  { feature: 'Open Source', planton: true, terraform: 'partial', vercel: false, heroku: false },
  { feature: 'Cost (7 devs)', planton: '$450/mo', terraform: '$1,200+', vercel: '$200+', heroku: '$500+' },
];

type StatusType = 'yes' | 'no' | 'partial' | 'text';

function getStatus(value: boolean | string): { type: StatusType; display: string | null } {
  // Boolean true/false - just show icon, no text
  if (value === true) {
    return { type: 'yes', display: null };
  }
  if (value === false) {
    return { type: 'no', display: null };
  }
  // String values - show with appropriate styling
  if (value === '<1 hour' || value === '$450/mo') {
    return { type: 'yes', display: value };
  }
  if (value === 'N/A') {
    return { type: 'no', display: value };
  }
  // Partial/warning values
  if (value === 'DIY' || value === 'partial' || value === '1-2 weeks' || value === 'minutes' || value === 'frontend' || value === '$1,200+' || value === '$200+' || value === '$500+') {
    return { type: 'partial', display: value };
  }
  return { type: 'text', display: value };
}

function StatusCell({ value }: { value: boolean | string }) {
  const { type, display } = getStatus(value);
  
  return (
    <div className="flex items-center justify-start pl-[calc(50%-8px)]">
      <span className="w-4 h-4 flex items-center justify-center shrink-0">
        {type === 'yes' && <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
        {type === 'no' && <XIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
        {type === 'partial' && <WarningIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
      </span>
      {display && (
        <span className={`text-xs ml-1 whitespace-nowrap ${
          type === 'yes' ? 'text-emerald-400 font-medium' : 
          type === 'no' ? 'text-red-400' : 
          type === 'partial' ? 'text-amber-400' : 'text-white/60'
        }`}>
          {display}
        </span>
      )}
    </div>
  );
}

export default function SlideComparison() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Why Planton Wins</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        The Only Platform That&apos;s Open Source, Multi-Cloud, and No Lock-In
      </SlideSubtitle>

      {/* Comparison Table */}
      <div className="w-full max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2 p-2 sm:p-3 bg-white/5 border-b border-white/10">
          <div className="text-xs text-white/50 text-left">Feature</div>
          <div className="text-xs text-white font-semibold text-center">Planton</div>
          <div className="text-xs text-white/50 text-center">Terraform</div>
          <div className="text-xs text-white/50 text-center">Vercel</div>
          <div className="text-xs text-white/50 text-center">Heroku</div>
        </div>
        
        {/* Rows */}
        {comparisonData.map((row, index) => (
          <div 
            key={row.feature}
            className={`grid grid-cols-5 gap-1 sm:gap-2 p-2 sm:p-3 ${
              index < comparisonData.length - 1 ? 'border-b border-white/10' : ''
            }`}
          >
            <div className="text-xs text-white/70 text-left">{row.feature}</div>
            <StatusCell value={row.planton} />
            <StatusCell value={row.terraform} />
            <StatusCell value={row.vercel} />
            <StatusCell value={row.heroku} />
          </div>
        ))}
      </div>

      {/* Key differentiator */}
      <p className="text-xs sm:text-sm text-white/50 mt-4 sm:mt-6 max-w-3xl mx-auto whitespace-nowrap">
        <span className="text-emerald-400">✓</span> Only Platform Combining PaaS Developer Experience + IaC Infrastructure + Your Cloud
      </p>
    </Slide>
  );
}

