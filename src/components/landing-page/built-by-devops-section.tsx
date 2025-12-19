'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, Pill } from '@/components';

export const BuiltByDevOpsSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background */}
      <Box className="absolute w-[800px] aspect-square bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(138,51,145,0.1)_0%,_rgba(68,79,158,0.1)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill variant="purple">Built by DevOps Engineers</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">For Real-World Use</TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary max-w-3xl">
            Not a theory. Not a prototype. A production platform born from 10+ years of solving
            infrastructure problems at scale.
          </Typography>
        </Stack>

        {/* Dogfooding */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Stack className="gap-2">
            <Typography className="text-xl md:text-2xl font-semibold text-white">
              Dogfooding: Planton Runs on Planton
            </Typography>
            <Typography className="text-sm text-[#10B981]">
              We Don't Ask You to Trust Something We Don't Use
            </Typography>
          </Stack>

          <Typography className="text-sm md:text-base text-text-secondary">
            Planton's production infrastructure is 100% managed through Planton itself. Zero
            exceptions.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-white">Our Stack:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">10+ database types:</span> ClickHouse, Redis,
                  Postgres, MongoDB, and more
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Deployment target:</span> Google Cloud Platform
                  (multi-region)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Orchestration:</span> All databases run on
                  Kubernetes, deployed via Planton
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Service Hub:</span> All backend services
                  deployed through Planton pipelines (Tekton)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Zero manual deployments:</span> Everything
                  through the platform or CLI
                </Typography>
              </Stack>
            </Stack>

            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-[#10B981]">
                What This Means:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Every feature we ship, we use ourselves
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Every bug we fix, we've likely hit in production
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Every performance optimization, we've measured on our own infrastructure
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Support & Operations */}
        <Box className="w-full grid md:grid-cols-3 gap-6">
          <Stack className="p-6 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4">
            <Typography className="text-lg font-semibold text-white">
              24/7 Support Capability
            </Typography>
            <Typography className="text-sm text-text-secondary">
              Distributed team across time zones ensures customer issues get addressed around
              the clock—not just business hours.
            </Typography>
          </Stack>

          <Stack className="p-6 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4">
            <Typography className="text-lg font-semibold text-white">
              Customer Success Focus
            </Typography>
            <Typography className="text-sm text-text-secondary">
              100% retention rate didn't happen by accident. We iterate rapidly on customer
              feedback and treat early adopters as partners, not just users.
            </Typography>
          </Stack>

          <Stack className="p-6 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4">
            <Typography className="text-lg font-semibold text-white">Production SLAs</Typography>
            <Stack className="gap-1">
              <Typography className="text-xs text-text-secondary">
                • Plus tier: 24-hour email response
              </Typography>
              <Typography className="text-xs text-text-secondary">
                • Pro tier: 12-hour email response
              </Typography>
              <Typography className="text-xs text-text-secondary">
                • Enterprise: Custom SLA (Slack/phone support)
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Engineering Philosophy */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Engineering Philosophy
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Grounded in Reality',
                desc: 'Planton solves real problems experienced by DevOps engineers—no hype, no theoretical solutions.',
              },
              {
                title: 'Customer-Driven Roadmap',
                desc: 'Features are prioritized based on actual customer requests from paying users—not hypothetical use cases.',
              },
              {
                title: 'Iterate Fast, Break Nothing',
                desc: 'Platform stability is non-negotiable. New features ship to beta customers first, then roll out gradually.',
              },
              {
                title: 'Open by Default',
                desc: 'All deployment components open source. Transparent about how things work. No black boxes.',
              },
            ].map((item, index) => (
              <Stack
                key={index}
                className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2"
              >
                <Typography className="text-sm font-medium text-white">{item.title}</Typography>
                <Typography className="text-xs text-text-secondary">{item.desc}</Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
