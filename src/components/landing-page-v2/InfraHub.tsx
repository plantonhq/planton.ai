'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, Quote, Badge } from './shared';

const features = [
  {
    title: 'Live Terraform plan/apply visualization',
    description: 'Watch your infrastructure come to life in real-time',
  },
  {
    title: '5-10 minute deployments',
    description: 'vs weeks of manual cloud console work',
  },
  {
    title: 'Version history and rollback',
    description: 'Every change tracked, easily reversible',
  },
  {
    title: 'Multi-cloud consistency',
    description: 'Same workflow whether you\'re on AWS, GCP, or Azure',
  },
];

const infraChartComponents = [
  'VPC with proper subnets and routing',
  'Route53 DNS zone for your domain',
  'ECR container registry for images',
  'SSL/TLS certificates via Certificate Manager',
  'Application Load Balancer with listeners',
  'Security groups with proper ingress/egress rules',
];

const cloudServices = {
  AWS: ['ECS', 'EKS', 'Lambda', 'RDS', 'S3', 'CloudFront', 'Route53', 'ALB', 'VPC'],
  GCP: ['Cloud Run', 'GKE', 'Cloud SQL', 'Cloud Storage', 'Cloud CDN'],
  Azure: ['AKS', 'Azure Functions', 'Azure SQL', 'Storage Accounts'],
};

export const InfraHub: FC = () => {
  return (
    <Section id="infra-hub">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">INFRA HUB</Badge>
        <SectionTitle>
          Infrastructure Deployment{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Without the Wait
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Replaces Terraform Enterprise, Pulumi Cloud, and manual cloud console work
        </SectionSubtitle>
      </Stack>

      {/* Zero-Config CI/CD */}
      <Box className="mb-20">
        <Stack className="lg:flex-row gap-12 items-center">
          {/* Content */}
          <Box className="flex-1">
            <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
              Infrastructure Pipelines That Just Work
            </Typography>
            <BodyText className="mb-8">
              No GitHub Actions to write. No Terraform state buckets to configure. 
              No manual deployments through cloud consoles. Connect your cloud account 
              and start deploying infrastructure through simple forms or CLI commands.
            </BodyText>
            
            <Stack className="gap-4">
              {features.map((feature, index) => (
                <Box key={index} className="flex items-start gap-4">
                  <Box className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#7c3aed]/20 flex items-center justify-center">
                    <CheckIcon />
                  </Box>
                  <Box>
                    <Typography className="text-white font-medium">
                      {feature.title}
                    </Typography>
                    <Typography className="text-sm text-[#a0a0a0]">
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
          
          {/* Visual */}
          <Box className="flex-1 w-full">
            <Card className="p-0 overflow-hidden">
              <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
                <Typography className="text-sm font-medium text-white">
                  Terraform Deployment Progress
                </Typography>
              </Box>
              <Box className="p-6 font-mono text-sm bg-[#0a0a0a]">
                <Box className="space-y-2">
                  <Typography className="text-[#10b981]">
                    ✓ aws_vpc.main: Creation complete
                  </Typography>
                  <Typography className="text-[#10b981]">
                    ✓ aws_subnet.public[0]: Creation complete
                  </Typography>
                  <Typography className="text-[#10b981]">
                    ✓ aws_subnet.public[1]: Creation complete
                  </Typography>
                  <Typography className="text-[#0ea5e9]">
                    ⟳ aws_lb.main: Creating...
                  </Typography>
                  <Typography className="text-[#666]">
                    ○ aws_lb_listener.https: Pending
                  </Typography>
                </Box>
                <Box className="mt-6 pt-4 border-t border-[#2a2a2a]">
                  <Box className="flex items-center justify-between text-xs">
                    <Typography className="text-[#a0a0a0]">Progress</Typography>
                    <Typography className="text-white">3/5 resources</Typography>
                  </Box>
                  <Box className="mt-2 h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <Box 
                      className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9]"
                      style={{ width: '60%' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Stack>
      </Box>

      {/* Infra Charts */}
      <Box className="mb-20">
        <Box className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <Box className="order-2 lg:order-1">
            <Card className="p-0 overflow-hidden">
              <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
                <Box className="flex items-center gap-3">
                  <Box className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Box>
                  <Typography className="text-sm font-medium text-white">
                    AWS ECS Environment Chart
                  </Typography>
                </Box>
              </Box>
              <Box className="p-6 bg-[#0a0a0a]">
                <Stack className="gap-3">
                  {infraChartComponents.map((component, index) => (
                    <Box 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#111] border border-[#2a2a2a]"
                    >
                      <Box className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <Typography className="text-sm text-[#b0b0b0]">
                        {component}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Box className="mt-6 p-4 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/30">
                  <Typography className="text-sm text-[#a78bfa]">
                    ✨ DAG orchestrates deployment order automatically
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
          
          {/* Content */}
          <Box className="order-1 lg:order-2">
            <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
              Stop Assembling Lego Blocks—Deploy Complete Environments
            </Typography>
            <BodyText className="mb-6">
              Deploying infrastructure piece-by-piece is tedious and error-prone. VPC first, 
              then Route53, then ECR, then certificates, then load balancers... each waiting 
              for the previous to complete. Infra Charts eliminate this pain.
            </BodyText>
            <BodyText className="mb-6">
              Inspired by Kubernetes Helm Charts, Infra Charts bundle related infrastructure 
              components into a single deployable unit. Fill out one form, click deploy, and 
              the platform orchestrates everything in the correct order via DAG (Directed Acyclic Graph).
            </BodyText>
            <Box className="p-4 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30">
              <Typography className="text-[#10b981] font-medium">
                You describe what you want. The platform figures out the how.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Deployment Component Store */}
      <Box className="mb-16">
        <Box className="text-center mb-12">
          <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
            20% of Cloud Services Used 80% of the Time—All Pre-Modeled
          </Typography>
          <BodyText className="max-w-2xl mx-auto">
            Stop reinventing the wheel. Browse our carefully crafted deployment components 
            for the most common cloud resources:
          </BodyText>
        </Box>

        <Box className="grid md:grid-cols-3 gap-6">
          {Object.entries(cloudServices).map(([provider, services]) => (
            <Card key={provider} className="text-center">
              <Typography className="text-lg font-semibold text-white mb-4">
                {provider}
              </Typography>
              <Box className="flex flex-wrap justify-center gap-2">
                {services.map((service) => (
                  <Badge key={service} variant="default">
                    {service}
                  </Badge>
                ))}
              </Box>
            </Card>
          ))}
        </Box>

        <Box className="text-center mt-8">
          <Typography className="text-sm text-[#a0a0a0] mb-2">
            All Open Source in the{' '}
            <a 
              href="https://github.com/project-planton/project-planton" 
              target="_blank"
              className="text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
            >
              Project Planton repository
            </a>
          </Typography>
        </Box>
      </Box>

      {/* Customer quote */}
      <Card className="bg-gradient-to-br from-[#7c3aed]/10 to-[#0ea5e9]/10 border-[#7c3aed]/30">
        <Quote
          text="iorta TechNext deployed a complete AWS ECS environment for their SalesVerse product in under 1 hour—with 7 developers managing everything themselves. Previously, this would have required a dedicated DevOps engineer and taken at least a couple weeks of work."
          author="Customer Result"
        />
      </Card>
    </Section>
  );
};
