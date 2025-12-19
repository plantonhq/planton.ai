'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, Pill } from '@/components';

interface CustomerStoryProps {
  customer: string;
  project: string;
  cloud: string;
  teamSize: string;
  challenge: string;
  beforeItems: string[];
  withPlantonItems: string[];
  quote: string;
  details?: {
    label: string;
    value: string;
  }[];
}

const CustomerStoryCard: FC<CustomerStoryProps> = ({
  customer,
  project,
  cloud,
  teamSize,
  challenge,
  beforeItems,
  withPlantonItems,
  quote,
  details,
}) => {
  return (
    <Stack className="p-6 md:p-8 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
      {/* Header */}
      <Stack className="gap-2">
        <Typography className="text-xl md:text-2xl font-semibold text-white">{customer}</Typography>
        <Stack className="flex-row flex-wrap gap-2">
          <Box className="px-2 py-1 bg-[#0D1117] rounded border border-[#30363D]">
            <Typography className="text-[10px] text-text-secondary">Project: {project}</Typography>
          </Box>
          <Box className="px-2 py-1 bg-[#0D1117] rounded border border-[#30363D]">
            <Typography className="text-[10px] text-text-secondary">Cloud: {cloud}</Typography>
          </Box>
          <Box className="px-2 py-1 bg-[#0D1117] rounded border border-[#30363D]">
            <Typography className="text-[10px] text-text-secondary">Team: {teamSize}</Typography>
          </Box>
        </Stack>
      </Stack>

      {/* Challenge */}
      <Stack className="gap-2">
        <Typography className="text-xs font-medium text-[#F59E0B] uppercase tracking-wide">
          The Challenge
        </Typography>
        <Typography className="text-sm text-text-secondary">{challenge}</Typography>
      </Stack>

      {/* Before/After */}
      <Box className="grid md:grid-cols-2 gap-4">
        <Stack className="p-4 bg-[#EF444410] rounded-lg border border-[#EF444433] gap-2">
          <Typography className="text-xs font-medium text-[#EF4444]">Before Planton:</Typography>
          <Stack className="gap-1">
            {beforeItems.map((item, index) => (
              <Typography key={index} className="text-xs text-text-secondary">
                • {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Stack className="p-4 bg-[#10B98110] rounded-lg border border-[#10B98133] gap-2">
          <Typography className="text-xs font-medium text-[#10B981]">With Planton:</Typography>
          <Stack className="gap-1">
            {withPlantonItems.map((item, index) => (
              <Typography key={index} className="text-xs text-text-secondary">
                • {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Box>

      {/* Quote */}
      <Box className="p-4 bg-[#0D1117] rounded-lg border-l-4 border-[#0095FF]">
        <Typography className="text-sm text-white italic">"{quote}"</Typography>
      </Box>

      {/* Details */}
      {details && (
        <Stack className="flex-row flex-wrap gap-4 pt-4 border-t border-[#3D3D3D]">
          {details.map((detail, index) => (
            <Stack key={index} className="gap-1">
              <Typography className="text-[10px] text-text-secondary uppercase tracking-wide">
                {detail.label}
              </Typography>
              <Typography className="text-sm font-medium text-white">{detail.value}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export const CustomerStoriesSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background */}
      <Box className="absolute w-[800px] aspect-square top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(70,170,165,0.1)_0%,_rgba(107,86,162,0.1)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill>Customer Stories</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">Real Customers, Real Results</TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary max-w-3xl">
            From consulting firms to fintech platforms—see how teams use Planton to accelerate
            delivery and eliminate ops bottlenecks.
          </Typography>
        </Stack>

        {/* Customer Stories */}
        <Box className="w-full grid md:grid-cols-2 gap-6">
          <CustomerStoryCard
            customer="Tynybay → Odwen Project"
            project="Odwen - Online warehousing platform"
            cloud="Google Cloud Platform"
            teamSize="3 people (1 DevOps engineer, 2 developers)"
            challenge="Tight timeline to deliver a working warehousing platform for their client. Infrastructure setup was blocking developers from making progress on product features."
            beforeItems={[
              'DevOps engineer spent at least a couple weeks setting up GCP Cloud Run environment',
              'Developers waited for infrastructure before writing code',
              'Each new environment (QA, staging, prod) required manual replication',
              'Service onboarding required DevOps engineer involvement',
            ]}
            withPlantonItems={[
              'Infrastructure deployment: <1 hour for complete GCP Cloud Run environment',
              'Developer autonomy: Developers self-onboard services without blocking',
              'Multi-environment: QA, staging, and prod environments created in minutes',
              'Ongoing velocity: Developers manage their own deployments through Service Hub',
            ]}
            quote="Developers self-onboard their own services. That's a huge win."
          />

          <CustomerStoryCard
            customer="iorta TechNext"
            project="SalesVerse - Sales cycle management platform"
            cloud="AWS (ECS)"
            teamSize="7 developers"
            challenge="Small team building a sales management platform without dedicated DevOps resources. Needed secure, compliant infrastructure without the overhead of hiring ops specialists."
            beforeItems={[
              'Technical founder managing infrastructure manually through AWS Console',
              'Inconsistent deployments across environments',
              'Limited visibility into what changed and when',
              'Slow iteration due to infrastructure being a bottleneck',
            ]}
            withPlantonItems={[
              'Complete self-service: 7 developers manage all infrastructure and deployments',
              'Highest platform usage among all Planton customers (most active account)',
              'No dedicated DevOps hire needed - $150K+/year savings',
              'Full audit trail - Every infrastructure change tracked for compliance',
            ]}
            quote="We get enterprise-grade DevOps capabilities at 1/30th the cost of hiring."
            details={[
              { label: 'Monthly Spend', value: '~$450' },
              { label: 'Alternative Cost', value: '$12,500/month' },
              { label: 'Savings', value: '96%' },
            ]}
          />
        </Box>

        {/* Metrics Bar */}
        <Box className="w-full p-6 md:p-8 bg-[#161B22] border border-[#3D3D3D] rounded-xl">
          <Box className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                label: 'Infrastructure Deployment',
                value: '<1 hour',
                subtext: 'vs couple weeks manually',
              },
              { label: 'Customer Retention', value: '100%', subtext: 'through rapid iteration' },
              { label: 'Velocity Improvement', value: '5x', subtext: 'faster than manual work' },
              { label: 'Cost to Start', value: '$20/dev', subtext: '/month + usage' },
              { label: 'Support', value: '24/7', subtext: 'availability' },
            ].map((metric, index) => (
              <Stack key={index} className="items-center text-center gap-1">
                <Typography className="text-2xl md:text-3xl font-bold text-[#0095FF]">
                  {metric.value}
                </Typography>
                <Typography className="text-xs font-medium text-white">{metric.label}</Typography>
                <Typography className="text-[10px] text-text-secondary">{metric.subtext}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
