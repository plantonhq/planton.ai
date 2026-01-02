'use client';

import React from 'react';
import Image from 'next/image';
import { Slide, SlideTitle, SlideSubtitle } from '../shared';

// Row 1: 2 testimonials
const row1 = [
  {
    name: 'Harsha Gurram',
    role: 'Solo Developer',
    company: 'Jai.CX',
    quote: "Weeks of Terraform → under 1 hr. As Planton's first user, I shaped Infra Charts.",
    avatar: '/images/customers/people/harsha-ch.jpeg',
    logo: '/images/customers/logos/jai-cx.svg',
  },
  {
    name: 'Balaji Borra',
    role: 'DevOps Engineer',
    company: 'TYNYBAY',
    quote: 'I handle 8+ client projects—no more rewriting Terraform between clients.',
    avatar: '/images/customers/people/balaji-borra.png',
    logo: '/images/customers/logos/tynybay.png',
  },
];

// Row 2: 2 testimonials
const row2 = [
  {
    name: 'Rakesh Kandhi',
    role: 'Senior Developer',
    company: 'TYNYBAY',
    quote: 'I deploy to dev, staging, and prod without waiting on DevOps. Game changer.',
    avatar: '/images/customers/people/rakesh-kandhi.jpeg',
    logo: '/images/customers/logos/tynybay.png',
  },
  {
    name: 'Sai Saketh',
    role: 'DevOps',
    company: 'iorta TechNext',
    quote: 'Mature developer experience for our 7-person team without deep AWS expertise.',
    avatar: null,
    logo: '/images/customers/logos/iorta.svg',
  },
];

// Row 3: 1 testimonial (full width, center-aligned)
const row3 = [
  {
    name: 'Rohith Reddy Gopu',
    role: 'CEO',
    company: 'TYNYBAY',
    quote: 'Planton helps us deliver compliant infrastructure for regulated industries.',
    avatar: '/images/customers/people/rohith-reddy-gopu.jpeg',
    logo: '/images/customers/logos/tynybay.png',
  },
];

// Mobile-optimized compact card
function MobileTestimonialCard({ 
  name, 
  role, 
  company, 
  quote, 
  avatar, 
  logo,
}: {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string | null;
  logo: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-md p-1.5 text-left">
      {/* Compact header */}
      <div className="flex items-center gap-1.5 mb-1">
        {avatar ? (
          <Image 
            src={avatar} 
            alt={name} 
            width={20} 
            height={20} 
            className="w-5 h-5 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-[8px] font-bold shrink-0">
            {name.charAt(0)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-medium text-white truncate">{name}</p>
          <p className="text-[8px] text-white/50 truncate">{role}, {company}</p>
        </div>
        <div className="w-4 h-4 shrink-0">
          <Image 
            src={logo} 
            alt={company} 
            width={16} 
            height={16} 
            className="w-full h-full object-contain brightness-0 invert opacity-60"
          />
        </div>
      </div>
      {/* Quote - truncated */}
      <p className="text-[8px] text-white/70 italic line-clamp-2 leading-tight">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

function TestimonialCard({ 
  name, 
  role, 
  company, 
  quote, 
  avatar, 
  logo,
  fullWidth = false,
}: {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string | null;
  logo: string;
  fullWidth?: boolean;
}) {
  if (fullWidth) {
    // Full width layout: Quote on top (centered), attribution below (centered)
    return (
      <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 h-full flex flex-col items-center text-center">
        {/* Quote on top */}
        <p className="text-xs sm:text-sm text-white/70 italic mb-3">
          &ldquo;{quote}&rdquo;
        </p>
        
        {/* Attribution below - centered */}
        <div className="flex items-center gap-2">
          {avatar ? (
            <Image 
              src={avatar} 
              alt={name} 
              width={28} 
              height={28} 
              className="w-7 h-7 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {name.charAt(0)}
            </div>
          )}
          <div className="min-w-0 text-left">
            <p className="text-xs font-medium text-white">{name}</p>
            <p className="text-xs text-white/50">{role}, {company}</p>
          </div>
          <div className="w-5 h-5 shrink-0">
            <Image 
              src={logo} 
              alt={company} 
              width={20} 
              height={20} 
              className="w-full h-full object-contain brightness-0 invert opacity-60"
            />
          </div>
        </div>
      </div>
    );
  }

  // Regular card layout
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 text-left h-full flex flex-col">
      {/* Header with avatar and company logo */}
      <div className="flex items-center gap-2 mb-2">
        {avatar ? (
          <Image 
            src={avatar} 
            alt={name} 
            width={32} 
            height={32} 
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {name.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-white/50">{role}, {company}</p>
        </div>
        <div className="w-5 h-5 shrink-0 ml-auto">
          <Image 
            src={logo} 
            alt={company} 
            width={20} 
            height={20} 
            className="w-full h-full object-contain brightness-0 invert opacity-60"
          />
        </div>
      </div>
      
      {/* Quote */}
      <p className="text-xs sm:text-sm text-white/70 italic flex-1">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export default function SlideWallOfLove() {
  // All testimonials for mobile grid
  const allTestimonials = [...row1, ...row2, ...row3];
  
  return (
    <Slide variant="gradient">
      <SlideTitle>They Shipped. We Listened.</SlideTitle>
      <SlideSubtitle className="mb-2 sm:mb-6 text-[10px] sm:text-sm">
        Voices from Teams Who Moved to Production with Planton
      </SlideSubtitle>

      {/* Mobile: Compact 2-column grid */}
      <div className="sm:hidden grid grid-cols-2 gap-1.5 mx-auto mb-2">
        {allTestimonials.map((testimonial, index) => (
          <MobileTestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            quote={testimonial.quote}
            avatar={testimonial.avatar}
            logo={testimonial.logo}
          />
        ))}
      </div>

      {/* Desktop: 2-2-1 Layout */}
      <div className="hidden sm:flex flex-col gap-4 max-w-4xl mx-auto mb-6">
        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-2 gap-4">
          {row1.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              logo={testimonial.logo}
            />
          ))}
        </div>
        
        {/* Row 2: 2 cards */}
        <div className="grid grid-cols-2 gap-4">
          {row2.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              logo={testimonial.logo}
            />
          ))}
        </div>
        
        {/* Row 3: 1 card (full width) */}
        <div className="w-full">
          {row3.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              logo={testimonial.logo}
              fullWidth
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}

