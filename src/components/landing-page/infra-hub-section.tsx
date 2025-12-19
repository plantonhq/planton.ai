'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1, Pill } from '@/components';

interface FeatureCardProps {
  headline: string;
  body: string;
  benefits?: string[];
  children?: React.ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({ headline, body, benefits, children }) => {
  return (
    <Stack
      sx={{
        p: { xs: 3, md: 5 },
        bgcolor: '#161B22',
        border: '1px solid #3D3D3D',
        borderRadius: '12px',
        gap: 2,
      }}
    >
      <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600 }}>
        {headline}
      </Typography>
      <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: 'text.secondary' }}>
        {body}
      </Typography>
      {benefits && (
        <Stack spacing={1} sx={{ mt: 1 }}>
          {benefits.map((benefit, index) => (
            <Typography key={index} sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
              • {benefit}
            </Typography>
          ))}
        </Stack>
      )}
      {children}
    </Stack>
  );
};

export const InfraHubSection: FC = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        alignItems: 'center',
        bgcolor: 'black',
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          zIndex: 0,
          width: '100%',
          height: '400px',
          background: 'linear-gradient(180deg, #47A7A4 -152.88%, rgba(80, 52, 185, 0) 84.98%)',
        }}
      />

      <Stack sx={{ width: '100%', maxWidth: '80rem', alignItems: 'center', gap: { xs: 4, md: 6 }, zIndex: 10, position: 'relative' }}>
        {/* Section Header */}
        <Stack sx={{ alignItems: 'center', textAlign: 'center', gap: { xs: 2, md: 3 } }}>
          <Pill>Infra Hub</Pill>
          <TypoH2>Infrastructure Deployment Without the Wait</TypoH2>
          <Typography sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, color: 'text.secondary' }}>
            Replaces Terraform Enterprise, Pulumi Cloud, and manual cloud console work
          </Typography>
          <TypoP1 className="text-text-secondary" sx={{ maxWidth: '56rem' }}>
            Infra Hub turns infrastructure deployment from a multi-week manual process into a
            sub-hour sprint. Deploy individual components or complete environments with
            zero-configuration CI/CD, live progress visualization, and built-in best practices.
          </TypoP1>
        </Stack>

        {/* Feature 1: Zero-Config CI/CD */}
        <FeatureCard
          headline="Infrastructure Pipelines That Just Work"
          body="No GitHub Actions to write. No Terraform state buckets to configure. No manual deployments through cloud consoles. Connect your cloud account and start deploying infrastructure through simple forms or CLI commands."
          benefits={[
            'Live Terraform plan/apply visualization - Watch your infrastructure come to life in real-time',
            '5-10 minute deployments vs weeks of manual cloud console work',
            'Version history and rollback - Every change tracked, easily reversible',
            'Multi-cloud consistency - Same workflow whether you\'re on AWS, GCP, or Azure',
          ]}
        />

        {/* Feature 2: Infra Charts */}
        <Stack
          sx={{
            width: '100%',
            p: { xs: 3, md: 5 },
            bgcolor: '#161B22',
            border: '1px solid #3D3D3D',
            borderRadius: '12px',
            gap: 3,
          }}
        >
          <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600 }}>
            Stop Assembling Lego Blocks—Deploy Complete Environments
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: 'text.secondary' }}>
            Deploying infrastructure piece-by-piece is tedious and error-prone. VPC first, then
            Route53, then ECR, then certificates, then load balancers... each waiting for the
            previous to complete. Infra Charts eliminate this pain.
          </Typography>

          <Box sx={{ p: { xs: 2, md: 3 }, bgcolor: '#0D1117', borderRadius: '8px', border: '1px solid #30363D' }}>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#0095FF', mb: 1.5 }}>
              How It Works:
            </Typography>
            <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
              Inspired by Kubernetes Helm Charts, Infra Charts bundle related infrastructure
              components into a single deployable unit. Fill out one form, click deploy, and the
              platform orchestrates everything in the correct order via DAG (Directed Acyclic
              Graph).
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Stack sx={{ p: { xs: 2, md: 3 }, bgcolor: '#0D1117', borderRadius: '8px', border: '1px solid #30363D', gap: 1.5 }}>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#10B981' }}>
                Example: AWS ECS Environment
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                One Infra Chart deploys:
              </Typography>
              <Stack spacing={0.5}>
                {[
                  'VPC with proper subnets and routing',
                  'Route53 DNS zone for your domain',
                  'ECR container registry for images',
                  'SSL/TLS certificates via Certificate Manager',
                  'Application Load Balancer with listeners',
                  'Security groups with proper ingress/egress rules',
                ].map((item, i) => (
                  <Typography key={i} sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>• {item}</Typography>
                ))}
              </Stack>
            </Stack>

            <Stack sx={{ p: { xs: 2, md: 3 }, bgcolor: '#0D1117', borderRadius: '8px', border: '1px solid #30363D', gap: 1.5 }}>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#F59E0B' }}>
                The Platform Knows:
              </Typography>
              <Stack spacing={0.5}>
                {[
                  'VPC must exist before load balancer (load balancers require VPC ID)',
                  'Certificates must be validated before HTTPS listeners',
                  'Security groups must allow traffic to backend services',
                ].map((item, i) => (
                  <Typography key={i} sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>• {item}</Typography>
                ))}
              </Stack>
              <Box sx={{ mt: 'auto', pt: 1.5, borderTop: '1px solid #30363D' }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  You describe what you want. The platform figures out the how.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>

        {/* Feature 3: Deployment Component Store */}
        <Stack
          sx={{
            width: '100%',
            p: { xs: 3, md: 5 },
            bgcolor: '#161B22',
            border: '1px solid #3D3D3D',
            borderRadius: '12px',
            gap: 3,
          }}
        >
          <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600 }}>
            20% of Cloud Services Used 80% of the Time—All Pre-Modeled
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: 'text.secondary' }}>
            Stop reinventing the wheel. Browse our carefully crafted deployment components for
            the most common cloud resources:
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {[
              { name: 'AWS', color: '#FF9900', services: 'ECS, EKS, Lambda, RDS, S3, CloudFront, Route53, ALB, VPC, and more' },
              { name: 'GCP', color: '#4285F4', services: 'Cloud Run, GKE, Cloud SQL, Cloud Storage, Cloud CDN, and more' },
              { name: 'Azure', color: '#0089D6', services: 'AKS, Azure Functions, Azure SQL, Storage Accounts, and more' },
            ].map((cloud, i) => (
              <Stack key={i} sx={{ p: 2, bgcolor: '#0D1117', borderRadius: '8px', border: '1px solid #30363D', gap: 1 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: cloud.color }}>{cloud.name}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{cloud.services}</Typography>
              </Stack>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2, bgcolor: '#0D1117', borderRadius: '8px', border: '1px solid #30363D' }}>
            <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
              <Box component="span" sx={{ fontWeight: 500, color: 'white' }}>All Open Source:</Box> Every deployment
              component lives in the{' '}
              <Box
                component="a"
                href="https://github.com/project-planton/project-planton"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#0095FF', '&:hover': { textDecoration: 'underline' } }}
              >
                Project Planton repository
              </Box>
              . Audit the exact Terraform and Pulumi code. Contribute improvements. No black boxes.
            </Typography>
          </Box>
        </Stack>

        {/* Customer Proof Point */}
        <Box
          sx={{
            width: '100%',
            p: { xs: 3, md: 4 },
            background: 'linear-gradient(to right, #161B22, rgba(30,34,40,0.46))',
            border: '1px solid #3D3D3D',
            borderRadius: '12px',
          }}
        >
          <Stack spacing={2}>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Real Customer Result
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, fontStyle: 'italic' }}>
              "iorta TechNext deployed a complete AWS ECS environment for their SalesVerse
              product in under 1 hour—with 7 developers managing everything themselves.
              Previously, this would have required a dedicated DevOps engineer and taken at
              least a couple weeks of work."
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
