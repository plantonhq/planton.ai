'use client';

import { Box } from '@mui/material';
import {
  HeroSection,
  SecurityTrustBar,
  SocialProofBar,
  HowItWorks,
  ComparisonTable,
  ProblemSolution,
  InfraHub,
  ServiceHub,
  WallOfLove,
  CustomerStories,
  ROICalculator,
  PricingSimplified,
  OpenStandards,
  OpenSourceFoundation,
  AgentFleet,
  BuiltByDevOps,
  SecurityCompliance,
  FinalCTA,
} from '@/components/landing-page-v2';

export default function Home() {
  return (
    <Box>
      {/* 1. Hero Section - Enhanced with new headline, animated terminal */}
      <HeroSection />
      
      {/* 2. Security Trust Bar - NEW: Compliance badges */}
      <SecurityTrustBar />
      
      {/* 3. Social Proof Bar - NEW: Customer logos and metrics */}
      <SocialProofBar />
      
      {/* 4. How It Works - NEW: 3-step visual process */}
      <HowItWorks />
      
      {/* 5. Comparison Table - NEW: IaC and PaaS comparisons */}
      <ComparisonTable />
      
      {/* 6. Problem/Solution - Unchanged */}
      <ProblemSolution />
      
      {/* 7. Infra Hub - Enhanced with 120+ components, Odwen quote */}
      <InfraHub />
      
      {/* 8. Service Hub - Enhanced with pipeline visualization */}
      <ServiceHub />
      
      {/* 9. Wall of Love - NEW: 5 testimonial cards */}
      <WallOfLove />
      
      {/* 10. Customer Stories - Enhanced with 3 detailed stories */}
      <CustomerStories />
      
      {/* 11. ROI Calculator - NEW: Interactive savings calculator */}
      <ROICalculator />
      
      {/* 12. Pricing - Enhanced with early adopter badge */}
      <PricingSimplified />
      
      {/* 13. Open Standards - Enhanced headline */}
      <OpenStandards />
      
      {/* 14. Open Source Foundation - Enhanced with "Open Infrastructure Modules" */}
      <OpenSourceFoundation />
      
      {/* 15. Agent Fleet - Enhanced with SDLC context section */}
      <AgentFleet />
      
      {/* 16. Built By DevOps - Unchanged */}
      <BuiltByDevOps />
      
      {/* 17. Security & Compliance - Unchanged */}
      <SecurityCompliance />
      
      {/* 18. Final CTA - Enhanced with metrics and quote carousel */}
      <FinalCTA />
    </Box>
  );
}
