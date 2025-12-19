'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, Pill } from '@/components';

export const SecurityComplianceSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background */}
      <Box className="absolute w-[1000px] aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(0,149,255,0.05)_0%,_rgba(16,185,129,0.05)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill>Security & Compliance</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">Secure by Design, Compliance-Ready</TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary max-w-3xl">
            Multiple security models, scoped permissions, and clear compliance roadmap—because
            trust is earned, not assumed.
          </Typography>
        </Stack>

        {/* Deployment Runner Security Models */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Stack className="gap-2">
            <Typography className="text-xl md:text-2xl font-semibold text-white">
              Deployment Runner Security Models
            </Typography>
            <Typography className="text-sm text-text-secondary">
              You Choose Your Security Posture
            </Typography>
          </Stack>

          <Box className="grid md:grid-cols-3 gap-4">
            {/* Model 1: Basic */}
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Stack className="flex-row items-center gap-2">
                <Box className="w-6 h-6 rounded-full bg-[#F59E0B20] flex items-center justify-center">
                  <Typography className="text-xs font-bold text-[#F59E0B]">1</Typography>
                </Box>
                <Typography className="text-sm font-medium text-white">
                  Basic - AWS Access Keys
                </Typography>
              </Stack>
              <Typography className="text-xs text-text-secondary">
                Provide AWS access key and secret key. Planton-hosted runners use these
                credentials to deploy infrastructure.
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Credentials encrypted at rest
                </Typography>
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Stored in secure secrets management
                </Typography>
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Rotatable anytime
                </Typography>
              </Stack>
              <Typography className="text-[10px] text-[#F59E0B]">
                Best for: Development environments, initial evaluation
              </Typography>
            </Stack>

            {/* Model 2: Trust Relationship */}
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Stack className="flex-row items-center gap-2">
                <Box className="w-6 h-6 rounded-full bg-[#0095FF20] flex items-center justify-center">
                  <Typography className="text-xs font-bold text-[#0095FF]">2</Typography>
                </Box>
                <Typography className="text-sm font-medium text-white">
                  Trust Relationship - AWS Assume Role
                </Typography>
              </Stack>
              <Typography className="text-xs text-text-secondary">
                Configure cross-account trust policy. Planton assumes a role with time-limited
                credentials.
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-[10px] text-text-secondary">
                  ✓ No long-lived credentials stored
                </Typography>
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Temporary session tokens
                </Typography>
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Revocable instantly
                </Typography>
              </Stack>
              <Typography className="text-[10px] text-[#0095FF]">
                Best for: Production environments, compliance requirements
              </Typography>
            </Stack>

            {/* Model 3: Customer-Hosted */}
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#10B98133] gap-3">
              <Stack className="flex-row items-center gap-2">
                <Box className="w-6 h-6 rounded-full bg-[#10B98120] flex items-center justify-center">
                  <Typography className="text-xs font-bold text-[#10B981]">3</Typography>
                </Box>
                <Typography className="text-sm font-medium text-white">
                  Customer-Hosted Runner
                </Typography>
              </Stack>
              <Typography className="text-xs text-text-secondary">
                Deploy planton-deployer Docker image in YOUR AWS account. Credentials never
                leave your boundary.
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Credentials never leave your account
                </Typography>
                <Typography className="text-[10px] text-text-secondary">
                  ✓ You control IAM role and network
                </Typography>
                <Typography className="text-[10px] text-text-secondary">
                  ✓ Runner code auditable
                </Typography>
              </Stack>
              <Typography className="text-[10px] text-[#10B981]">
                Best for: Maximum security, zero-trust, regulated industries
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Scoped Permissions */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Stack className="gap-2">
            <Typography className="text-xl md:text-2xl font-semibold text-white">
              Scoped Permissions: Least Privilege by Design
            </Typography>
            <Typography className="text-sm text-[#10B981]">
              No Blanket Admin Required
            </Typography>
          </Stack>

          <Typography className="text-sm text-text-secondary">
            Planton never asks for AdministratorAccess or wildcard permissions. Every deployment
            component specifies exact IAM permissions needed.
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-white">How It Works:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  1. <span className="text-white">Audit the Terraform Code</span> - All
                  components are open source in Project Planton repository
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  2. <span className="text-white">Generate Scoped IAM Policy</span> - Each
                  component includes documented permissions
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  3. <span className="text-white">Combine Permissions</span> - Deploying Infra
                  Chart with VPC + ALB + ECR? Combine policies
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  4. <span className="text-white">Attach to Runner</span> - Whether using assume
                  role or customer-hosted runner
                </Typography>
              </Stack>
            </Stack>

            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-[#10B981]">
                Why This Matters:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Security teams can audit exact permissions before granting access
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Principle of least privilege enforced at infrastructure level
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • No risk of Planton platform over-reaching permissions
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Compliance Roadmap */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Compliance Roadmap
          </Typography>

          <Box className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'SOC 2 Type I',
                target: 'Target: Q1 2026',
                desc: 'Third-party audit of security controls. Validates appropriate controls for data security, availability, and confidentiality.',
                status: 'Audit partner selected, control documentation in progress',
                color: '#0095FF',
              },
              {
                title: 'HIPAA BAA',
                target: 'Target: Q2 2026',
                desc: 'Business Associate Agreement required for any vendor handling Protected Health Information (PHI).',
                status: 'Architecture review in progress, compliance framework being codified',
                color: '#10B981',
              },
              {
                title: 'NIST CSF Standards',
                target: 'In Progress',
                desc: 'National Institute of Standards and Technology Cybersecurity Framework. Base images pre-configured with NIST CSF standards.',
                status: 'Encryption levels standardized, RBAC enforced, MFA requirements',
                color: '#8B5CF6',
              },
              {
                title: 'MITRE ATT&CK Framework',
                target: 'Planned',
                desc: 'Threat detection framework mapping adversary tactics. Automated threat detection in deployment pipelines.',
                status: 'Integration with Security Scanner Agent planned',
                color: '#F59E0B',
              },
            ].map((item, index) => (
              <Stack
                key={index}
                className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2"
              >
                <Stack className="flex-row items-center justify-between">
                  <Typography className="text-sm font-medium text-white">{item.title}</Typography>
                  <Typography className="text-[10px]" style={{ color: item.color }}>
                    {item.target}
                  </Typography>
                </Stack>
                <Typography className="text-xs text-text-secondary">{item.desc}</Typography>
                <Typography className="text-[10px] text-text-secondary italic">
                  Status: {item.status}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>

        {/* Trust Indicators */}
        <Box className="w-full flex flex-wrap justify-center gap-4">
          {[
            'SOC 2 In Progress',
            'HIPAA-Ready Architecture',
            'Scoped IAM Permissions',
            'Customer-Hosted Runner Option',
          ].map((badge, index) => (
            <Box
              key={index}
              className="px-4 py-2 bg-[#161B22] border border-[#3D3D3D] rounded-full"
            >
              <Typography className="text-xs text-text-secondary">✓ {badge}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
