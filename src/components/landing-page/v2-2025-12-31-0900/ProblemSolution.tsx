'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, CheckIcon, Metric } from './shared';

interface TargetAudienceCardProps {
  title: string;
  problem: string;
  impact: string;
  solutions: string[];
  metric: string;
  metricLabel: string;
}

const TargetAudienceCard: FC<TargetAudienceCardProps> = ({
  title,
  problem,
  impact,
  solutions,
  metric,
  metricLabel,
}) => (
  <Card className="h-full flex flex-col" gradient>
    {/* Header */}
    <Typography className="text-lg md:text-xl font-semibold text-[#7c3aed] mb-6">
      {title}
    </Typography>
    
    {/* Problem & Impact */}
    <Box className="mb-6">
      <Typography className="text-sm text-[#666] uppercase tracking-wide mb-2">
        Problem
      </Typography>
      <Typography className="text-white font-medium mb-4">
        {problem}
      </Typography>
      
      <Typography className="text-sm text-[#666] uppercase tracking-wide mb-2">
        Impact
      </Typography>
      <Typography className="text-[#ef4444] text-sm">
        {impact}
      </Typography>
    </Box>
    
    {/* Divider */}
    <Box className="w-full h-px bg-gradient-to-r from-[#7c3aed]/30 via-[#7c3aed]/50 to-[#7c3aed]/30 mb-6" />
    
    {/* Solutions */}
    <Box className="mb-6 flex-1">
      <Typography className="text-sm text-[#666] uppercase tracking-wide mb-3">
        Solution with Planton
      </Typography>
      <Stack className="gap-3">
        {solutions.map((solution, index) => (
          <Box key={index} className="flex items-start gap-3">
            <Box className="mt-0.5 flex-shrink-0">
              <CheckIcon />
            </Box>
            <Typography className="text-sm text-[#b0b0b0]">
              {solution}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
    
    {/* Metric */}
    <Box className="pt-4 border-t border-[#2a2a2a]">
      <Metric value={metric} label={metricLabel} />
    </Box>
  </Card>
);

const audiences: TargetAudienceCardProps[] = [
  {
    title: 'IT Consulting Firms',
    problem: 'New client projects delayed by infrastructure setup',
    impact: 'Non-billable days before developers can iterate on actual product features',
    solutions: [
      '<1 hour environment deployment',
      'Developers self-onboard services',
      'Multiple environments (dev, QA, staging, prod) in minutes',
    ],
    metric: '5x',
    metricLabel: 'Faster than manual cloud console work',
  },
  {
    title: 'Startups & Small Product Companies',
    problem: "Can't afford dedicated DevOps engineers",
    impact: '$150K+/year overhead for basic operations—or bottlenecked on technical founders',
    solutions: [
      '$20/dev/month + usage pricing',
      'Platform replaces ops team for core workflows',
      'Self-service infrastructure and CI/CD',
    ],
    metric: '1/10th',
    metricLabel: 'The cost of hiring a DevOps engineer',
  },
  {
    title: 'Established Teams',
    problem: 'Snowflake infrastructure, compliance nightmares, visibility gaps',
    impact: 'Audit failures, security incidents, hours wasted troubleshooting "who changed what"',
    solutions: [
      'Standardized, repeatable deployments',
      'Full change tracking and audit logs',
      'Compliance-ready security controls',
    ],
    metric: '100%',
    metricLabel: 'Visibility into every infrastructure change',
  },
];

export const ProblemSolution: FC = () => {
  return (
    <Section variant="gradient" id="problem-solution">
      <Stack className="items-center text-center mb-16">
        <SectionTitle>
          The DevOps Bottleneck Is{' '}
          <span className="bg-gradient-to-r from-[#ef4444] to-[#f97316] bg-clip-text text-transparent">
            Killing Your Velocity
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Whether you&apos;re a consulting firm, startup, or established team—infrastructure delays 
          slow everyone down. Planton eliminates the wait.
        </SectionSubtitle>
      </Stack>

      <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {audiences.map((audience, index) => (
          <TargetAudienceCard key={index} {...audience} />
        ))}
      </Box>
    </Section>
  );
};
