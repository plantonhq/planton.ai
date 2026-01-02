'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, Quote, Badge } from './shared';

const features = [
  {
    title: 'Live Terraform visualization',
    description: '5-10 minute deployments with real-time progress',
  },
  {
    title: '120+ pre-built components',
    description: 'VPC, ECS, RDS, Redis, certificates—ready to use',
  },
];

const cloudServices = {
  AWS: ['ECS', 'EKS', 'Lambda', 'RDS', 'S3'],
  GCP: ['Cloud Run', 'GKE', 'Cloud SQL'],
  Azure: ['AKS', 'Azure Functions'],
};

export const InfraHub: FC = () => {
  return (
    <Section id="infra-hub">
      {/* Section header */}
      <Stack className="items-center text-center mb-12">
        <Badge variant="purple" className="mb-6">INFRA HUB</Badge>
        <SectionTitle>
          Infrastructure Deployment{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Without the Wait
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Complete environments in one form. The platform orchestrates dependencies via DAG—
          VPC first, then subnets, then load balancers. No manual sequencing.
        </SectionSubtitle>
      </Stack>

      {/* Features + Visual */}
      <Box className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <Box>
          <BodyText className="mb-8">
            No GitHub Actions to write. No Terraform state buckets to configure. 
            Connect your cloud account and deploy infrastructure through forms or CLI.
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
        
        {/* Terraform visualization */}
        <Card className="p-0 overflow-hidden">
          <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
            <Typography className="text-sm font-medium text-white">
              Terraform Deployment
            </Typography>
          </Box>
          <Box className="p-6 font-mono text-sm bg-[#0a0a0a]">
            <Box className="space-y-2">
              <Typography className="text-[#10b981]">✓ aws_vpc.main</Typography>
              <Typography className="text-[#10b981]">✓ aws_subnet.public[0]</Typography>
              <Typography className="text-[#0ea5e9]">⟳ aws_lb.main: Creating...</Typography>
              <Typography className="text-[#666]">○ aws_lb_listener.https</Typography>
            </Box>
            <Box className="mt-4 pt-4 border-t border-[#2a2a2a]">
              <Box className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
                <Box className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9]" style={{ width: '60%' }} />
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      {/* Cloud providers */}
      <Box className="grid md:grid-cols-3 gap-4 mb-12">
        {Object.entries(cloudServices).map(([provider, services]) => (
          <Card key={provider} className="text-center py-4">
            <Typography className="text-white font-medium mb-2">{provider}</Typography>
            <Box className="flex flex-wrap justify-center gap-2">
              {services.map((service) => (
                <Badge key={service} variant="default">{service}</Badge>
              ))}
            </Box>
          </Card>
        ))}
      </Box>

      {/* Customer quote */}
      <Card className="bg-gradient-to-br from-[#7c3aed]/10 to-[#0ea5e9]/10 border-[#7c3aed]/30">
        <Quote
          text="iorta TechNext deployed a complete AWS ECS environment in under 1 hour—with 7 developers managing everything themselves."
          author="Customer Result"
          role="iorta TechNext"
          companyLogo="/images/customers/logos/iorta.svg"
        />
      </Card>
    </Section>
  );
};
