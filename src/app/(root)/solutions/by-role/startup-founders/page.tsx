import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AchieveFaster,
  BgDots,
  CompliantOperations,
  CostEfficientGrowth,
  ExperienceWithPlantora,
  FocusOnInnovation,
  JoinAThriving,
  SelfServiceDevOps,
  InnovateSection,
  UnleashYourAutomation,
  ReadyToLaunch,
} from '@/components';

export const metadata: Metadata = {
  title: 'Startup founders',
  description: 'Unleash Your Automation, Skip the Documentation',
};

export default function StartupFoundersPage() {
  return (
    <Box>
      <BgDots />
      <UnleashYourAutomation />
      <InnovateSection
        title="The Startup Challenge: Innovate Faster with Limited Resources"
        subTitle="As a startup founder, turning your vision into reality quickly is crucial to staying
          ahead. Limited budgets and the absence of dedicated DevOps engineers can slow down
          development and delay your time to market. Planton Cloud offers an AI-powered platform
          that empowers your team to build, deploy, and scale applications rapidly without the
          overhead of traditional DevOps."
      />
      <SelfServiceDevOps />
      <AchieveFaster />
      <CostEfficientGrowth />
      <FocusOnInnovation />
      <JoinAThriving />
      <CompliantOperations />
      <ExperienceWithPlantora />
      <ReadyToLaunch />
    </Box>
  );
}
