'use client';

import React from 'react';
import { CheckCircle, Activity, Bot, Cloud } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, RoadmapItem, Grid } from '../shared';

const roadmapItems = [
  {
    phase: 'Now',
    title: 'DevOps in a Box',
    icon: <CheckCircle className="w-4 h-4" />,
    color: 'emerald' as const,
    items: ['InfraHub + ServiceHub live', 'Multi-cloud support'],
    status: 'Live',
  },
  {
    phase: 'Q1 2026',
    title: 'Observability',
    icon: <Activity className="w-4 h-4" />,
    color: 'cyan' as const,
    items: ['Full-stack observability', 'Strong customer demand'],
    status: 'In Design',
  },
  {
    phase: '2026',
    title: 'AI Agent Fleet',
    icon: <Bot className="w-4 h-4" />,
    color: 'violet' as const,
    items: ['Specialized DevOps agents', 'Pipeline troubleshooter'],
    status: 'In R&D',
  },
  {
    phase: 'Long Term',
    title: 'Cloud Provider',
    icon: <Cloud className="w-4 h-4" />,
    color: 'pink' as const,
    items: ['Join AWS, GCP, Azure tier', 'Simple service catalog'],
    status: 'Vision',
  },
];

export default function SlideRoadmap() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Roadmap</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Building essential infrastructure, step by step
      </SlideSubtitle>

      {/* Roadmap Items - 4 column on desktop, 2x2 on mobile */}
      <Grid cols={4} gap="sm" className="mb-4 sm:mb-6">
        {roadmapItems.map((item) => (
          <RoadmapItem
            key={item.phase}
            phase={item.phase}
            title={item.title}
            status={item.status}
            items={item.items}
            color={item.color}
            icon={item.icon}
          />
        ))}
      </Grid>

      {/* Vision Statement */}
      <p className="text-xs sm:text-sm text-white/40 max-w-xl mx-auto">
        Vision: Planton becomes a cloud provider alongside AWS, GCP, Azure—our moat is the control plane and DX
      </p>
    </Slide>
  );
}

