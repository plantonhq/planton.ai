'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';
import { Section, SectionTitle, SectionSubtitle, Card, CheckIcon, Badge, PrimaryButton, SecondaryButton } from './shared';

export const PricingSimplified: FC = () => {
  return (
    <Section id="pricing">
      {/* Early Adopter Banner */}
      <Box className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#f59e0b]/20 to-[#ef4444]/20 border border-[#f59e0b]/30">
        <Stack direction={{ xs: 'column', md: 'row' }} className="items-center justify-center gap-4">
          <Badge variant="warning" className="animate-pulse">🔥 EARLY ADOPTER PRICING</Badge>
          <Typography className="text-sm md:text-base text-center">
            <span className="text-white font-semibold">Lock in $20/dev/month forever</span>
            <span className="text-[#a0a0a0]"> • Regular pricing: $35/dev/month after GA</span>
          </Typography>
          <Badge variant="default" className="whitespace-nowrap">
            63 slots remaining
          </Badge>
        </Stack>
      </Box>

      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">PRICING</Badge>
        <SectionTitle>
          Simple,{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Usage-Based
          </span>
          {' '}Pricing
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Pay for what you use. Start free. Scale as you grow. No hidden costs.
        </SectionSubtitle>
      </Stack>

      {/* Two components */}
      <Box className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
        <Card className="text-center bg-gradient-to-br from-[#7c3aed]/10 to-[#0ea5e9]/10 border-[#7c3aed]/30">
          <Typography className="text-sm text-[#a0a0a0] uppercase tracking-wide mb-2">
            Seat-Based Subscription
          </Typography>
          <Typography className="text-4xl md:text-5xl font-bold text-white mb-2">
            $20
          </Typography>
          <Typography className="text-[#a0a0a0]">
            per developer / month
          </Typography>
        </Card>
        
        <Card className="text-center bg-gradient-to-br from-[#0ea5e9]/10 to-[#10b981]/10 border-[#0ea5e9]/30">
          <Typography className="text-sm text-[#a0a0a0] uppercase tracking-wide mb-2">
            Automation Minutes
          </Typography>
          <Typography className="text-4xl md:text-5xl font-bold text-white mb-2">
            $0.006
          </Typography>
          <Typography className="text-[#a0a0a0]">
            per minute (0.6¢/min)
          </Typography>
        </Card>
      </Box>

      <Typography className="text-center text-sm text-[#666] mb-16">
        Metered separately for infrastructure runners and service CI/CD runners, but charged at the same rate.
      </Typography>

      {/* Real customer example */}
      <Card className="mb-16 max-w-4xl mx-auto">
        <Box className="grid lg:grid-cols-2 gap-8 items-center">
          <Box>
            <Badge variant="success" className="mb-4">CASE STUDY</Badge>
            <Typography className="text-xl font-semibold text-white mb-4">
              iorta TechNext
            </Typography>
            <Box className="space-y-2 text-sm">
              <Box className="flex justify-between">
                <Typography className="text-[#a0a0a0]">Team Size:</Typography>
                <Typography className="text-white">7 developers</Typography>
              </Box>
              <Box className="flex justify-between">
                <Typography className="text-[#a0a0a0]">Monthly Spend:</Typography>
                <Typography className="text-white">~$450 (platform + usage)</Typography>
              </Box>
            </Box>
            
            <Box className="mt-6">
              <Typography className="text-sm text-[#666] uppercase tracking-wide mb-3">
                What They Get
              </Typography>
              <Stack className="gap-2">
                {[
                  'Complete infrastructure management (AWS ECS environment for SalesVerse)',
                  'Automated CI/CD for all services',
                  'Multi-environment deployments (dev, QA, staging, prod)',
                  '24/7 support access',
                  'Full audit trail for compliance',
                ].map((item, index) => (
                  <Box key={index} className="flex items-start gap-2">
                    <Box className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </Box>
                    <Typography className="text-xs text-[#b0b0b0]">{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
          
          <Box className="text-center">
            <Box className="p-6 rounded-xl bg-gradient-to-br from-[#ef4444]/10 to-[#f59e0b]/10 border border-[#ef4444]/30 mb-4">
              <Typography className="text-sm text-[#ef4444] mb-2">Alternative Cost</Typography>
              <Typography className="text-2xl font-bold text-white line-through opacity-50">
                $150K+/year
              </Typography>
              <Typography className="text-xs text-[#666]">
                = $12,500/month for DevOps engineer
              </Typography>
            </Box>
            
            <Box className="p-6 rounded-xl bg-gradient-to-br from-[#10b981]/20 to-[#0ea5e9]/20 border border-[#10b981]/30">
              <Typography className="text-sm text-[#10b981] mb-2">Savings</Typography>
              <Typography className="text-4xl font-bold text-white">
                $12,050
              </Typography>
              <Typography className="text-xs text-[#10b981]">
                per month • 96% cost reduction
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* CTA */}
      <Box className="text-center">
        <Link href="/pricing">
          <PrimaryButton className="text-lg px-8 py-4">
            View Full Pricing Details →
          </PrimaryButton>
        </Link>
        <Stack direction={{ xs: 'column', sm: 'row' }} className="justify-center gap-4 mt-4">
          <Link href="#roi-calculator" className="text-[#10b981] hover:text-white transition-colors text-sm font-medium">
            Calculate Your ROI →
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform" target="_blank">
            <SecondaryButton>
              Request a Demo
            </SecondaryButton>
          </Link>
        </Stack>
      </Box>
    </Section>
  );
};
