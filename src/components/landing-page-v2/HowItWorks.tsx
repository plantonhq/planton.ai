'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Badge, PrimaryButton, SecondaryButton, CloudIcon, RocketIcon, ArrowRightIcon } from './shared';

const steps = [
  {
    number: 1,
    title: 'Connect Your Cloud',
    description: 'Link your AWS, GCP, or Azure account using secure OAuth or assume-role credentials. Planton never stores long-term credentials—everything uses temporary tokens for maximum security.',
    icon: <CloudIcon />,
  },
  {
    number: 2,
    title: 'Choose Your Infrastructure',
    description: 'Browse the Deployment Component Store—pre-built infrastructure charts for common patterns (ECS Environment, GKE Cluster, RDS PostgreSQL, Redis, etc.). Or build custom charts using our DAG orchestration system.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Deploy in Minutes',
    description: 'Watch your infrastructure deploy in real-time with live Terraform visualization. Every change is auditable, every resource is tracked, and every deployment is backed by Tekton CI/CD pipelines.',
    icon: <RocketIcon />,
  },
];

export const HowItWorks: FC = () => {
  return (
    <Section variant="gradient" id="how-it-works">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="success" className="mb-6">HOW IT WORKS</Badge>
        <SectionTitle>
          From Zero to Production in{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Three Steps
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          No DevOps expertise required. No weeks of configuration. Just connect, choose, and deploy.
        </SectionSubtitle>
      </Stack>

      {/* Steps */}
      <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative overflow-hidden">
        {/* Connector lines (desktop only) - positioned at icon center (40px), spanning between icons */}
        {/* Line 1: from right edge of icon 1 (16.66% + 56px) to left edge of icon 2 (50% - 56px) */}
        <Box className="hidden lg:block absolute top-10 left-[calc(16.66%+56px)] w-[calc(33.34%-112px)] h-0.5 bg-gradient-to-r from-[#7c3aed]/50 to-[#0ea5e9]/50" />
        {/* Line 2: from right edge of icon 2 (50% + 56px) to left edge of icon 3 (83.33% - 56px) */}
        <Box className="hidden lg:block absolute top-10 left-[calc(50%+56px)] w-[calc(33.34%-112px)] h-0.5 bg-gradient-to-r from-[#0ea5e9]/50 to-[#10b981]/50" />
        
        {steps.map((step, index) => (
          <Box key={index} className="relative">
            {/* Mobile connector line */}
            {index < steps.length - 1 && (
              <Box className="lg:hidden absolute left-1/2 top-[calc(100%+8px)] w-0.5 h-8 bg-gradient-to-b from-[#7c3aed]/50 to-[#0ea5e9]/50 -translate-x-1/2" />
            )}
            
            <Box className="flex flex-col items-center text-center">
              {/* Icon container */}
              <Box 
                className="
                  w-20 h-20 rounded-2xl
                  bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/20
                  border border-[#7c3aed]/30
                  flex items-center justify-center mb-6
                  text-[#a78bfa]
                "
              >
                {step.icon}
              </Box>
              
              {/* Step number badge */}
              <Badge variant="purple" className="mb-4">
                Step {step.number}
              </Badge>
              
              {/* Title */}
              <Typography className="text-xl font-semibold text-white mb-3">
                {step.title}
              </Typography>
              
              {/* Description */}
              <Typography className="text-sm text-[#a0a0a0] max-w-sm leading-relaxed">
                {step.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* CTAs */}
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        className="justify-center items-center gap-4"
      >
        <Link href="https://console.planton.ai/" target="_blank">
          <PrimaryButton className="px-8 py-4">
            Start Your First Deployment
            <ArrowRightIcon />
          </PrimaryButton>
        </Link>
        <Link href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U" target="_blank">
          <SecondaryButton className="px-8 py-4">
            Watch 5-Minute Demo →
          </SecondaryButton>
        </Link>
      </Stack>
    </Section>
  );
};

