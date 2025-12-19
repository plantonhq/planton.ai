'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1, Pill } from '@/components';

export const OpenSourceSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background effects */}
      <Box className="absolute w-[800px] aspect-square top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(138,51,145,0.1)_0%,_rgba(68,79,158,0.1)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill variant="purple">Open Source Foundation</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">
            Your Infrastructure, Your Code, Your Freedom
          </TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary">
            Project Planton - All deployment components publicly available. No vendor lock-in, ever.
          </Typography>
          <TypoP1 className="text-text-secondary max-w-4xl">
            Most DevOps platforms are black boxes. You trust them with your infrastructure, but
            you can't audit how they work. You're locked in—switching costs are prohibitive.
            Planton is different. Everything is transparent. Everything is portable. Your
            infrastructure, your rules.
          </TypoP1>
        </Stack>

        {/* Pillar 1: Transparent Infrastructure */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Audit Every Line of Infrastructure Code
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Every Terraform module and Pulumi component used by Planton lives in the public{' '}
            <a
              href="https://github.com/project-planton/project-planton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0095FF] hover:underline"
            >
              Project Planton repository
            </a>
            . Want to know exactly what IAM permissions the AWS ALB deployment requires? Read
            the code. Concerned about security groups? Audit the Terraform files yourself.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-white">
                What's Open Source:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • All Terraform modules for every deployment component
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • All Pulumi implementations (alternative IaC framework)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • CLI tools for local infrastructure management
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Deployment component schemas and validation rules
                </Typography>
              </Stack>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-[#10B981]">
                Why This Matters:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Security audits</span> - Your team or third-party auditors can verify everything
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Compliance requirements</span> - Prove to regulators exactly what's deployed
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Learning and contribution</span> - Understand best practices, contribute improvements
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">No surprises</span> - No hidden infrastructure, no mystery permissions
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Pillar 2: Built-In Exit Strategy */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Outgrow Planton? Take Your Infrastructure With You
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Unlike proprietary platforms that trap you in their ecosystem, Planton is designed
            for portability. If you outgrow the platform, get acquired, or decide to hire an
            in-house DevOps team—your infrastructure investment comes with you.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            {[
              {
                step: '1',
                title: 'Export Your Configurations',
                desc: 'One API call exports all your infrastructure configurations as YAML manifests: deployment component specs, environment configurations, service definitions, complete infrastructure-as-code.',
              },
              {
                step: '2',
                title: 'Use the Open Source CLI',
                desc: 'The Project Planton CLI is independent of the proprietary platform. Install it anywhere: brew install plantoncloud/tap/project-planton',
              },
              {
                step: '3',
                title: 'Manage Independently',
                desc: "Continue managing your infrastructure using the same YAML manifests. Run 'project-planton pulumi up' directly from your CI/CD.",
              },
              {
                step: '4',
                title: 'Gradual or Immediate Transition',
                desc: 'Run Planton platform AND independent CLI simultaneously. Zero downtime migration. Support available (Build, Operate, Transfer model).',
              },
            ].map((item, index) => (
              <Stack
                key={index}
                className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2"
              >
                <Stack className="flex-row items-center gap-2">
                  <Box className="w-6 h-6 rounded-full bg-[#0095FF] flex items-center justify-center">
                    <Typography className="text-xs font-bold text-white">{item.step}</Typography>
                  </Box>
                  <Typography className="text-sm font-medium text-white">{item.title}</Typography>
                </Stack>
                <Typography className="text-xs text-text-secondary">{item.desc}</Typography>
              </Stack>
            ))}
          </Box>
        </Stack>

        {/* Pillar 3: Community */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Built By DevOps Engineers, For DevOps Engineers
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Project Planton isn't just open source—it's community-driven. Found a bug in a
            deployment component? Submit a PR. Need support for a new AWS service? Contribute
            the Terraform module. Want a better way to handle multi-region deployments? Open an
            issue, propose the design.
          </Typography>

          <Box className="grid md:grid-cols-3 gap-4">
            {[
              'New deployment components for emerging cloud services',
              'Improved Terraform/Pulumi implementations',
              'Multi-cloud abstractions and compatibility',
              'Security and compliance enhancements',
              'Documentation and examples',
              'Bug fixes and optimizations',
            ].map((item, index) => (
              <Box
                key={index}
                className="p-3 bg-[#0D1117] rounded-lg border border-[#30363D] flex items-center gap-2"
              >
                <Typography className="text-[#10B981]">•</Typography>
                <Typography className="text-xs text-text-secondary">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Stack>

        {/* Comparison */}
        <Box className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl">
          <Typography className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
            The Vendor Lock-In Problem
          </Typography>
          <Box className="grid md:grid-cols-2 gap-6">
            <Stack className="p-4 bg-[#EF444415] rounded-lg border border-[#EF444433] gap-3">
              <Typography className="text-sm font-medium text-[#EF4444]">
                w/ Vendor Lock-In Risk:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Proprietary infrastructure code
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Custom workflows
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Migration costs in engineer-months
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Closed-source security models
                </Typography>
              </Stack>
            </Stack>
            <Stack className="p-4 bg-[#10B98115] rounded-lg border border-[#10B98133] gap-3">
              <Typography className="text-sm font-medium text-[#10B981]">w/ Planton:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • All code public and auditable
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Standard Terraform/Pulumi workflows
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Migration costs measured in hours
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Open security model
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box className="mt-6 p-4 bg-[#0D1117] rounded-lg border border-[#30363D] text-center">
            <Typography className="text-sm text-white font-medium">
              The Promise: Use Planton because it's the best platform for your needs—not because
              switching is too expensive.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
