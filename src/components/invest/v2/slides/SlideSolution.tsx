'use client';

import React from 'react';
import { Globe, Zap, CheckCircle } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, Card } from '../shared';

export default function SlideSolution() {
  return (
    <Slide variant="solution">
      <SlideTitle>The Solution</SlideTitle>
      <SlideSubtitle className="mb-6 sm:mb-8">
        One Platform to Deploy Infrastructure and Services Across Any Cloud
      </SlideSubtitle>

      {/* Two product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
        {/* InfraHub */}
        <Card className="text-left border-emerald-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">InfraHub</h3>
          </div>
          <p className="text-xs text-emerald-400/80 mb-2">
            Replaces Terraform Enterprise / Pulumi Cloud
          </p>
          <p className="text-xs sm:text-sm text-white/70 mb-2">
            Deploy Any Cloud Resource with a Single API
          </p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>AWS, GCP, Azure, Kubernetes</span>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Pre-Built Infrastructure Templates</span>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Point-and-Click Deployment</span>
            </li>
          </ul>
        </Card>

        {/* ServiceHub */}
        <Card className="text-left border-violet-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">ServiceHub</h3>
          </div>
          <p className="text-xs text-violet-400/80 mb-2">
            Replaces GitHub Actions / Jenkins / GitLab Pipelines
          </p>
          <p className="text-xs sm:text-sm text-white/70 mb-2">
            Vercel-Like Experience for Backend Services
          </p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
              <span>Git Push to Production</span>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
              <span>No Dockerfile Required</span>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
              <span>Built-In CI/CD with Tekton</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* The Promise - Green gradient like v1 */}
      <div className="bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-teal-500/20 border border-emerald-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 max-w-2xl mx-auto">
        <p className="text-base sm:text-lg md:text-xl text-white font-medium">
          &ldquo;Vercel for Backend&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-white/60 mt-1">
          The Simplicity of Vercel. The Power of Any Cloud.
        </p>
        <p className="text-xs text-emerald-400/80 mt-2">
          Save $ and eliminate integration chaos
        </p>
      </div>
    </Slide>
  );
}

