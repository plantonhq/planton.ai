'use client';

import React from 'react';
import { Code, Palette, Layout, Briefcase } from 'lucide-react';
import { Slide, SlideTitle, SlideSubtitle, TeamMember, Callout } from '../shared';

const teamMembers = [
  {
    name: 'Swarup Donepudi',
    role: 'Founder & CEO',
    icon: <Code className="w-4 h-4 text-pink-400" />,
    description: '10+ years DevOps. Built entire platform.',
    highlight: true,
  },
  {
    name: 'Suresh Attaluri',
    role: 'Co-Founder & Backend',
    icon: <Code className="w-4 h-4 text-white/60" />,
    description: '10 years collaboration. Backend systems.',
    highlight: false,
  },
  {
    name: 'Irshad Ahmed',
    role: 'Lead UX Designer',
    icon: <Palette className="w-4 h-4 text-white/60" />,
    description: '5 years with team. All product design.',
    highlight: false,
  },
  {
    name: 'Satish Lakhani',
    role: 'Full-Stack Engineer',
    icon: <Layout className="w-4 h-4 text-white/60" />,
    description: 'Built entire web console.',
    highlight: false,
  },
  {
    name: 'Avinash Sana',
    role: 'Operations & BD',
    icon: <Briefcase className="w-4 h-4 text-white/60" />,
    description: 'All non-technical operations.',
    highlight: false,
  },
];

const strengths = [
  'Deep Domain Expertise',
  '3+ Years Building Together',
  '$500K+ Skin in the Game',
  'Production Platform Shipped',
];

export default function SlideTeam() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Team</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Small, Focused, Committed for 3+ Years
      </SlideSubtitle>

      {/* Team Grid - responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            description={member.description}
            highlight={member.highlight}
            icon={member.icon}
          />
        ))}
      </div>

      {/* Team Strengths */}
      <Callout className="max-w-xl">
        <h3 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Why This Team Wins</h3>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-center gap-1.5 text-xs sm:text-sm text-white/60">
              <span className="text-emerald-400">✓</span>
              {strength}
            </div>
          ))}
        </div>
      </Callout>
    </Slide>
  );
}

