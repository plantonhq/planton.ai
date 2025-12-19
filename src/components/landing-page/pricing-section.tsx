'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, Pill, PrimaryBtn, Btn } from '@/components';

export const PricingSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background */}
      <Box className="absolute w-[600px] aspect-square top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(0,149,255,0.1)_0%,_rgba(16,185,129,0.1)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill>Pricing</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">Simple, Usage-Based Pricing</TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary">
            Pay for what you use. Start free. Scale as you grow. No hidden costs.
          </Typography>
        </Stack>

        {/* Pricing Model */}
        <Box className="w-full grid md:grid-cols-2 gap-6">
          {/* Seat-Based */}
          <Stack className="p-6 md:p-8 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4 items-center text-center">
            <Typography className="text-sm font-medium text-[#0095FF] uppercase tracking-wide">
              Seat-Based Subscription
            </Typography>
            <Stack className="flex-row items-baseline gap-1">
              <Typography className="text-4xl md:text-5xl font-bold text-white">$20</Typography>
              <Typography className="text-text-secondary">/ developer / month</Typography>
            </Stack>
            <Typography className="text-sm text-text-secondary">
              Per-seat pricing for platform access
            </Typography>
          </Stack>

          {/* Automation Minutes */}
          <Stack className="p-6 md:p-8 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4 items-center text-center">
            <Typography className="text-sm font-medium text-[#10B981] uppercase tracking-wide">
              Automation Minutes
            </Typography>
            <Stack className="flex-row items-baseline gap-1">
              <Typography className="text-4xl md:text-5xl font-bold text-white">$0.006</Typography>
              <Typography className="text-text-secondary">/ minute (0.6¢)</Typography>
            </Stack>
            <Typography className="text-sm text-text-secondary">
              Metered for infrastructure and CI/CD runners
            </Typography>
          </Stack>
        </Box>

        {/* Real Customer Example */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Real Customer Example: iorta TechNext
          </Typography>

          <Box className="grid md:grid-cols-3 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-xs text-text-secondary">Team Size</Typography>
              <Typography className="text-lg font-semibold text-white">7 developers</Typography>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-xs text-text-secondary">Monthly Spend</Typography>
              <Typography className="text-lg font-semibold text-white">~$450</Typography>
              <Typography className="text-xs text-text-secondary">
                $140 subscription + ~$310 usage
              </Typography>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-xs text-text-secondary">Alternative Cost</Typography>
              <Typography className="text-lg font-semibold text-white">$12,500/month</Typography>
              <Typography className="text-xs text-text-secondary">
                DevOps engineer: $150K+/year
              </Typography>
            </Stack>
          </Box>

          <Box className="p-4 bg-[#10B98115] rounded-lg border border-[#10B98133]">
            <Typography className="text-sm text-text-secondary">
              <span className="text-white font-medium">What They Get:</span> Complete
              infrastructure management (AWS ECS environment for SalesVerse), automated CI/CD
              for all services, multi-environment deployments (dev, QA, staging, prod), 24/7
              support access, full audit trail for compliance.
            </Typography>
          </Box>

          <Box className="flex items-center justify-center p-4 bg-[#0D1117] rounded-lg border border-[#30363D]">
            <Stack className="flex-row items-center gap-4">
              <Typography className="text-2xl md:text-3xl font-bold text-[#10B981]">96%</Typography>
              <Typography className="text-sm text-white">cost reduction vs hiring</Typography>
            </Stack>
          </Box>
        </Stack>

        {/* CTA */}
        <Stack className="items-center gap-4">
          <Btn
            LinkComponent={Link}
            href="/pricing"
            className="!px-6 !py-3 !h-auto !text-base border border-[#3D3D3D] hover:bg-white/5"
          >
            Calculate Your Pricing →
          </Btn>
          <Typography className="text-xs text-text-secondary">
            See exactly what you'll pay based on team size and deployment frequency
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
