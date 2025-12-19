'use client';

import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, XIcon, Badge } from './shared';

const gitFeatures = [
  'GitHub repositories (public and private)',
  'GitLab repositories (self-hosted and GitLab.com)',
  'GitHub Actions (if you want to keep using them)',
  'GitLab CI (side-by-side with Planton pipelines)',
];

const iacFeatures = [
  'Every Terraform module in the Project Planton repository',
  'Every Pulumi component (TypeScript, Python, Go)',
  'CLI tools for local development and testing',
  'Schema definitions and validation rules',
];

const tektonReasons = [
  { label: 'Cloud-native', description: 'Runs on Kubernetes, scales automatically' },
  { label: 'Portable', description: 'Your pipelines work anywhere Kubernetes runs' },
  { label: 'Extensible', description: 'Rich catalog of community tasks and integrations' },
  { label: 'Battle-tested', description: 'Used by Google Cloud Build, Red Hat OpenShift Pipelines' },
];

const lockinRisk = [
  'Proprietary pipeline formats',
  'Custom IaC languages',
  'Migration costs in engineer-months',
  'Closed-source implementations',
];

const plantonAdvantages = [
  'Standard Terraform/Pulumi/Tekton workflows',
  'All code public and auditable',
  'Migration costs measured in hours',
  'Works with your existing tools (kubectl, terraform, git)',
];

export const OpenStandards: FC = () => {
  return (
    <Section id="open-standards">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">OPEN STANDARDS</Badge>
        <SectionTitle>
          Built on Open Standards:{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Works With Your Existing Tooling
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          GitHub, Terraform, Pulumi, Tekton—Planton integrates with what you already use, 
          no proprietary replacements required.
        </SectionSubtitle>
      </Stack>

      {/* GitHub & GitLab */}
      <Box className="mb-16">
        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          <Box>
            <Box className="flex items-center gap-3 mb-4">
              <Box className="w-10 h-10 rounded-lg bg-[#111] border border-[#2a2a2a] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Box>
              <Typography className="text-xl font-semibold text-white">
                GitHub & GitLab Native
              </Typography>
            </Box>
            <BodyText className="mb-6">
              Connect your GitHub or GitLab organization via OAuth. No need to migrate repositories 
              or change your branching strategy. Planton integrates with your existing Git workflows—
              pull requests, branch protection, code reviews—everything stays the same.
            </BodyText>
            <Stack className="gap-3">
              {gitFeatures.map((feature, index) => (
                <Box key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <Typography className="text-[#b0b0b0] text-sm">{feature}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          
          <Card className="p-0 overflow-hidden">
            <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
              <Typography className="text-sm text-white font-medium">Git Integration</Typography>
            </Box>
            <Box className="p-6 bg-[#0a0a0a] space-y-4">
              <Box className="flex items-center gap-3 p-3 rounded-lg bg-[#111] border border-[#2a2a2a]">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <Typography className="text-sm text-white">Connected to GitHub</Typography>
                <Badge variant="success" className="ml-auto">Active</Badge>
              </Box>
              <Box className="text-xs text-[#666]">
                Your code stays where it is. Planton adds automation without disrupting your processes.
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Terraform & Pulumi */}
      <Box className="mb-16">
        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="order-2 lg:order-1 p-0 overflow-hidden">
            <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
              <Typography className="text-sm text-white font-medium">IaC Framework Support</Typography>
            </Box>
            <Box className="p-6 bg-[#0a0a0a]">
              <Box className="grid grid-cols-2 gap-4">
                <Box className="p-4 rounded-lg bg-[#111] border border-[#2a2a2a] text-center">
                  <Box className="w-12 h-12 mx-auto mb-2 rounded-lg bg-[#7c3aed]/20 flex items-center justify-center p-2">
                    <Image
                      src="/images/providers/terraform.svg"
                      alt="Terraform"
                      width={48}
                      height={48}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                  <Typography className="text-white text-sm font-medium">Terraform</Typography>
                </Box>
                <Box className="p-4 rounded-lg bg-[#111] border border-[#2a2a2a] text-center">
                  <Box className="w-12 h-12 mx-auto mb-2 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center p-2">
                    <Image
                      src="/images/providers/pulumi.svg"
                      alt="Pulumi"
                      width={48}
                      height={48}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                  <Typography className="text-white text-sm font-medium">Pulumi</Typography>
                </Box>
              </Box>
              <Typography className="text-xs text-[#666] mt-4 text-center">
                Use UI for simple deployments, CLI for complex orchestration
              </Typography>
            </Box>
          </Card>
          
          <Box className="order-1 lg:order-2">
            <Typography className="text-xl font-semibold text-white mb-4">
              Terraform & Pulumi First-Class
            </Typography>
            <BodyText className="mb-6">
              Planton supports both Terraform and Pulumi as first-class infrastructure-as-code 
              frameworks. All deployment components are available in both formats, and you can 
              mix and match based on your team&apos;s preferences.
            </BodyText>
            <Stack className="gap-3">
              {iacFeatures.map((feature, index) => (
                <Box key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <Typography className="text-[#b0b0b0] text-sm">{feature}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Tekton */}
      <Box className="mb-16">
        <Card className="p-8 bg-gradient-to-br from-[#10b981]/10 to-[#0ea5e9]/10 border-[#10b981]/30">
          <Box className="text-center mb-8">
            <Box className="flex justify-center mb-4">
              <Image
                src="/images/tekton.svg"
                alt="Tekton"
                width={64}
                height={64}
                style={{ width: '64px', height: '64px', objectFit: 'contain' }}
              />
            </Box>
            <Badge variant="success" className="mb-4">CNCF GRADUATED PROJECT</Badge>
            <Typography className="text-xl font-semibold text-white mb-2">
              Tekton-Powered CI/CD
            </Typography>
            <BodyText>
              Service Hub is powered by Tekton, the CNCF graduated project for Kubernetes-native CI/CD. 
              Planton provides transparent access to customize and extend your pipelines—no proprietary 
              abstractions hiding the underlying technology.
            </BodyText>
          </Box>
          
          <Box className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tektonReasons.map((reason, index) => (
              <Box key={index} className="p-4 rounded-lg bg-[#0a0a0a]/50 border border-[#2a2a2a]">
                <Typography className="text-white font-medium mb-1">{reason.label}</Typography>
                <Typography className="text-xs text-[#a0a0a0]">{reason.description}</Typography>
              </Box>
            ))}
          </Box>
          
          <Box className="mt-8 p-4 rounded-lg bg-[#0a0a0a]/50">
            <Typography className="text-sm text-[#a0a0a0]">
              <span className="text-[#10b981] font-medium">Transparency:</span> Planton publishes all 
              Tekton pipeline definitions openly. Audit, fork, and customize them. No black boxes, no vendor lock-in.
            </Typography>
          </Box>
        </Card>
      </Box>

      {/* Comparison */}
      <Box>
        <Typography className="text-xl font-semibold text-white text-center mb-8">
          Why Open Standards Matter
        </Typography>
        
        <Box className="grid md:grid-cols-3 gap-6">
          <Card className="border-[#ef4444]/30 bg-[#ef4444]/5">
            <Typography className="text-lg font-semibold text-[#ef4444] mb-6">
              ⚠️ w/ Vendor Lock-In Risk
            </Typography>
            <Stack className="gap-3">
              {lockinRisk.map((item, index) => (
                <Box key={index} className="flex items-center gap-3">
                  <XIcon />
                  <Typography className="text-[#b0b0b0] text-sm">{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Card>

          <Card className="border-[#10b981]/30 bg-[#10b981]/5">
            <Typography className="text-lg font-semibold text-[#10b981] mb-6">
              ✓ w/ Planton
            </Typography>
            <Stack className="gap-3">
              {plantonAdvantages.map((item, index) => (
                <Box key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <Typography className="text-[#b0b0b0] text-sm">{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Card>

          <Card gradient>
            <Typography className="text-lg font-semibold text-white mb-4">
              The Promise
            </Typography>
            <BodyText>
              Use Planton because it accelerates your team—not because you&apos;re locked in. 
              Every abstraction Planton provides has a standard alternative underneath.
            </BodyText>
          </Card>
        </Box>
      </Box>
    </Section>
  );
};
