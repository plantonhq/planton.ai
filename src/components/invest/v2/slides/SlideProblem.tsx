'use client';

import React from 'react';
import { Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, Card, CardTitle, CardText, Grid, Callout } from '../shared';

const problems = [
  {
    icon: Clock,
    title: 'Weeks to Deploy',
    description: 'Infrastructure setup takes weeks, not minutes',
  },
  {
    icon: DollarSign,
    title: '$150K+ Per Engineer',
    description: 'Every company needs dedicated DevOps talent',
  },
  {
    icon: AlertTriangle,
    title: 'Multi-Cloud Chaos',
    description: 'AWS, GCP, Azure—each with different tools',
  },
];

export default function SlideProblem() {
  return (
    <Slide variant="problem">
      <SlideTitle>The Problem</SlideTitle>
      <SlideSubtitle className="mb-6 sm:mb-8">
        Cloud infrastructure is complex. Every company faces the same struggles.
      </SlideSubtitle>

      {/* Problem Cards - 3 column grid */}
      <Grid cols={3} gap="sm" className="mb-6 sm:mb-8">
        {problems.map((problem) => (
          <Card key={problem.title} className="text-left">
            <problem.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 sm:mb-3" />
            <CardTitle className="mb-1">{problem.title}</CardTitle>
            <CardText>{problem.description}</CardText>
          </Card>
        ))}
      </Grid>

      {/* Bottom Line */}
      <Callout variant="default" className="border-red-500/30 bg-red-500/10">
        <p className="text-sm sm:text-base md:text-lg text-white font-medium">
          80% of cloud services are the same patterns—
          <span className="text-red-400"> rebuilt from scratch at every company.</span>
        </p>
      </Callout>
    </Slide>
  );
}

