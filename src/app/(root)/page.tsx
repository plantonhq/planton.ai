'use client';

import { Box } from '@mui/material';
import {
  HeroSection,
  ProblemSolution,
  InfraHub,
  ServiceHub,
  OpenStandards,
  OpenSourceFoundation,
  AgentFleet,
  CustomerStories,
  PricingSimplified,
  BuiltByDevOps,
  SecurityCompliance,
  FinalCTA,
} from '@/components/landing-page-v2';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ProblemSolution />
      <InfraHub />
      <ServiceHub />
      <OpenStandards />
      <OpenSourceFoundation />
      <AgentFleet />
      <CustomerStories />
      <PricingSimplified />
      <BuiltByDevOps />
      <SecurityCompliance />
      <FinalCTA />
    </Box>
  );
}
