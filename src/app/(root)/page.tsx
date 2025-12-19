'use client';

import { Box } from '@mui/material';
import {
  HeroSection,
  ProblemSolutionSection,
  InfraHubSection,
  ServiceHubSection,
  OpenStandardsSection,
  OpenSourceSection,
  AgentFleetSection,
  CustomerStoriesSection,
  PricingSection,
  BuiltByDevOpsSection,
  SecurityComplianceSection,
  FinalCTASection,
} from '@/components';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ProblemSolutionSection />
      <InfraHubSection />
      <ServiceHubSection />
      <OpenStandardsSection />
      <OpenSourceSection />
      <AgentFleetSection />
      <CustomerStoriesSection />
      <PricingSection />
      <BuiltByDevOpsSection />
      <SecurityComplianceSection />
      <FinalCTASection />
    </Box>
  );
}
