'use client';

import React from 'react';
import Image from 'next/image';
import { Layers } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle } from '../shared';

// GitHub icon SVG (same as landing page)
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Infrastructure steps
const infraSteps = [
  {
    iconType: 'image' as const,
    iconSrc: '/images/providers/aws.svg',
    title: 'Connect Cloud',
    description: 'Link AWS, GCP, or Azure with Secure OAuth',
  },
  {
    iconType: 'lucide' as const,
    icon: Layers,
    title: 'Choose Infra',
    description: 'Pick from 120+ Deployment Components',
  },
  {
    iconType: 'image' as const,
    iconSrc: '/images/providers/terraform.svg',
    title: 'Deploy',
    description: 'Live Terraform Visualization in Minutes',
  },
];

// Service steps
const serviceSteps = [
  {
    iconType: 'svg' as const,
    title: 'Connect Git',
    description: 'Link GitHub, GitLab, or Bitbucket',
  },
  {
    iconType: 'image' as const,
    iconSrc: '/images/tekton.svg',
    title: 'Deploy Services',
    description: 'Git Push to Production, No CI/CD Setup',
  },
];

export default function SlideProduct() {
  return (
    <Slide variant="gradient">
      <SlideTitle>How It Works</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        From Zero to Production in Minutes
      </SlideSubtitle>

      {/* InfraHub - 3-Step Process */}
      <div className="mb-4 sm:mb-6">
        <p className="text-xs text-emerald-400 font-medium mb-2 sm:mb-3">Infrastructure</p>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {infraSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center text-center flex-1 max-w-[140px] sm:max-w-[160px]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 sm:mb-3">
                  {step.iconType === 'image' ? (
                    <Image 
                      src={step.iconSrc!} 
                      alt={step.title} 
                      width={48} 
                      height={48} 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  ) : (
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-400" />
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-0.5">{step.title}</h3>
                <p className="text-xs text-white/50 hidden sm:block">{step.description}</p>
              </div>
              {index < infraSteps.length - 1 && (
                <div className="text-white/30 text-lg">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ServiceHub - 2-Step Process */}
      <div className="mb-4 sm:mb-6">
        <p className="text-xs text-violet-400 font-medium mb-2 sm:mb-3">Services</p>
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {serviceSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center text-center flex-1 max-w-[160px] sm:max-w-[180px]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 sm:mb-3">
                  {step.iconType === 'svg' ? (
                    <GitHubIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  ) : (
                    <Image 
                      src={step.iconSrc!} 
                      alt={step.title} 
                      width={48} 
                      height={48} 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-0.5">{step.title}</h3>
                <p className="text-xs text-white/50 hidden sm:block">{step.description}</p>
              </div>
              {index < serviceSteps.length - 1 && (
                <div className="text-white/30 text-lg">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Result callout */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 max-w-lg mx-auto">
        <p className="text-sm sm:text-base text-white font-medium">
          ⚡ Complete Cloud Infra + Service Deployments in <span className="text-emerald-400">&lt;1 hour</span>
        </p>
        <p className="text-xs text-white/50 mt-1">vs. Weeks with Manual Setup</p>
      </div>
    </Slide>
  );
}

