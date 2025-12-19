'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1, Pill } from '@/components';

export const OpenStandardsSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background gradient */}
      <Box className="absolute w-[1000px] aspect-square top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(107,86,162,0.15)_0%,_rgba(70,170,165,0.15)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill variant="purple">Built on Open Standards</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">
            Works With Your Existing Tooling
          </TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary">
            GitHub, Terraform, Pulumi, Tekton—Planton integrates with what you already use, no
            proprietary replacements required.
          </Typography>
          <TypoP1 className="text-text-secondary max-w-4xl">
            Planton is built on open standards and industry-leading tools. Leverage your existing
            workflows, scripts, and expertise without being forced into a proprietary ecosystem.
          </TypoP1>
        </Stack>

        {/* Standard 1: GitHub & GitLab */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Stack className="flex-row items-center gap-3">
            <Box className="w-10 h-10 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-center justify-center">
              <Typography className="text-xl">📂</Typography>
            </Box>
            <Typography className="text-xl md:text-2xl font-semibold text-white">
              Works Seamlessly With Your Git Workflow
            </Typography>
          </Stack>
          <Typography className="text-sm md:text-base text-text-secondary">
            Connect your GitHub or GitLab organization via OAuth. No need to migrate repositories
            or change your branching strategy. Planton integrates with your existing Git
            workflows—pull requests, branch protection, code reviews—everything stays the same.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-white">What's Supported:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • GitHub repositories (public and private)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • GitLab repositories (self-hosted and GitLab.com)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • GitHub Actions (if you want to keep using them)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • GitLab CI (side-by-side with Planton pipelines)
                </Typography>
              </Stack>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-[#10B981]">Why This Matters:</Typography>
              <Typography className="text-xs text-text-secondary">
                Your code stays where it is. Your team keeps working the way they're used to.
                Planton adds automation without disrupting your established processes.
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Standard 2: Terraform & Pulumi */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Stack className="flex-row items-center gap-3">
            <Box className="w-10 h-10 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-center justify-center">
              <Typography className="text-xl">⚙️</Typography>
            </Box>
            <Typography className="text-xl md:text-2xl font-semibold text-white">
              Your Infrastructure-as-Code, Your Choice
            </Typography>
          </Stack>
          <Typography className="text-sm md:text-base text-text-secondary">
            Planton supports both Terraform and Pulumi as first-class infrastructure-as-code
            frameworks. All deployment components are available in both formats, and you can mix
            and match based on your team's preferences.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-white">What's Open Source:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Every Terraform module in the Project Planton repository
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Every Pulumi component (TypeScript, Python, Go)
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • CLI tools for local development and testing
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Schema definitions and validation rules
                </Typography>
              </Stack>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-white">Integration Points:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Use Planton UI for simple deployments
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Use Terraform/Pulumi CLI directly for complex orchestration
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Import existing Terraform state
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Export Planton configurations as standard Terraform/Pulumi code
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Standard 3: Tekton */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Stack className="flex-row items-center gap-3">
            <Box className="w-10 h-10 rounded-lg bg-[#0D1117] border border-[#30363D] flex items-center justify-center">
              <Typography className="text-xl">🔄</Typography>
            </Box>
            <Typography className="text-xl md:text-2xl font-semibold text-white">
              Open-Source Kubernetes-Native Pipelines
            </Typography>
          </Stack>
          <Typography className="text-sm md:text-base text-text-secondary">
            Service Hub is powered by Tekton, the CNCF graduated project for Kubernetes-native
            CI/CD. Planton provides transparent access to customize and extend your
            pipelines—no proprietary abstractions hiding the underlying technology.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-[#0095FF]">Why Tekton:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Cloud-native</span> - Runs on Kubernetes, scales automatically
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Portable</span> - Your pipelines work anywhere Kubernetes runs
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Extensible</span> - Rich catalog of community tasks and integrations
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Battle-tested</span> - Used by Google Cloud Build, Red Hat OpenShift Pipelines
                </Typography>
              </Stack>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-white">What You Can Do:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Use Planton's zero-config pipelines for common workflows
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Write custom Tekton Tasks for specialized build steps
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Integrate with Tekton Catalog for pre-built components
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Export and run pipelines outside Planton platform
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box className="p-4 bg-[#10B98115] rounded-lg border border-[#10B98133]">
            <Typography className="text-sm text-text-secondary">
              <span className="text-[#10B981] font-medium">Transparency:</span> Planton publishes
              all Tekton pipeline definitions openly. Audit, fork, and customize them. No black
              boxes, no vendor lock-in.
            </Typography>
          </Box>
        </Stack>

        {/* Comparison Box */}
        <Box className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl">
          <Typography className="text-xl md:text-2xl font-semibold text-white mb-6">
            Why Open Standards Matter
          </Typography>
          <Box className="grid md:grid-cols-2 gap-6">
            <Stack className="p-4 bg-[#EF444415] rounded-lg border border-[#EF444433] gap-3">
              <Typography className="text-sm font-medium text-[#EF4444]">
                w/ Vendor Lock-In Risk:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Proprietary pipeline formats
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Custom IaC languages
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Migration costs in engineer-months
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Closed-source implementations
                </Typography>
              </Stack>
            </Stack>
            <Stack className="p-4 bg-[#10B98115] rounded-lg border border-[#10B98133] gap-3">
              <Typography className="text-sm font-medium text-[#10B981]">w/ Planton:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Standard Terraform/Pulumi/Tekton workflows
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • All code public and auditable
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Migration costs measured in hours
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Works with your existing tools (kubectl, terraform, git)
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box className="mt-6 p-4 bg-[#0D1117] rounded-lg border border-[#30363D]">
            <Typography className="text-sm text-white font-medium">
              The Promise: Use Planton because it accelerates your team—not because you're
              locked in. Every abstraction Planton provides has a standard alternative
              underneath.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
