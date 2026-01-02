'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, XIcon, Badge } from './shared';

const noMore = [
  'Writing Dockerfiles (unless you want control—then it\'s optional)',
  'Configuring GitHub Actions or GitLab CI',
  'Managing container registries manually',
  'Orchestrating deployments across environments',
];

const youGet = [
  'Automatic pipeline creation on every commit',
  'Built-in Docker image building and registry pushes',
  'Live logs and deployment progress',
  'Multi-environment support (dev, QA, staging, prod)',
];

const supportedTargets = [
  { name: 'AWS ECS', description: 'Container services without Kubernetes complexity', highlight: 'iorta TechNext deploys SalesVerse here' },
  { name: 'AWS EKS', description: 'Full Kubernetes power when you need it', highlight: null },
  { name: 'GCP Cloud Run', description: 'Serverless containers that scale to zero', highlight: 'Odwen deploys here' },
  { name: 'Azure Cloud Functions', description: 'Event-driven serverless compute', highlight: null },
  { name: 'Cloudflare Workers', description: 'Edge compute for global performance', highlight: null },
];

const pipelineSteps = [
  { label: 'Commit Pushed', status: 'complete', time: '0s' },
  { label: 'Build Started', status: 'complete', time: '5s' },
  { label: 'Docker Build', status: 'complete', time: '45s' },
  { label: 'Push to Registry', status: 'complete', time: '1m 20s' },
  { label: 'Deploy to ECS', status: 'running', time: '2m 10s' },
  { label: 'Health Check', status: 'pending', time: '—' },
];

export const ServiceHub: FC = () => {
  return (
    <Section variant="gradient" id="service-hub">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">SERVICE HUB</Badge>
        <SectionTitle>
          Vercel for Backend—
          <span className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">
            In YOUR Cloud
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Connect Git repo → Automatic pipelines → Multi-cloud deployment
        </SectionSubtitle>
      </Stack>

      {/* Intro text */}
      <Box className="max-w-3xl mx-auto text-center mb-16">
        <BodyText className="text-lg">
          Vercel nailed the developer experience for frontend deployments. Service Hub 
          brings that same magic to backend services—with one critical difference: 
          everything runs in <span className="text-white font-semibold">YOUR</span> cloud 
          account. You keep full infrastructure control and visibility.
        </BodyText>
      </Box>

      {/* No More vs You Get */}
      <Box className="grid md:grid-cols-2 gap-6 mb-20">
        {/* No More */}
        <Card className="border-[#ef4444]/30 bg-[#ef4444]/5">
          <Typography className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <Box className="w-8 h-8 rounded-lg bg-[#ef4444]/20 flex items-center justify-center">
              <XIcon />
            </Box>
            No More
          </Typography>
          <Stack className="gap-4">
            {noMore.map((item, index) => (
              <Box key={index} className="flex items-start gap-3">
                <Box className="flex-shrink-0 mt-0.5">
                  <XIcon />
                </Box>
                <Typography className="text-[#b0b0b0]">{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Card>

        {/* You Get */}
        <Card className="border-[#10b981]/30 bg-[#10b981]/5">
          <Typography className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <Box className="w-8 h-8 rounded-lg bg-[#10b981]/20 flex items-center justify-center">
              <CheckIcon />
            </Box>
            You Get
          </Typography>
          <Stack className="gap-4">
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
      </Box>

      {/* Multi-cloud consistency */}
      <Box className="mb-20">
        <Box className="text-center mb-12">
          <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
            Same Developer Experience—Any Cloud, Any Target
          </Typography>
          <BodyText className="max-w-2xl mx-auto">
            Deploy to any platform. The Service Hub experience stays identical. 
            No vendor lock-in. No relearning workflows when you switch clouds.
          </BodyText>
        </Box>

        <Box className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportedTargets.map((target) => (
            <Card key={target.name} className="p-5">
              <Typography className="text-white font-medium mb-1">
                {target.name}
              </Typography>
              <Typography className="text-sm text-[#a0a0a0] mb-2">
                {target.description}
              </Typography>
              {target.highlight && (
                <Typography className="text-xs text-[#7c3aed]">
                  ✦ {target.highlight}
                </Typography>
              )}
            </Card>
          ))}
        </Box>

        <Box className="text-center mt-8">
          <BodyText className="text-sm italic">
            Start on AWS ECS for simplicity. Migrate to GCP Cloud Run for cost optimization. 
            Deploy to Cloudflare Workers for edge use cases. Same code, same platform, zero refactoring.
          </BodyText>
        </Box>
      </Box>

      {/* Pipeline visualization */}
      <Box className="mb-20">
        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <Box>
            <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
              From Commit to Deployment—Fully Automated
            </Typography>
            <BodyText className="mb-6">
              Every commit triggers an automated pipeline that handles the entire journey 
              from code to running service.
            </BodyText>
            <Stack className="gap-3 mb-6">
              <Typography className="text-white font-medium">Pipeline Flow:</Typography>
              <ul className="space-y-2 text-[#b0b0b0]">
                <li>• Every commit triggers a new pipeline run</li>
                <li>• Live logs stream in real-time</li>
                <li>• Deployment status visible at a glance</li>
                <li>• Failed builds? Logs tell you exactly why</li>
                <li>• Rollback to previous version with one click</li>
              </ul>
            </Stack>
            <Box className="p-4 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30">
              <Typography className="text-sm text-[#f59e0b]">
                <span className="font-medium">Traditional Alternative:</span> Setting up this same 
                workflow manually with Jenkins, GitHub Actions, or GitLab Pipelines typically takes 
                several days to weeks of DevOps work.
              </Typography>
            </Box>
          </Box>

          {/* Visual */}
          <Box>
            <Card className="p-0 overflow-hidden">
              <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
                <Box className="flex items-center justify-between">
                  <Box className="flex items-center gap-3">
                    <Box className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </Box>
                    <Typography className="text-sm font-medium text-white">
                      Pipeline #247
                    </Typography>
                  </Box>
                  <Badge variant="success">Running</Badge>
                </Box>
              </Box>
              <Box className="p-6 bg-[#0a0a0a]">
                <Stack className="gap-3">
                  {pipelineSteps.map((step, index) => (
                    <Box 
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-[#111] border border-[#2a2a2a]"
                    >
                      <Box className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        step.status === 'complete' 
                          ? 'bg-[#10b981]' 
                          : step.status === 'running'
                          ? 'bg-[#0ea5e9] animate-pulse'
                          : 'bg-[#2a2a2a]'
                      }`}>
                        {step.status === 'complete' ? (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : step.status === 'running' ? (
                          <Box className="w-2 h-2 rounded-full bg-white" />
                        ) : (
                          <Box className="w-2 h-2 rounded-full bg-[#666]" />
                        )}
                      </Box>
                      <Typography className={`flex-1 text-sm ${
                        step.status === 'pending' ? 'text-[#666]' : 'text-white'
                      }`}>
                        {step.label}
                      </Typography>
                      <Typography className="text-xs text-[#666]">
                        {step.time}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Customer quote - Featured prominently */}
      <Box className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0ea5e9]/20 via-[#0f0f1a] to-[#7c3aed]/20 border border-[#0ea5e9]/30 p-8 md:p-12">
        {/* Background decoration */}
        <Box 
          className="absolute top-0 right-0 w-64 h-64 opacity-10"
          sx={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        <Box className="relative z-10">
          <Typography className="text-2xl md:text-3xl text-white font-medium italic mb-6 leading-relaxed">
            &quot;Developers self-onboard their own services. That&apos;s a huge win. We went from 
            deploying once a week to deploying 10+ times per day. Planton removed the bottleneck.&quot;
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
              <Typography className="text-[#a0a0a0] text-sm">TYNYBAY — deploying Odwen platform</Typography>
            </Box>
          </Box>
          
          <Box className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2a2a2a]">
            <Box className="text-center">
              <Typography className="text-xl font-bold text-white">3</Typography>
              <Typography className="text-xs text-[#666]">Person Team</Typography>
            </Box>
            <Box className="text-center">
              <Typography className="text-xl font-bold text-[#10b981]">&lt;1 hr</Typography>
              <Typography className="text-xs text-[#666]">Infrastructure Setup</Typography>
            </Box>
            <Box className="text-center">
              <Typography className="text-xl font-bold text-[#0ea5e9]">10+</Typography>
              <Typography className="text-xs text-[#666]">Deploys Per Day</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};
