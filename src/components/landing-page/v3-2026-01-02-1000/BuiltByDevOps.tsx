'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, Card, Badge } from './shared';

const facts = [
  {
    icon: '🔄',
    title: 'Planton Runs on Planton',
    description: 'We deploy our own infrastructure using the same platform you use.',
  },
  {
    icon: '💬',
    title: '24/7 Slack Support',
    description: 'Direct channel with the engineering team who built the platform.',
  },
  {
    icon: '⚡',
    title: 'Operators, Not Consultants',
    description: 'Built by engineers who ran production systems at scale.',
  },
];

export const BuiltByDevOps: FC = () => {
  return (
    <Section variant="gradient" id="built-by-devops">
      <Stack className="items-center text-center mb-12">
        <Badge variant="success" className="mb-6">WHO WE ARE</Badge>
        <SectionTitle>
          Built by{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            DevOps Engineers
          </span>
        </SectionTitle>
      </Stack>

      <Box className="grid md:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <Card key={index} className="text-center">
            <Typography className="text-3xl mb-4">{fact.icon}</Typography>
            <Typography className="text-white font-medium mb-2">{fact.title}</Typography>
            <Typography className="text-sm text-[#a0a0a0]">{fact.description}</Typography>
          </Card>
        ))}
      </Box>
    </Section>
  );
};
