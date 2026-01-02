'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, Badge } from './shared';

const openSourceItems = [
  'All Terraform/Pulumi deployment modules',
  'CLI tools for local infrastructure management',
  'Schema definitions and validation rules',
];

const exitSteps = [
  {
    number: '1',
    title: 'Export Configurations',
    description: 'One API call exports all infrastructure as YAML manifests.',
  },
  {
    number: '2',
    title: 'Use Open Source CLI',
    description: 'Run project-planton pulumi up from your own CI/CD.',
    code: 'brew install project-planton/tap/project-planton',
  },
];

export const OpenSourceFoundation: FC = () => {
  return (
    <Section variant="gradient" id="open-source">
      <Stack className="items-center text-center mb-12">
        <Badge variant="purple" className="mb-6">OPEN SOURCE</Badge>
        <SectionTitle>
          Open Infrastructure Modules—
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Not a Black Box
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          120+ deployment components on GitHub. Audit, fork, or use independently.
        </SectionSubtitle>
      </Stack>

      {/* What's open source */}
      <Box className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <Box>
          <Typography className="text-xl font-semibold text-white mb-4">
            Audit Every Line of Infrastructure Code
          </Typography>
          <BodyText className="mb-6">
            Every module used by Planton lives in the public Project Planton repository. 
            Want to know exactly what IAM permissions are required? Read the code.
          </BodyText>
          
          <Stack className="gap-3 mb-6">
            {openSourceItems.map((item, index) => (
              <Box key={index} className="flex items-center gap-3">
                <CheckIcon />
                <Typography className="text-[#b0b0b0] text-sm">{item}</Typography>
              </Box>
            ))}
          </Stack>
          
          <a 
            href="https://github.com/project-planton/project-planton"
            target="_blank"
            className="inline-flex items-center gap-2 text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <Typography className="font-medium">View on GitHub →</Typography>
          </a>
        </Box>
        
        {/* Exit strategy */}
        <Box>
          <Typography className="text-lg font-semibold text-white mb-6">
            Built-In Exit Strategy
          </Typography>
          <Stack className="gap-4">
            {exitSteps.map((step, index) => (
              <Card key={index} className="flex gap-4">
                <Box className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
                  <Typography className="text-white font-bold text-sm">{step.number}</Typography>
                </Box>
                <Box className="flex-1">
                  <Typography className="text-white font-medium mb-1">{step.title}</Typography>
                  <Typography className="text-sm text-[#a0a0a0]">{step.description}</Typography>
                  {step.code && (
                    <Box className="mt-2 p-2 rounded bg-[#0a0a0a] border border-[#2a2a2a] font-mono text-xs text-[#10b981]">
                      $ {step.code}
                    </Box>
                  )}
                </Box>
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Promise */}
      <Card className="text-center bg-gradient-to-br from-[#7c3aed]/10 to-[#0ea5e9]/10 border-[#7c3aed]/30">
        <Typography className="text-lg text-[#a0a0a0]">
          Use Planton because it&apos;s the best platform—
          <span className="text-white font-medium">not because switching is too expensive.</span>
        </Typography>
      </Card>
    </Section>
  );
};
