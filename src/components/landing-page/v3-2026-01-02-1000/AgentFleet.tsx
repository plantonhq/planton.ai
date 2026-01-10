'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, Badge, PrimaryButton } from './shared';

const agents = [
  {
    name: 'Pipeline Manager',
    description: 'Troubleshoots CI/CD failures—Docker build errors, deployment misconfigurations.',
  },
  {
    name: 'ECS Troubleshooter',
    description: 'Debugs AWS ECS issues—task failures, networking, resource constraints.',
  },
];

const roadmap = ['Kubernetes Diagnostics', 'Database Performance', 'Security Scanner'];

export const AgentFleet: FC = () => {
  return (
    <Section id="agent-fleet">
      <Stack className="items-center text-center mb-12">
        <Badge variant="purple" className="mb-6">AGENT FLEET</Badge>
        <SectionTitle>
          AI That{' '}
          <span className="bg-gradient-to-r from-[#f59e0b] to-[#ef4444] bg-clip-text text-transparent">
            Actually Works
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Specialized agents for specific DevOps tasks. Narrow scope = higher accuracy.
        </SectionSubtitle>
      </Stack>

      {/* Current agents */}
      <Box className="grid md:grid-cols-2 gap-6 mb-8">
        {agents.map((agent, index) => (
          <Card key={index}>
            <Box className="flex items-center gap-3 mb-3">
              <Box className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </Box>
              <Typography className="text-white font-medium">{agent.name}</Typography>
              <Badge variant="purple" className="ml-auto">Beta</Badge>
            </Box>
            <BodyText className="text-sm">{agent.description}</BodyText>
          </Card>
        ))}
      </Box>

      {/* Roadmap */}
      <Box className="text-center mb-8">
        <Typography className="text-sm text-[#666] mb-3">Coming soon:</Typography>
        <Box className="flex flex-wrap justify-center gap-2">
          {roadmap.map((item, index) => (
            <Badge key={index} variant="default">{item}</Badge>
          ))}
        </Box>
      </Box>

      {/* CTA */}
      <Box className="text-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform" target="_blank">
          <PrimaryButton className="px-8 py-4">
            Request Early Access
          </PrimaryButton>
        </Link>
        <Typography className="text-sm text-[#666] mt-4">
          Currently available for select customers
        </Typography>
      </Box>
    </Section>
  );
};
