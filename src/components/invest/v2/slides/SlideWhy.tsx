'use client';

import React from 'react';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, Card, CardTitle, CardText, Grid } from '../shared';

const reasons = [
  {
    icon: Zap,
    title: 'Proven Product',
    points: [
      '100% customer retention',
      '450+ production deployments',
      'Real revenue, real customers',
    ],
    color: 'text-emerald-400',
  },
  {
    icon: Shield,
    title: 'Defensible Moat',
    points: [
      '120+ open source modules',
      'Multi-cloud expertise',
      '3+ years of domain knowledge',
    ],
    color: 'text-violet-400',
  },
  {
    icon: TrendingUp,
    title: 'Massive Market',
    points: [
      '$20B+ DevOps tools market',
      'Every company needs this',
      'AI tailwind accelerating',
    ],
    color: 'text-pink-400',
  },
];

export default function SlideWhy() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Why Invest Now</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Early stage opportunity with proven foundation
      </SlideSubtitle>

      {/* Three Reasons */}
      <Grid cols={3} gap="sm" className="mb-4 sm:mb-6">
        {reasons.map((reason) => (
          <Card key={reason.title} className="text-left">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <reason.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${reason.color}`} />
              <CardTitle className="text-sm sm:text-base">{reason.title}</CardTitle>
            </div>
            <ul className="space-y-1">
              {reason.points.map((point, index) => (
                <li key={index} className="flex items-start gap-1.5">
                  <span className={`mt-0.5 ${reason.color}`}>•</span>
                  <CardText className="text-xs">{point}</CardText>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>

      {/* Bottom Line */}
      <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-white/10 rounded-xl p-3 sm:p-4 max-w-lg mx-auto">
        <p className="text-sm sm:text-base text-white font-medium">
          $500K to capture a $20B+ market opportunity
        </p>
        <p className="text-xs text-white/50 mt-1">
          Join us at the ground floor of the next cloud provider
        </p>
      </div>
    </Slide>
  );
}

