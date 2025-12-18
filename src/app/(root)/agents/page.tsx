import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  HeroSection,
  JourneyTimeline,
  ProblemSolution,
  TechnologySection,
  AgentShowcase,
  RealScenarios,
  VisionSection,
  CTASection,
} from '@/components/agents';

export const metadata: Metadata = {
  title: 'Agents - Cursor for DevOps | Planton Cloud',
  description:
    'A coordinated system of specialized AI agents, each mastering a specific domain of DevOps operations. From pipeline troubleshooting to database provisioning, get expert-level DevOps assistance 24/7.',
  keywords:
    'DevOps AI, AI agents, DevOps automation, infrastructure automation, Kubernetes troubleshooting, pipeline management, cloud automation, Graphton',
  openGraph: {
    title: 'Agents - Cursor for DevOps',
    description:
      'Specialized AI agents for every DevOps task. Built on Graphton framework for declarative agent creation.',
    type: 'website',
    url: 'https://planton.ai/agents',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agents - Cursor for DevOps',
    description:
      'Specialized AI agents for every DevOps task. 10x faster infrastructure work.',
  },
};

export default function AgentsPage() {
  return (
    <Box>
      <HeroSection />
      <JourneyTimeline />
      <ProblemSolution />
      <TechnologySection />
      <AgentShowcase />
      <RealScenarios />
      <VisionSection />
      <CTASection />
    </Box>
  );
}














