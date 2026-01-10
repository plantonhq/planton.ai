'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { Section, SectionTitle, PrimaryButton, SecondaryButton, ArrowRightIcon } from './shared';

const metrics = [
  { value: '450+', label: 'Infrastructure Deployments' },
  { value: '<1 hr', label: 'Average Setup Time' },
  { value: '100%', label: 'Customer Retention' },
];

export const FinalCTA: FC = () => {
  return (
    <Section variant="gradient" id="cta" className="relative overflow-hidden">
      {/* Background decoration */}
      <Box className="absolute inset-0 opacity-30">
        <Box className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed] rounded-full blur-[150px]" />
        <Box className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full blur-[150px]" />
      </Box>
      
      <Box className="relative z-10">
        {/* Metrics bar */}
        <Box className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {metrics.map((metric, index) => (
            <Box key={index} className="text-center">
              <Typography className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
                {metric.value}
              </Typography>
              <Typography className="text-xs text-[#a0a0a0] mt-1">{metric.label}</Typography>
            </Box>
          ))}
        </Box>
        
        {/* Main CTA */}
        <Stack className="items-center text-center mb-12">
          <SectionTitle>
            Start Deploying{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
              Today
            </span>
          </SectionTitle>
          <Typography className="text-lg text-[#a0a0a0] max-w-2xl mt-4 mb-8">
            Free trial. No credit card required. Deploy your first infrastructure in under an hour.
          </Typography>
          
          {/* CTA buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} className="gap-4">
            <Link href="https://console.planton.ai/signup" target="_blank">
              <PrimaryButton className="px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRightIcon />
              </PrimaryButton>
            </Link>
            <Link href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U" target="_blank">
              <SecondaryButton className="px-8 py-4">
                Book a Demo
              </SecondaryButton>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Section>
  );
};
