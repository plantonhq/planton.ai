'use client';

import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, XIcon, Badge } from './shared';

const tektonReasons = [
  { label: 'Cloud-native', description: 'Runs on Kubernetes' },
  { label: 'Portable', description: 'Works anywhere K8s runs' },
  { label: 'Extensible', description: 'Community task catalog' },
  { label: 'Battle-tested', description: 'Used by Google Cloud Build' },
];

const lockinRisk = [
  'Proprietary pipeline formats',
  'Custom IaC languages',
  'Migration costs in engineer-months',
];

const plantonAdvantages = [
  'Standard Terraform/Pulumi/Tekton',
  'All code public and auditable',
  'Migration in hours, not months',
];

export const OpenStandards: FC = () => {
  return (
    <Section id="open-standards">
      <Stack className="items-center text-center mb-12">
        <Badge variant="purple" className="mb-6">OPEN STANDARDS</Badge>
        <SectionTitle>
          Built on Open Standards—
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Not Proprietary Lock-In
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          GitHub, Terraform, Pulumi, Tekton—the tools you already know. No proprietary formats.
        </SectionSubtitle>
      </Stack>

      {/* Tekton */}
      <Card className="p-8 bg-gradient-to-br from-[#10b981]/10 to-[#0ea5e9]/10 border-[#10b981]/30 mb-12">
        <Box className="text-center mb-8">
          <Box className="flex justify-center mb-4">
            <Image
              src="/images/tekton.svg"
              alt="Tekton"
              width={48}
              height={48}
              style={{ width: '48px', height: '48px', objectFit: 'contain' }}
            />
          </Box>
          <Badge variant="success" className="mb-4">CNCF GRADUATED</Badge>
          <Typography className="text-lg font-semibold text-white mb-2">
            Tekton-Powered CI/CD
          </Typography>
          <BodyText className="max-w-2xl mx-auto">
            Service Hub runs on Tekton—Kubernetes-native CI/CD. All pipeline definitions are published openly.
          </BodyText>
        </Box>
        
        <Box className="grid md:grid-cols-4 gap-4">
          {tektonReasons.map((reason, index) => (
            <Box key={index} className="p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#2a2a2a] text-center">
              <Typography className="text-white font-medium text-sm">{reason.label}</Typography>
              <Typography className="text-xs text-[#a0a0a0]">{reason.description}</Typography>
            </Box>
          ))}
        </Box>
      </Card>

      {/* Comparison */}
      <Box className="grid md:grid-cols-3 gap-6">
        <Card className="border-[#ef4444]/30 bg-[#ef4444]/5">
          <Typography className="text-lg font-semibold text-[#ef4444] mb-4">
            ⚠️ Vendor Lock-In Risk
          </Typography>
          <Stack className="gap-2">
            {lockinRisk.map((item, index) => (
              <Box key={index} className="flex items-center gap-2">
                <XIcon />
                <Typography className="text-[#b0b0b0] text-sm">{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Card>

        <Card className="border-[#10b981]/30 bg-[#10b981]/5">
          <Typography className="text-lg font-semibold text-[#10b981] mb-4">
            ✓ With Planton
          </Typography>
          <Stack className="gap-2">
            {plantonAdvantages.map((item, index) => (
              <Box key={index} className="flex items-center gap-2">
                <CheckIcon />
                <Typography className="text-[#b0b0b0] text-sm">{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Card>

        <Card gradient>
          <Typography className="text-lg font-semibold text-white mb-2">
            The Promise
          </Typography>
          <BodyText>
            Use Planton because it accelerates your team—not because you&apos;re locked in.
          </BodyText>
        </Card>
      </Box>
    </Section>
  );
};
