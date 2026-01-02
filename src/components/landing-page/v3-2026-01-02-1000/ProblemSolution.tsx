'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, Card, Metric } from './shared';

interface ProblemCardProps {
  title: string;
  problem: string;
  metric: string;
  metricLabel: string;
}

const ProblemCard: FC<ProblemCardProps> = ({
  title,
  problem,
  metric,
  metricLabel,
}) => (
  <Card className="h-full flex flex-col" gradient>
    <Typography className="text-lg font-semibold text-[#7c3aed] mb-4">
      {title}
    </Typography>
    <Typography className="text-white font-medium flex-1 mb-6">
      {problem}
    </Typography>
    <Box className="pt-4 border-t border-[#2a2a2a]">
      <Metric value={metric} label={metricLabel} />
    </Box>
  </Card>
);

const audiences: ProblemCardProps[] = [
  {
    title: 'IT Consulting Firms',
    problem: 'New client projects delayed by weeks of infrastructure setup',
    metric: '5x',
    metricLabel: 'Faster deployment',
  },
  {
    title: 'Startups',
    problem: "Can't afford $150K+/year for dedicated DevOps engineers",
    metric: '1/10th',
    metricLabel: 'The cost',
  },
  {
    title: 'Established Teams',
    problem: 'Snowflake infrastructure with zero visibility into changes',
    metric: '100%',
    metricLabel: 'Change visibility',
  },
];

export const ProblemSolution: FC = () => {
  return (
    <Section variant="gradient" id="problem-solution">
      <Stack className="items-center text-center mb-12">
        <SectionTitle>
          The DevOps Bottleneck Is{' '}
          <span className="bg-gradient-to-r from-[#ef4444] to-[#f97316] bg-clip-text text-transparent">
            Killing Your Velocity
          </span>
        </SectionTitle>
      </Stack>

      <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {audiences.map((audience, index) => (
          <ProblemCard key={index} {...audience} />
        ))}
      </Box>
    </Section>
  );
};
