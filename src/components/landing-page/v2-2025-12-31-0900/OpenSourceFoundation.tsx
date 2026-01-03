'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, Badge } from './shared';

const openSourceItems = [
  'All Terraform modules for every deployment component',
  'All Pulumi implementations (alternative IaC framework)',
  'CLI tools for local infrastructure management',
  'Deployment component schemas and validation rules',
];

const whyMatters = [
  { label: 'Security audits', description: 'Your team or third-party auditors can verify everything' },
  { label: 'Compliance requirements', description: 'Prove to regulators exactly what\'s deployed and how' },
  { label: 'Learning and contribution', description: 'Understand best practices, contribute improvements' },
  { label: 'No surprises', description: 'No hidden infrastructure, no mystery permissions' },
];

const exitSteps = [
  {
    number: '1',
    title: 'Export Your Configurations',
    description: 'One API call exports all your infrastructure configurations as YAML manifests: deployment component specs, environment configurations, service definitions, complete infrastructure-as-code.',
  },
  {
    number: '2',
    title: 'Use the Open Source CLI',
    description: 'The Project Planton CLI is independent of the proprietary platform. Install it anywhere.',
    code: 'brew install project-planton/tap/project-planton',
  },
  {
    number: '3',
    title: 'Manage Independently',
    description: 'Continue managing your infrastructure using the same YAML manifests. Run project-planton pulumi up directly from your CI/CD, integrate with GitHub Actions, GitLab CI, or Jenkins.',
  },
  {
    number: '4',
    title: 'Gradual or Immediate Transition',
    description: 'Run Planton platform AND independent CLI simultaneously. Zero downtime transition. Planton helps you migrate successfully (Build, Operate, Transfer model).',
  },
];

export const OpenSourceFoundation: FC = () => {
  return (
    <Section variant="gradient" id="open-source">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">OPEN SOURCE</Badge>
        <SectionTitle>
          Open Infrastructure Modules—
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Not a Black Box
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          120+ deployment components on GitHub. Fully auditable. Fork anytime. No vendor lock-in, ever.
        </SectionSubtitle>
      </Stack>

      {/* Key Differentiator Callout */}
      <Box className="max-w-4xl mx-auto mb-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#7c3aed]/10 to-[#10b981]/10 border border-[#7c3aed]/30">
        <Stack direction={{ xs: 'column', md: 'row' }} className="items-center gap-6">
          <Box className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#10b981] flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Box>
          <Box className="flex-1 text-center md:text-left">
            <Typography className="text-lg md:text-xl font-semibold text-white mb-2">
              The Critical Difference
            </Typography>
            <Typography className="text-[#b0b0b0]">
              <span className="text-[#ef4444]">With competitors</span>, you write Terraform/Pulumi modules yourself, maintain them, and own all the complexity.{' '}
              <span className="text-[#10b981]">With Planton</span>, the modules are built, maintained, tested, and auditable—you just use them.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Intro */}
      <Box className="max-w-3xl mx-auto text-center mb-16">
        <BodyText className="text-lg">
          Most DevOps platforms are black boxes. You trust them with your infrastructure, but you 
          can&apos;t audit how they work. You&apos;re locked in—switching costs are prohibitive. 
          <span className="text-white font-semibold"> Planton is different.</span> Everything is 
          transparent. Everything is portable. Your infrastructure, your rules.
        </BodyText>
      </Box>

      {/* Audit every line */}
      <Box className="mb-20">
        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          <Box>
            <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
              Audit Every Line of Infrastructure Code
            </Typography>
            <BodyText className="mb-6">
              Every Terraform module and Pulumi component used by Planton lives in the public 
              Project Planton repository. Want to know exactly what IAM permissions the AWS ALB 
              deployment requires? Read the code. Concerned about security groups? Audit the 
              Terraform files yourself.
            </BodyText>
            
            <Box className="mb-6">
              <Typography className="text-sm text-[#666] uppercase tracking-wide mb-4">
                What&apos;s Open Source
              </Typography>
              <Stack className="gap-3">
                {openSourceItems.map((item, index) => (
                  <Box key={index} className="flex items-center gap-3">
                    <CheckIcon />
                    <Typography className="text-[#b0b0b0] text-sm">{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            
            <a 
              href="https://github.com/plantonhq/project-planton"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <Typography className="font-medium">View on GitHub →</Typography>
            </a>
          </Box>
          
          <Box className="grid grid-cols-2 gap-4">
            {whyMatters.map((item, index) => (
              <Card key={index} className="p-5">
                <Typography className="text-white font-medium mb-2">
                  {item.label}
                </Typography>
                <Typography className="text-xs text-[#a0a0a0]">
                  {item.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Exit strategy */}
      <Box className="mb-16">
        <Box className="text-center mb-12">
          <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
            Outgrow Planton? Take Your Infrastructure With You
          </Typography>
          <BodyText className="max-w-2xl mx-auto">
            Unlike proprietary platforms that trap you in their ecosystem, Planton is designed for 
            portability. If you outgrow the platform, get acquired, or decide to hire an in-house 
            DevOps team—your infrastructure investment comes with you.
          </BodyText>
        </Box>

        <Box className="grid md:grid-cols-2 gap-6">
          {exitSteps.map((step, index) => (
            <Card key={index} className="flex gap-4">
              <Box className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
                <Typography className="text-white font-bold">{step.number}</Typography>
              </Box>
              <Box className="flex-1">
                <Typography className="text-white font-medium mb-2">
                  {step.title}
                </Typography>
                <Typography className="text-sm text-[#a0a0a0] mb-2">
                  {step.description}
                </Typography>
                {step.code && (
                  <Box className="mt-3 p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] font-mono text-xs text-[#10b981]">
                    $ {step.code}
                  </Box>
                )}
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Promise */}
      <Card className="text-center bg-gradient-to-br from-[#7c3aed]/10 to-[#0ea5e9]/10 border-[#7c3aed]/30">
        <Typography className="text-xl font-semibold text-white mb-4">
          The Promise
        </Typography>
        <Typography className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
          Use Planton because it&apos;s the best platform for your needs—
          <span className="text-white">not because switching is too expensive.</span>
        </Typography>
      </Card>
    </Section>
  );
};
