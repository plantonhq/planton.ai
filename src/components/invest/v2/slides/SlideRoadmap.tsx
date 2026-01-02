'use client';

import React from 'react';
import { CheckCircle, Activity, Bot, Cloud } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, RoadmapItem } from '../shared';

const roadmapItems = [
  {
    phase: 'Now',
    title: 'DevOps in a Box',
    icon: <CheckCircle className="w-4 h-4" />,
    color: 'emerald' as const,
    items: ['InfraHub + ServiceHub Live', 'Multi-Cloud Support'],
    status: 'Live',
  },
  {
    phase: 'Q1 2026',
    title: 'Observability',
    icon: <Activity className="w-4 h-4" />,
    color: 'cyan' as const,
    items: ['Full-Stack Observability', 'Strong Customer Demand'],
    status: 'In Design',
  },
  {
    phase: '2026',
    title: 'AI Agent Fleet',
    icon: <Bot className="w-4 h-4" />,
    color: 'violet' as const,
    items: ['Cursor for DevOps', 'Specialized DevOps Agents'],
    status: 'In R&D',
  },
  {
    phase: 'Long Term',
    title: 'Cloud Provider',
    icon: <Cloud className="w-4 h-4" />,
    color: 'pink' as const,
    items: ['Join AWS, GCP, Azure Tier', 'Simple Service Catalog'],
    status: 'Vision',
  },
];

export default function SlideRoadmap() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Roadmap</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Building Essential Infrastructure, Step by Step
      </SlideSubtitle>

      {/* Roadmap Items - 4 column on desktop, single column centered on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-xs sm:max-w-none mx-auto">
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
      </div>

      {/* Vision Statement */}
      <p className="text-xs sm:text-sm text-white/40 max-w-xl mx-auto">
        Vision: Planton Becomes a Cloud Provider Alongside AWS, GCP, Azure—Our Moat Is the Control Plane and DX
      </p>
    </Slide>
  );
}

