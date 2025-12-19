'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1, Pill } from '@/components';

interface ProblemSolutionCardProps {
  title: string;
  problem: string;
  impact: string;
  solutions: string[];
  metric: string;
}

const ProblemSolutionCard: FC<ProblemSolutionCardProps> = ({
  title,
  problem,
  impact,
  solutions,
  metric,
}) => {
  return (
    <Stack
      sx={{
        p: { xs: 2.5, md: 4 },
        bgcolor: '#161B22',
        border: '1px solid #3D3D3D',
        borderRadius: '12px',
        gap: 2,
        height: '100%',
      }}
    >
      <Typography sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 600 }}>
        {title}
      </Typography>

      <Stack spacing={1}>
        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          Problem
        </Typography>
        <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>{problem}</Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          Impact
        </Typography>
        <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>{impact}</Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          Solution with Planton
        </Typography>
        <Stack spacing={0.5}>
          {solutions.map((solution, index) => (
            <Typography key={index} sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
              ✅ {solution}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid #3D3D3D' }}>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#0095FF' }}>
          {metric}
        </Typography>
      </Box>
    </Stack>
  );
};

export const ProblemSolutionSection: FC = () => {
  const cards: ProblemSolutionCardProps[] = [
    {
      title: 'IT Consulting Firms',
      problem: 'New client projects delayed by infrastructure setup',
      impact: 'Non-billable days before developers can iterate on actual product features',
      solutions: [
        '<1 hour environment deployment',
        'Developers self-onboard services',
        'Multiple environments (dev, QA, staging, prod) in minutes',
      ],
      metric: 'Deploy infrastructure 5x faster than manual cloud console work',
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
      metric: 'Full DevOps capabilities at 1/10th the cost of hiring',
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
      metric: '100% visibility into every infrastructure change',
    },
  ];

  return (
    <Stack
      sx={{
        width: '100%',
        alignItems: 'center',
        bgcolor: 'black',
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 0 },
      }}
    >
      <Stack sx={{ width: '100%', maxWidth: '80rem', alignItems: 'center', gap: { xs: 4, md: 6 } }}>
        {/* Section Header */}
        <Stack sx={{ alignItems: 'center', textAlign: 'center', gap: { xs: 2, md: 3 } }}>
          <Pill variant="purple">The Problem</Pill>
          <TypoH2>The DevOps Bottleneck Is Killing Your Velocity</TypoH2>
          <TypoP1 className="text-text-secondary" sx={{ maxWidth: '48rem' }}>
            Whether you're a consulting firm, startup, or established team—infrastructure delays
            slow everyone down. Planton eliminates the wait.
          </TypoP1>
        </Stack>

        {/* Problem/Solution Cards */}
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {cards.map((card, index) => (
            <ProblemSolutionCard key={index} {...card} />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
