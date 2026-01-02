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
      '13+ years of domain knowledge',
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
      <SlideSubtitle className="mb-2 sm:mb-6 text-xs sm:text-sm">
        Early Stage Opportunity with Proven Foundation
      </SlideSubtitle>

      {/* Three Reasons - more compact on mobile */}
      <Grid cols={3} gap="sm" className="mb-2 sm:mb-6">
        {reasons.map((reason) => (
          <Card key={reason.title} className="text-left p-2 sm:p-4">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-3">
              <reason.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${reason.color}`} />
              <CardTitle className="text-xs sm:text-base">{reason.title}</CardTitle>
            </div>
            <ul className="space-y-0.5 sm:space-y-1">
              {reason.points.map((point, index) => (
                <li key={index} className="flex items-start gap-1">
                  <span className={`mt-0.5 text-[10px] sm:text-xs ${reason.color}`}>•</span>
                  <CardText className="text-[10px] sm:text-xs leading-tight">{point}</CardText>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>

      {/* Bottom Line */}
      <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 max-w-lg mx-auto">
        <p className="text-xs sm:text-base text-white font-medium">
          $500K to Capture a $20B+ Market Opportunity
        </p>
        <p className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1">
          Join Us at the Ground Floor of the Next Cloud Provider
        </p>
      </div>
    </Slide>
  );
}

