import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AccelerateTimeToMarket,
  AIGeneratedDeployment,
  BgDots,
  CollaborationAndTransparency,
  EnableSelfService,
  GainCompetitiveEdge,
  InnovateSection,
  IntoTheFuture,
  LeverageAI,
  ReduceOperationalCosts,
  SimplifyComplexInfrastructure,
  TransformEngineering,
} from '@/components';

export const metadata: Metadata = {
  title: 'Engineering leader',
  description: 'Transform Engineering Leadership with AI-Enabled Efficiency',
};

export default function EngineeringLeaderPage() {
  return (
    <Box>
      <BgDots />
      <TransformEngineering />
      <AccelerateTimeToMarket />
      <CollaborationAndTransparency />
      <ReduceOperationalCosts />
      <LeverageAI />
      <SimplifyComplexInfrastructure />
      <InnovateSection
        title="Improve Security and Compliance"
        subTitle="Ensure your deployments meet security standards and compliance requirements. Planton Cloud offers robust IAM capabilities, secure credential management, and comprehensive audit trails. Engineering leaders can enforce security policies and have confidence that all changes are tracked and authorized."
      />
      <EnableSelfService />
      <GainCompetitiveEdge />
      <AIGeneratedDeployment
        title="API-First Platform with Extensive Documentation"
        titleMaxWidth="1050px"
        subTitle="Integrate Planton Cloud seamlessly into your tools and workflows with our comprehensive, well-documented APIs. Built on industry standards, our APIs empower you to automate and extend functionalities, giving you full control over your development environment."
      />
      <IntoTheFuture />
    </Box>
  );
}
