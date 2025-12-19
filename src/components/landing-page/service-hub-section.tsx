'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1, Pill } from '@/components';

export const ServiceHubSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background effects */}
      <Box className="absolute w-[800px] aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(16,185,129,0.1)_0%,_rgba(0,149,255,0.1)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill variant="blue">Service Hub</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">
            Vercel for Backend—In YOUR Cloud
          </TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary">
            Connect Git repo → Automatic pipelines → Multi-cloud deployment
          </Typography>
          <TypoP1 className="text-text-secondary max-w-4xl">
            Vercel nailed the developer experience for frontend deployments. Service Hub brings
            that same magic to backend services—with one critical difference: everything runs in
            YOUR cloud account. You keep full infrastructure control and visibility.
          </TypoP1>
        </Stack>

        {/* Feature 1: Git-to-Cloud */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            From Repository to Running Service—Zero Configuration Required
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Connect your GitHub or GitLab repository. That's it. Every new commit automatically
            triggers a pipeline that builds your container image, pushes it to your registry,
            and deploys it to your target environment.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-6">
            <Stack className="p-4 md:p-6 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-[#EF4444]">No More:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  ❌ Writing Dockerfiles (unless you want control—then it's optional)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  ❌ Configuring GitHub Actions or GitLab CI
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  ❌ Managing container registries manually
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  ❌ Orchestrating deployments across environments
                </Typography>
              </Stack>
            </Stack>

            <Stack className="p-4 md:p-6 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-[#10B981]">You Get:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  ✅ Automatic pipeline creation on every commit
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  ✅ Built-in Docker image building and registry pushes
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  ✅ Live logs and deployment progress
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  ✅ Multi-environment support (dev, QA, staging, prod)
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Feature 2: Multi-Cloud Consistency */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Same Developer Experience—Any Cloud, Any Target
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Deploy to AWS ECS, AWS EKS, GCP Cloud Run, Azure Container Instances, or Cloudflare
            Workers. The Service Hub experience stays identical. No vendor lock-in. No
            relearning workflows when you switch clouds.
          </Typography>

          <Box className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: 'AWS ECS', desc: 'Container services without Kubernetes complexity', color: '#FF9900' },
              { name: 'AWS EKS', desc: 'Full Kubernetes power when you need it', color: '#FF9900' },
              { name: 'GCP Cloud Run', desc: 'Serverless containers that scale to zero', color: '#4285F4' },
              { name: 'Azure Functions', desc: 'Event-driven serverless compute', color: '#0089D6' },
              { name: 'Cloudflare Workers', desc: 'Edge compute for global performance', color: '#F38020' },
            ].map((target, index) => (
              <Stack
                key={index}
                className="p-3 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2"
              >
                <Typography className="text-xs font-medium" style={{ color: target.color }}>
                  {target.name}
                </Typography>
                <Typography className="text-[10px] text-text-secondary">{target.desc}</Typography>
              </Stack>
            ))}
          </Box>

          <Box className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D]">
            <Typography className="text-sm text-text-secondary">
              <span className="text-white font-medium">Why This Matters:</span> Start on AWS ECS
              for simplicity. Migrate to GCP Cloud Run for cost optimization. Deploy to
              Cloudflare Workers for edge use cases. Same code, same platform, zero refactoring.
            </Typography>
          </Box>
        </Stack>

        {/* Feature 3: Pipeline Workflow */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            From Commit to Deployment—Fully Automated
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Every commit triggers an automated pipeline that handles the entire journey from
            code to running service.
          </Typography>

          {/* Pipeline Flow Visualization */}
          <Box className="p-4 md:p-6 bg-[#0D1117] rounded-lg border border-[#30363D]">
            <Stack className="flex-row items-center justify-between flex-wrap gap-4">
              {[
                { step: '1', label: 'Git Push', icon: '📤' },
                { step: '2', label: 'Build', icon: '🔨' },
                { step: '3', label: 'Push Image', icon: '📦' },
                { step: '4', label: 'Deploy', icon: '🚀' },
                { step: '5', label: 'Live!', icon: '✅' },
              ].map((item, index) => (
                <Stack key={index} className="items-center gap-2 flex-1 min-w-[60px]">
                  <Box className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center">
                    <Typography className="text-lg md:text-xl">{item.icon}</Typography>
                  </Box>
                  <Typography className="text-[10px] md:text-xs text-text-secondary text-center">
                    {item.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-white">Pipeline Features:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Every commit triggers a new pipeline run
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Live logs stream in real-time
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Deployment status visible at a glance
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Failed builds? Logs tell you exactly why
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Rollback to previous version with one click
                </Typography>
              </Stack>
            </Stack>

            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#F59E0B33] gap-2">
              <Typography className="text-sm font-medium text-[#F59E0B]">
                Traditional Alternative:
              </Typography>
              <Typography className="text-xs text-text-secondary">
                Setting up this same workflow manually with Jenkins, GitHub Actions, or GitLab
                Pipelines typically takes several days to weeks of DevOps work.
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Customer Quote */}
        <Box className="w-full p-6 md:p-8 bg-gradient-to-r from-[#161B22] to-[#1E222875] border border-[#3D3D3D] rounded-xl">
          <Stack className="gap-4">
            <Typography className="text-lg md:text-xl text-white italic font-medium">
              "Developers self-onboard their own services. That's a huge win."
            </Typography>
            <Typography className="text-sm text-text-secondary">
              — Tynybay consulting, deploying the Odwen warehousing platform
            </Typography>
            <Box className="pt-4 border-t border-[#3D3D3D]">
              <Typography className="text-xs text-text-secondary">
                <span className="text-white">Context:</span> 3-person team (1 DevOps engineer, 2
                developers). Infrastructure setup: &lt;1 hour. Developers now onboard services
                independently without blocking on DevOps. Multiple environments (QA, staging,
                prod) managed through simple UI.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
