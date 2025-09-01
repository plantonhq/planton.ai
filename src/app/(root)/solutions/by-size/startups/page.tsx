import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AIPoweredDevOpsAssistant,
  BgDots,
  BuiltByStartups,
  CostEffectiveSolutions,
  DeploymentInsights,
  DeployWithoutDevOpsExpertise,
  LaunchFaster,
  LimitedResources,
  RapidOnboarding,
  SimplifyMultiCloud,
  SupportiveCommunity,
} from '@/components';

export const metadata: Metadata = {
  title: 'By-Size - Startups',
  description: 'Launch Faster, Scale Smarter with Planton Cloud',
};

export default function StartupsPage() {
  return (
    <Box>
      <BgDots />
      <LaunchFaster />
      <LimitedResources />
      <DeployWithoutDevOpsExpertise />
      <RapidOnboarding />
      <AIPoweredDevOpsAssistant />
      <CostEffectiveSolutions />
      <SimplifyMultiCloud />
      <DeploymentInsights />
      <SupportiveCommunity />
      <BuiltByStartups />
    </Box>
  );
}
