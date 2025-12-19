'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';
import { Section, Card, Badge, PrimaryButton, SecondaryButton, Quote, ArrowRightIcon } from './shared';

const trustIndicators = [
  '100% Retention Rate',
  'Open Source Foundation',
  '24/7 Support Available',
];

const quotes = [
  {
    text: 'Developers self-onboard their own services. That\'s a huge win.',
    author: 'Tynybay',
    context: 'deploying Odwen warehousing platform',
  },
  {
    text: 'Complete AWS ECS environment deployed in under 1 hour with 7 developers managing everything themselves.',
    author: 'iorta TechNext',
    context: 'SalesVerse platform',
  },
];

export const FinalCTA: FC = () => {
  return (
    <Section id="get-started">
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
              <Link href="/pricing">
                <SecondaryButton className="px-6 py-3">
                  View Pricing Calculator
                </SecondaryButton>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Trust indicators */}
      <Box className="flex flex-wrap justify-center gap-3 mt-12">
        {trustIndicators.map((indicator, index) => (
          <Badge key={index} variant="success">
            ✓ {indicator}
          </Badge>
        ))}
      </Box>

      {/* Customer quotes */}
      <Box className="grid md:grid-cols-2 gap-6 mt-12">
        {quotes.map((quote, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-[#151515] to-[#0a0a0a]"
          >
            <Quote
              text={quote.text}
              author={quote.author}
              role={quote.context}
            />
          </Card>
        ))}
      </Box>
    </Section>
  );
};
