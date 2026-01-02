'use client';

import React from 'react';
import { Slide, SlideTitle, SlideSubtitle, TeamMember, Callout } from '../shared';

// College badge for founders who went to same college (2007-2011)
const CollegeBadge = () => (
  <div 
    className="bg-amber-500/20 border border-amber-500/40 rounded-full px-1.5 py-0.5 flex items-center gap-1"
    title="College Batchmates (2007-2011)"
  >
    <span className="text-sm">🎓</span>
  </div>
);

// Row 1: Founders (2 members)
const foundersRow = [
  {
    name: 'Swarup Donepudi',
    role: 'Founder & CEO',
    avatar: 'https://assets.planton.ai/team/swarup-donepudi.png',
    description: (
      <>
        <div><span className="text-emerald-400">Silicon Valley</span> experience.</div>
        <div>10+ yrs DevOps & Cloud.</div>
        <div>Platform Architect.</div>
      </>
    ),
    isCollegeMate: true,
  },
  {
    name: 'Suresh Attaluri',
    role: 'Co-Founder & Backend',
    avatar: 'https://assets.planton.ai/team/suresh-attaluri.png',
    description: (
      <>
        <div>Leading <span className="text-emerald-400">AI</span> R&D.</div>
        <div>Backend & Data Systems.</div>
      </>
    ),
    isCollegeMate: true,
  },
];

// Row 2: Team (3 members)
const teamRow = [
  {
    name: 'Irshad Ahmed',
    role: 'Lead UX Designer',
    avatar: 'https://assets.planton.ai/team/irshad-ahmed.png',
    description: (
      <>
        <div>5 years with team.</div>
        <div>All product design.</div>
      </>
    ),
    isCollegeMate: false,
  },
  {
    name: 'Satish Lakhani',
    role: 'Full-Stack Engineer',
    avatar: 'https://assets.planton.ai/team/satish-lakhani.png',
    description: (
      <>
        <div>Frontend Expert.</div>
        <div>Built Planton WebConsole.</div>
      </>
    ),
    isCollegeMate: false,
  },
  {
    name: 'Avinash Sana',
    role: 'Operations & BD',
    avatar: 'https://assets.planton.ai/team/avinash-sana.png',
    description: (
      <>
        <div>All non-technical operations.</div>
      </>
    ),
    isCollegeMate: true,
  },
];

const strengths = [
  'Deep Domain Expertise',
  '3+ Years Building Together',
  '$500K+ Skin in the Game',
  'Production Platform Shipped',
  'Founding Team: College Batchmates 🎓',
];

export default function SlideTeam() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Team</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Small, Focused, Committed for 3+ Years
      </SlideSubtitle>

      {/* Team Grid - 2 rows on desktop: 2 founders + 3 team members */}
      <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-xs sm:max-w-none mx-auto">
        {/* Row 1: Founders (2 members, centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto w-full">
          {foundersRow.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              avatar={member.avatar}
              badge={member.isCollegeMate ? <CollegeBadge /> : undefined}
            />
          ))}
        </div>
        {/* Row 2: Team (3 members) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 sm:max-w-2xl lg:max-w-3xl mx-auto w-full">
          {teamRow.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              avatar={member.avatar}
              badge={member.isCollegeMate ? <CollegeBadge /> : undefined}
            />
          ))}
        </div>
      </div>

      {/* Team Strengths */}
      <Callout className="max-w-2xl">
        <h3 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 text-center">Why This Team Wins</h3>
        <div className="flex flex-col gap-1 sm:gap-1.5">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-center gap-1.5 text-xs sm:text-sm text-white/60">
              <span className="text-emerald-400 shrink-0">✓</span>
              {strength}
            </div>
          ))}
        </div>
      </Callout>
    </Slide>
  );
}

