'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, CheckIcon, Quote, Badge } from './shared';

const customers = [
  {
    company: 'Tynybay',
    type: 'IT Consulting Firm',
    project: 'Odwen',
    projectDescription: 'Online warehousing platform',
    cloud: 'Google Cloud Platform (Cloud Run)',
    teamSize: '3 people (1 DevOps engineer, 2 developers)',
    challenge: 'Tight timeline to deliver a working warehousing platform for their client. Infrastructure setup was blocking developers from making progress on product features.',
    before: [
      'DevOps engineer spent at least a couple weeks setting up GCP Cloud Run environment',
      'Developers waited for infrastructure before writing code',
      'Each new environment (QA, staging, prod) required manual replication',
      'Service onboarding required DevOps engineer involvement',
    ],
    after: [
      'Infrastructure deployment: <1 hour for complete GCP Cloud Run environment',
      'Developer autonomy: Developers self-onboard services without blocking on DevOps',
      'Multi-environment: QA, staging, and prod environments created in minutes',
      'Ongoing velocity: Developers manage their own deployments through Service Hub',
    ],
    quote: 'Developers self-onboard their own services. That\'s a huge win.',
    result: 'The DevOps engineer now focuses on architecture and optimization—not repetitive environment setup and service deployments.',
  },
  {
    company: 'iorta TechNext',
    type: 'via Tynybay consulting',
    project: 'SalesVerse',
    projectDescription: 'Sales cycle management platform',
    cloud: 'AWS (ECS)',
    teamSize: '7 developers',
    industry: 'Financial Services (BFSI)',
    spend: '~$450/month (platform + usage)',
    challenge: 'Small team building a sales management platform without dedicated DevOps resources. Needed secure, compliant infrastructure without the overhead of hiring ops specialists.',
    before: [
      'Technical founder managing infrastructure manually through AWS Console',
      'Inconsistent deployments across environments',
      'Limited visibility into what changed and when',
      'Slow iteration due to infrastructure being a bottleneck',
    ],
    after: [
      'Complete self-service: 7 developers manage all infrastructure and deployments',
      'Highest platform usage among all Planton customers (most active account)',
      'No dedicated DevOps hire needed - $150K+/year savings',
      'Full audit trail - Every infrastructure change tracked for compliance',
    ],
    economics: {
      subscription: '$140/month (7 × $20/dev)',
      usage: '~$310/month (automation minutes)',
      total: '~$450/month',
      alternative: '$150K+/year for DevOps engineer',
      savings: '96%',
    },
    result: 'iorta TechNext gets enterprise-grade DevOps capabilities at 1/30th the cost of hiring. Team focuses on product, not infrastructure.',
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
                <Quote text={customer.quote} author={customer.company} />
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
