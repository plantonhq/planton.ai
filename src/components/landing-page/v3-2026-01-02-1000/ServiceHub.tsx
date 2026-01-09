'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, CheckIcon, Badge } from './shared';

const youGet = [
  'Automatic pipeline creation on every commit',
  'Built-in Docker image building and registry pushes',
  'Multi-environment support (dev, QA, staging, prod)',
  'Deploy to AWS ECS, GCP Cloud Run, Azure, or Cloudflare Workers',
];

const pipelineSteps = [
  { label: 'Commit Pushed', status: 'complete' },
  { label: 'Docker Build', status: 'complete' },
  { label: 'Push to Registry', status: 'complete' },
  { label: 'Deploy to ECS', status: 'running' },
  { label: 'Health Check', status: 'pending' },
];

export const ServiceHub: FC = () => {
  return (
    <Section variant="gradient" id="service-hub">
      {/* Section header */}
      <Stack className="items-center text-center mb-12">
        <Badge variant="purple" className="mb-6">SERVICE HUB</Badge>
        <SectionTitle>
          Vercel for Backend—
          <span className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">
            In YOUR Cloud
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Git push to production. Everything runs in your cloud account with full visibility.
        </SectionSubtitle>
      </Stack>

      {/* Features + Pipeline visual */}
      <Box className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* What you get */}
        <Card className="border-[#10b981]/30 bg-[#10b981]/5">
          <Typography component="div" className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <Box className="w-8 h-8 rounded-lg bg-[#10b981]/20 flex items-center justify-center">
              <CheckIcon />
            </Box>
            What You Get
          </Typography>
          <Stack className="gap-3">
            {youGet.map((item, index) => (
              <Box key={index} className="flex items-start gap-3">
                <Box className="flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </Box>
                <Typography className="text-[#b0b0b0]">{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Card>

        {/* Pipeline visual */}
        <Card className="p-0 overflow-hidden">
          <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
            <Box className="flex items-center justify-between">
              <Typography className="text-sm font-medium text-white">Pipeline #247</Typography>
              <Badge variant="success">Running</Badge>
            </Box>
          </Box>
          <Box className="p-6 bg-[#0a0a0a]">
            <Stack className="gap-3">
              {pipelineSteps.map((step, index) => (
                <Box key={index} className="flex items-center gap-4 p-3 rounded-lg bg-[#111] border border-[#2a2a2a]">
                  <Box className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    step.status === 'complete' ? 'bg-[#10b981]'
                    : step.status === 'running' ? 'bg-[#0ea5e9] animate-pulse'
                    : 'bg-[#2a2a2a]'
                  }`}>
                    {step.status === 'complete' && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Box>
                  <Typography className={`text-sm ${step.status === 'pending' ? 'text-[#666]' : 'text-white'}`}>
                    {step.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Card>
      </Box>

      {/* Customer quote */}
      <Box className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0ea5e9]/20 via-[#0f0f1a] to-[#7c3aed]/20 border border-[#0ea5e9]/30 p-8 md:p-12">
        <Box className="relative z-10">
          <Typography className="text-2xl md:text-3xl text-white font-medium italic mb-6 leading-relaxed">
            &quot;Developers self-onboard their own services. We went from deploying once a week to 10+ times per day.&quot;
          </Typography>

          <Box className="flex items-center gap-4 mb-6">
            <Box className="w-12 h-12 rounded-full bg-[#1a1a1a] p-2 flex items-center justify-center overflow-hidden">
              <img
                src="/images/customers/logos/tynybay.png"
                alt="TYNYBAY"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </Box>
            <Box>
              <Typography className="text-white font-semibold">Engineering Lead</Typography>
              <Typography className="text-[#a0a0a0] text-sm">TYNYBAY</Typography>
            </Box>
          </Box>

          <Box className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2a2a2a]">
            <Box className="text-center">
              <Typography className="text-xl font-bold text-white">3</Typography>
              <Typography className="text-xs text-[#666]">Person Team</Typography>
            </Box>
            <Box className="text-center">
              <Typography className="text-xl font-bold text-[#10b981]">&lt;1 hr</Typography>
              <Typography className="text-xs text-[#666]">Setup</Typography>
            </Box>
            <Box className="text-center">
              <Typography className="text-xl font-bold text-[#0ea5e9]">10+</Typography>
              <Typography className="text-xs text-[#666]">Deploys/Day</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};
