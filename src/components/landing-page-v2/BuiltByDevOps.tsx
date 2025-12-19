'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, Badge } from './shared';

const stack = [
  { label: '10+ database types', description: 'ClickHouse, Redis, Postgres, MongoDB, and more' },
  { label: 'Deployment target', description: 'Google Cloud Platform (multi-region)' },
  { label: 'Orchestration', description: 'All databases run on Kubernetes, deployed via Planton' },
  { label: 'Service Hub', description: 'All backend services deployed through Planton pipelines (Tekton)' },
  { label: 'Zero manual deployments', description: 'Everything through the platform or CLI' },
];

const philosophy = [
  {
    title: 'Grounded in Reality',
    description: 'Planton solves real problems experienced by DevOps engineers—no hype, no theoretical solutions.',
    icon: '🎯',
  },
  {
    title: 'Customer-Driven Roadmap',
    description: 'Features are prioritized based on actual customer requests from paying users—not hypothetical use cases.',
    icon: '📋',
  },
  {
    title: 'Iterate Fast, Break Nothing',
    description: 'Platform stability is non-negotiable. New features ship to beta first, then roll out gradually.',
    icon: '🚀',
  },
  {
    title: 'Open by Default',
    description: 'All deployment components open source. Transparent about how things work. No black boxes.',
    icon: '🔓',
  },
];

export const BuiltByDevOps: FC = () => {
  return (
    <Section id="built-by-devops">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">ABOUT</Badge>
        <SectionTitle>
          Built by DevOps Engineers,{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            For Real-World Use
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Not a theory. Not a prototype. A production platform born from 10+ years 
          of solving infrastructure problems at scale.
        </SectionSubtitle>
      </Stack>

      {/* Dogfooding */}
      <Box className="mb-16">
        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          <Box>
            <Box className="flex items-center gap-3 mb-6">
              <Box className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
                <Typography className="text-2xl">🐕</Typography>
              </Box>
              <Typography className="text-xl font-semibold text-white">
                Dogfooding: Planton Runs on Planton
              </Typography>
            </Box>
            
            <BodyText className="mb-6">
              <span className="text-white font-semibold">
                We Don&apos;t Ask You to Trust Something We Don&apos;t Use:
              </span>{' '}
              Planton&apos;s production infrastructure is 100% managed through Planton itself. 
              Zero exceptions.
            </BodyText>
            
            <Stack className="gap-3">
              {stack.map((item, index) => (
                <Box key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[#111] border border-[#2a2a2a]">
                  <Box className="mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </Box>
                  <Box>
                    <Typography className="text-white text-sm font-medium">
                      {item.label}
                    </Typography>
                    <Typography className="text-xs text-[#a0a0a0]">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
          
          <Card className="p-0 overflow-hidden">
            <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
              <Typography className="text-sm font-medium text-white">
                Planton Infrastructure (Meta)
              </Typography>
            </Box>
            <Box className="p-6 bg-[#0a0a0a]">
              {/* Visual representation */}
              <Box className="space-y-4">
                <Box className="flex items-center gap-4">
                  <Box className="w-10 h-10 rounded-lg bg-[#7c3aed]/20 flex items-center justify-center text-xl">
                    🗄️
                  </Box>
                  <Box className="flex-1">
                    <Box className="h-3 rounded bg-gradient-to-r from-[#7c3aed] to-[#7c3aed]/50" style={{ width: '90%' }} />
                    <Typography className="text-xs text-[#666] mt-1">Databases (10+ types)</Typography>
                  </Box>
                </Box>
                <Box className="flex items-center gap-4">
                  <Box className="w-10 h-10 rounded-lg bg-[#0ea5e9]/20 flex items-center justify-center text-xl">
                    ☸️
                  </Box>
                  <Box className="flex-1">
                    <Box className="h-3 rounded bg-gradient-to-r from-[#0ea5e9] to-[#0ea5e9]/50" style={{ width: '85%' }} />
                    <Typography className="text-xs text-[#666] mt-1">Kubernetes Clusters</Typography>
                  </Box>
                </Box>
                <Box className="flex items-center gap-4">
                  <Box className="w-10 h-10 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-xl">
                    🔧
                  </Box>
                  <Box className="flex-1">
                    <Box className="h-3 rounded bg-gradient-to-r from-[#10b981] to-[#10b981]/50" style={{ width: '95%' }} />
                    <Typography className="text-xs text-[#666] mt-1">Backend Services</Typography>
                  </Box>
                </Box>
              </Box>
              
              <Box className="mt-6 p-3 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30">
                <Typography className="text-xs text-[#10b981]">
                  ✨ Every feature we ship, we use ourselves
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Support */}
      <Box className="grid md:grid-cols-2 gap-6 mb-16">
        <Card>
          <Typography className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            24/7 Support Capability
          </Typography>
          <BodyText>
            Distributed team across time zones ensures customer issues get addressed 
            around the clock—not just business hours.
          </BodyText>
        </Card>
        
        <Card>
          <Typography className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            Customer Success Focus
          </Typography>
          <BodyText>
            100% retention rate didn&apos;t happen by accident. We iterate rapidly on customer 
            feedback and treat early adopters as partners, not just users.
          </BodyText>
        </Card>
      </Box>

      {/* Philosophy */}
      <Box>
        <Typography className="text-xl font-semibold text-white text-center mb-8">
          Engineering Philosophy
        </Typography>
        <Box className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {philosophy.map((item, index) => (
            <Card key={index} className="text-center p-5">
              <Typography className="text-3xl mb-3">{item.icon}</Typography>
              <Typography className="text-white font-medium mb-2">{item.title}</Typography>
              <Typography className="text-xs text-[#a0a0a0]">{item.description}</Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Section>
  );
};
