'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, CheckIcon, Quote, Badge } from './shared';

const customers = [
  {
    company: 'Jai.CX',
    companyLogo: '/images/customers/logos/jai-cx.svg',
    type: 'AI Copilot for Founders',
    project: 'Jai Platform',
    projectDescription: 'AI-native copilot for founders',
    cloud: 'AWS (ECS)',
    teamSize: '1 developer (solo)',
    highlight: 'First Planton User - Shaped Infra Charts',
    challenge: 'Solo founding engineer spending weeks on infrastructure instead of product. Hand-rolled Terraform modules, brittle GitHub Actions deployments, and three environments to maintain manually.',
    before: [
      'Weeks of infrastructure setup with hand-rolled Terraform modules',
      'Three environments (dev, staging, prod) configured manually',
      'Brittle GitHub Actions → aws ecs run-task deployment',
      'Solo engineer spending days on infrastructure vs. product',
    ],
    after: [
      'Complete ECS environment (VPC, ALB, Route 53, ACM, ECS): <1 hour',
      'Eliminated hand-written Terraform entirely',
      'Robust Tekton CI/CD with automatic rollback',
      'Production deployment in <1 engineer-week (vs. multi-week ramp-up)',
    ],
    quote: 'As Planton\'s first user, I filled out forms one by one—VPC, Security Groups, ECS, Route 53, certificates. That tedious process led to Infra Charts, which now deploy complete environments in a single form.',
    result: 'Harsha\'s detailed onboarding feedback directly shaped Planton\'s most popular feature (Infra Charts). From weeks of Terraform → under 1 hour deployment.',
  },
  {
    company: 'TynyBay',
    companyLogo: '/images/customers/logos/tynybay.png',
    type: 'IT Consulting Firm',
    project: 'Multi-Client Projects',
    projectDescription: 'AWS & GCP infrastructure for 8+ clients',
    cloud: 'AWS, GCP (Multi-Cloud)',
    teamSize: '1 DevOps + 1 Senior Dev',
    challenge: 'IT consulting firm context-switching across multiple client projects. 1-2 weeks non-billable infrastructure setup per client. DevOps bottleneck preventing scale.',
    before: [
      '1-2 weeks non-billable infrastructure setup per client project',
      'DevOps engineer context-switching across 3 concurrent clients',
      'Rewriting Terraform configurations between every client',
      'Developer bottleneck for every config change or service deployment',
    ],
    after: [
      '<1 hour infrastructure setup per client',
      'Same 1 DevOps engineer now handles 8+ concurrent clients',
      'Consistent Infra Charts across all client projects',
      'Developers self-service via ServiceHub',
    ],
    economics: {
      subscription: '~$400/month',
      usage: '~$200/month',
      total: '~$600/month',
      alternative: '2+ DevOps engineers ($300K+/year)',
      savings: '98%',
    },
    quote: 'For a client in regulated industry (BFSI) who mandated GCP, Planton delivered the entire infrastructure despite zero GCP experience on our team.',
    result: 'TynyBay scaled from 3 to 8+ concurrent client projects without hiring additional DevOps resources. CEO committed to using Planton for all future client projects.',
  },
  {
    company: 'iorta TechNext',
    companyLogo: '/images/customers/logos/iorta.svg',
    type: 'BFSI Product Company',
    project: 'SalesVerse',
    projectDescription: 'Sales cycle management platform',
    cloud: 'AWS (ECS)',
    teamSize: '7 developers',
    industry: 'Financial Services (BFSI)',
    spend: '~$450/month (platform + usage)',
    highlight: 'Highest Platform Usage Customer',
    challenge: 'Small team building a sales management platform without dedicated DevOps resources. Needed secure, compliant infrastructure without the overhead of hiring ops specialists.',
    before: [
      'Team lacked deep AWS expertise',
      '7 developers dependent on single junior DevOps resource',
      'No budget for senior DevOps hire ($150K/year)',
      'Needed multi-environment support with BFSI compliance',
    ],
    after: [
      'Complete AWS ECS environment: <1 hour',
      'Junior DevOps provides senior-level developer experience',
      '7 developers self-service their deployments',
      'Mature infrastructure meeting regulated industry requirements',
    ],
    economics: {
      subscription: '$140/month (7 × $20/dev)',
      usage: '~$310/month (automation minutes)',
      total: '~$450/month',
      alternative: '$150K+/year for DevOps engineer',
      savings: '96%',
    },
    quote: 'Planton enabled me to provide a mature developer experience to our 7-person team without requiring deep AWS expertise. They deploy independently and manage the entire infrastructure lifecycle themselves.',
    result: 'iorta TechNext gets enterprise-grade DevOps capabilities at 1/30th the cost of hiring. Highest platform usage among all Planton customers (~51 hours automation time/month).',
  },
];

const metrics = [
  { value: '<1 hour', label: 'Infrastructure Deployment Time', note: '(vs couple weeks manually)' },
  { value: '100%', label: 'Customer Retention' },
  { value: '5x', label: 'Faster Than Manual Work' },
  { value: '$20', label: '/developer/month to start' },
];

export const CustomerStories: FC = () => {
  return (
    <Section variant="gradient" id="customer-stories">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="success" className="mb-6">CUSTOMER STORIES</Badge>
        <SectionTitle>
          Customer{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Results
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          See how teams use Planton to accelerate delivery and eliminate ops bottlenecks.
        </SectionSubtitle>
      </Stack>

      {/* Customer stories */}
      <Stack className="gap-12 mb-16">
        {customers.map((customer, index) => (
          <Card key={index} className="p-0 overflow-hidden">
            {/* Header */}
            <Box className="p-6 border-b border-[#2a2a2a] bg-[#0f0f0f]">
              <Box className="flex flex-wrap items-center justify-between gap-4">
                <Box className="flex items-center gap-4">
                  <Box className="w-12 h-12 rounded-lg bg-[#1a1a1a] p-2 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={customer.companyLogo} 
                      alt={customer.company} 
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </Box>
                  <Box>
                    <Typography className="text-xl font-semibold text-white">
                      {customer.company}
                      <span className="text-[#a0a0a0] font-normal text-base ml-2">
                        → {customer.project}
                      </span>
                    </Typography>
                    <Typography className="text-sm text-[#666] mt-1">
                      {customer.type} • {customer.projectDescription}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-wrap gap-2">
                  <Badge variant="purple">{customer.cloud}</Badge>
                  <Badge variant="default">{customer.teamSize}</Badge>
                  {customer.spend && <Badge variant="success">{customer.spend}</Badge>}
                </Box>
              </Box>
            </Box>
            
            {/* Content */}
            <Box className="p-6 bg-[#0a0a0a]">
              {/* Challenge */}
              <Box className="mb-8">
                <Typography className="text-sm text-[#666] uppercase tracking-wide mb-2">
                  The Challenge
                </Typography>
                <Typography className="text-[#b0b0b0]">
                  {customer.challenge}
                </Typography>
              </Box>
              
              {/* Before/After grid */}
              <Box className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Before */}
                <Box className="p-4 rounded-lg bg-[#111] border border-[#ef4444]/30">
                  <Typography className="text-sm font-medium text-[#ef4444] mb-4 flex items-center gap-2">
                    <span>⏱️</span> Before Planton
                  </Typography>
                  <Stack className="gap-2">
                    {customer.before.map((item, i) => (
                      <Typography key={i} className="text-xs text-[#a0a0a0] flex items-start gap-2">
                        <span className="text-[#ef4444]">•</span> {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
                
                {/* After */}
                <Box className="p-4 rounded-lg bg-[#111] border border-[#10b981]/30">
                  <Typography className="text-sm font-medium text-[#10b981] mb-4 flex items-center gap-2">
                    <span>🚀</span> With Planton
                  </Typography>
                  <Stack className="gap-2">
                    {customer.after.map((item, i) => (
                      <Typography key={i} className="text-xs text-[#a0a0a0] flex items-start gap-2">
                        <CheckIcon /> {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Box>
              
              {/* Economics (if available) */}
              {customer.economics && (
                <Box className="p-4 rounded-lg bg-gradient-to-r from-[#7c3aed]/10 to-[#0ea5e9]/10 border border-[#7c3aed]/30 mb-8">
                  <Typography className="text-sm font-medium text-white mb-3">
                    💰 The Economics
                  </Typography>
                  <Box className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <Box>
                      <Typography className="text-lg font-bold text-white">
                        {customer.economics.subscription}
                      </Typography>
                      <Typography className="text-xs text-[#666]">Subscription</Typography>
                    </Box>
                    <Box>
                      <Typography className="text-lg font-bold text-white">
                        {customer.economics.usage}
                      </Typography>
                      <Typography className="text-xs text-[#666]">Usage</Typography>
                    </Box>
                    <Box>
                      <Typography className="text-lg font-bold text-white">
                        {customer.economics.total}
                      </Typography>
                      <Typography className="text-xs text-[#666]">Total</Typography>
                    </Box>
                    <Box>
                      <Typography className="text-2xl font-bold text-[#10b981]">
                        {customer.economics.savings}
                      </Typography>
                      <Typography className="text-xs text-[#666]">Cost Reduction</Typography>
                    </Box>
                  </Box>
                  <Typography className="text-xs text-[#666] text-center mt-3">
                    vs {customer.economics.alternative}
                  </Typography>
                </Box>
              )}
              
              {/* Quote */}
              {customer.quote && (
                <Quote 
                  text={customer.quote} 
                  author={customer.company} 
                  companyLogo={customer.companyLogo}
                />
              )}
              
              {/* Result */}
              <Box className="mt-6 pt-6 border-t border-[#2a2a2a]">
                <Typography className="text-sm text-[#a0a0a0]">
                  <span className="text-[#10b981] font-medium">Result:</span> {customer.result}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Stack>

      {/* Metrics bar */}
      <Box className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="text-center p-6">
            <Typography className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
              {metric.value}
            </Typography>
            <Typography className="text-sm text-[#a0a0a0] mt-2">
              {metric.label}
            </Typography>
            {metric.note && (
              <Typography className="text-xs text-[#666] mt-1">
                {metric.note}
              </Typography>
            )}
          </Card>
        ))}
      </Box>
    </Section>
  );
};
