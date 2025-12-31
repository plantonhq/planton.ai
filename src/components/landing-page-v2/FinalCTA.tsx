'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { Section, Card, Badge, PrimaryButton, SecondaryButton, ArrowRightIcon } from './shared';

const metrics = [
  { value: '450+', label: 'Deployments' },
  { value: '100%', label: 'Retention' },
  { value: '<1 hr', label: 'Setup Time' },
  { value: '$144K', label: 'Avg Savings' },
];

const quotes = [
  {
    text: 'For a client in regulated industry (BFSI) who mandated GCP, Planton delivered the entire infra despite zero GCP experience on our team. Mature infrastructure out-of-the-box. Using Planton for all future client projects.',
    author: 'Rohith Reddy Gopu',
    role: 'CEO, TynyBay',
    avatar: '/images/customers/people/rohith-reddy-gopu.jpeg',
  },
  {
    text: "As Planton's first user, I filled out forms one by one for VPC, ECS, Route 53, certificates. That led to Infra Charts—now I deploy complete environments in a single form.",
    author: 'Harsha CH',
    role: 'Solo Developer, Jai.CX',
    avatar: '/images/customers/people/harsha-ch.jpeg',
  },
  {
    text: 'I handle 8+ client projects with Planton—no more rewriting Terraform between clients. My efficiency has improved dramatically.',
    author: 'Balaji Borra',
    role: 'DevOps Engineer, TynyBay',
    avatar: '/images/customers/people/balaji-borra.png',
  },
  {
    text: 'I can now update service configurations and deploy to dev, staging, and prod—all without waiting on DevOps.',
    author: 'Rakesh Kandhi',
    role: 'Senior Developer, TynyBay',
    avatar: '/images/customers/people/rakesh-kandhi.jpeg',
  },
  {
    text: 'Planton enabled me to provide a mature developer experience to our 7-person team without requiring deep AWS expertise.',
    author: 'Sai Saketh',
    role: 'Junior DevOps, iorta TechNext',
    avatar: null,
  },
];

const QuoteCarousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Box 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote display */}
      <Box className="min-h-[200px] flex items-center justify-center">
        {quotes.map((quote, index) => (
          <Box
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === activeIndex 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8 pointer-events-none'
            }`}
          >
            <Card className="h-full bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
              <Box component="p" className="text-lg md:text-xl text-white italic leading-relaxed mb-6">
                &quot;{quote.text}&quot;
              </Box>
              <Box className="flex items-center gap-3">
                {quote.avatar ? (
                  <Box className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={quote.avatar} 
                      alt={quote.author}
                      className="w-full h-full object-cover"
                    />
                  </Box>
                ) : (
                  <Box className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {quote.author.split(' ').map(n => n[0]).join('')}
                  </Box>
                )}
                <Box>
                  <Box component="span" className="text-white font-medium text-sm block">
                    {quote.author}
                  </Box>
                  <Box component="span" className="text-[#666] text-xs block">
                    {quote.role}
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Dots indicator */}
      <Stack direction="row" className="justify-center items-center gap-3 mt-8">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-[#7c3aed] w-8 h-3' 
                : 'bg-[#444] hover:bg-[#666] w-3 h-3'
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const FinalCTA: FC = () => {
  return (
    <Section id="get-started">
      {/* Metrics bar at top */}
      <Box className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((metric, index) => (
          <Box
            key={index}
            className="text-center p-6 rounded-xl bg-[#151515] border border-[#2a2a2a]"
          >
            <Typography className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
              {metric.value}
            </Typography>
            <Typography className="text-xs md:text-sm text-[#a0a0a0] mt-1">
              {metric.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Main CTA content */}
      <Box className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c3aed]/20 via-[#0f0f1a] to-[#0ea5e9]/20 border border-[#7c3aed]/30 p-8 md:p-16">
        {/* Background effects */}
        <Box 
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          sx={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <Box 
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-15"
          sx={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        <Box className="relative z-10">
          <Stack className="items-center text-center gap-8">
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Ready to Eliminate Your{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
                DevOps Bottleneck?
              </span>
            </Typography>
            
            <Typography className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl">
              Join teams deploying infrastructure in minutes, not weeks.
            </Typography>

            {/* Primary CTA */}
            <Box className="flex flex-col items-center gap-4">
              <Link href="https://console.planton.ai/" target="_blank">
                <PrimaryButton className="text-lg md:text-xl px-10 py-5 shadow-2xl shadow-purple-500/30">
                  Start Free Trial
                  <ArrowRightIcon />
                </PrimaryButton>
              </Link>
              <Stack className="gap-1 text-center">
                <Typography className="text-sm text-[#a0a0a0]">
                  100 automation minutes included • No credit card required
                </Typography>
                <Typography className="text-sm text-[#666]">
                  Deploy your first environment in &lt;10 minutes
                </Typography>
              </Stack>
            </Box>

            {/* Secondary CTAs */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              className="gap-4 mt-4"
            >
              <Link href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U" target="_blank">
                <SecondaryButton className="px-6 py-3">
                  Book Live Demo
                </SecondaryButton>
              </Link>
              <Link href="#roi-calculator">
                <SecondaryButton className="px-6 py-3">
                  Calculate Your Savings
                </SecondaryButton>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Trust indicators */}
      <Box className="flex flex-wrap justify-center gap-3 mt-12">
        <Badge variant="success">✓ 100% Retention Rate</Badge>
        <Badge variant="success">✓ Open Source Foundation</Badge>
        <Badge variant="success">✓ 24/7 Support Available</Badge>
        <Badge variant="success">✓ No Vendor Lock-In</Badge>
      </Box>

      {/* Quote carousel */}
      <Box className="mt-12">
        <QuoteCarousel />
      </Box>
    </Section>
  );
};
