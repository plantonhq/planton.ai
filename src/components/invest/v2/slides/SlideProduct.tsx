'use client';

import React from 'react';
import { Cloud, Layers, Rocket } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, Badge } from '../shared';

const steps = [
  {
    icon: Cloud,
    title: 'Connect Cloud',
    description: 'Link AWS, GCP, or Azure with secure OAuth',
    badge: 'Step 1',
  },
  {
    icon: Layers,
    title: 'Choose Infra',
    description: 'Pick from 120+ deployment components',
    badge: 'Step 2',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Live Terraform visualization in minutes',
    badge: 'Step 3',
  },
];

export default function SlideProduct() {
  return (
    <Slide variant="gradient">
      <SlideTitle>How It Works</SlideTitle>
      <SlideSubtitle className="mb-6 sm:mb-8">
        From zero to production in three steps
      </SlideSubtitle>

      {/* 3-Step Process */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 md:gap-4 mb-6 sm:mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            {/* Step Card */}
            <div className="flex flex-col items-center text-center w-full sm:w-auto sm:flex-1 max-w-[200px]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 flex items-center justify-center mb-2 sm:mb-3">
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-violet-400" />
              </div>
              <Badge variant="purple" className="mb-1.5 sm:mb-2">{step.badge}</Badge>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1">{step.title}</h3>
              <p className="text-xs text-white/50 px-2">{step.description}</p>
            </div>
            
            {/* Arrow connector - hidden on mobile, shown on sm+ */}
            {index < steps.length - 1 && (
              <div className="hidden sm:block text-white/30 text-xl md:text-2xl">→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Result callout */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 max-w-md mx-auto">
        <p className="text-sm sm:text-base text-white font-medium">
          ⚡ Complete infrastructure in <span className="text-emerald-400">&lt;1 hour</span>
        </p>
        <p className="text-xs text-white/50 mt-1">vs. weeks with manual setup</p>
      </div>
    </Slide>
  );
}

