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
    role: 'Founder',
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
    role: 'Co-Founder',
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
];

const strengths = [
  'Deep Domain Expertise',
  '3+ Years Building Together',
  '$500K+ Skin in the Game',
  'Production Platform Shipped',
  'Founding Team: College Batchmates 🎓',
];

export default function SlideTeam() {
  // Combine all team members for mobile grid
  const allMembers = [...foundersRow, ...teamRow];
  
  return (
    <Slide variant="gradient">
      <SlideTitle className="-mt-8 sm:-mt-12">Team</SlideTitle>
      <SlideSubtitle className="mb-2 sm:mb-6 text-xs sm:text-sm">
        Small, Focused, Committed for 3+ Years
      </SlideSubtitle>

      {/* Mobile: 2-column compact grid for all 5 members */}
      <div className="sm:hidden grid grid-cols-2 gap-1.5 mb-2 mx-auto w-full">
        {allMembers.map((member) => (
          <div key={member.name} className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-left relative">
            {member.isCollegeMate && (
              <div className="absolute -top-1 -right-1">
                <CollegeBadge />
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-6 h-6 rounded-full object-cover object-[center_25%] shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-[10px] font-semibold text-white truncate">{member.name}</h3>
                <p className="text-[8px] text-white/50 truncate">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 2 rows - 2 founders + 3 team members */}
      <div className="hidden sm:flex flex-col gap-5 md:gap-6 lg:gap-7 mb-10 mx-auto">
        {/* Row 1: Founders (2 members, centered) */}
        <div className="grid grid-cols-2 gap-5 md:gap-6 lg:gap-7 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
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
        <div className="grid grid-cols-3 gap-5 md:gap-6 lg:gap-7 max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto w-full">
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

      {/* Team Strengths - compact on mobile */}
      <Callout className="max-w-2xl p-2 sm:p-4">
        <h3 className="text-[10px] sm:text-base font-semibold text-white mb-1 sm:mb-3 text-center">Why This Team Wins</h3>
        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-x-2 gap-y-0.5 sm:gap-1.5">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-sm text-white/60">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span className="leading-tight">{strength}</span>
            </div>
          ))}
        </div>
      </Callout>
    </Slide>
  );
}

