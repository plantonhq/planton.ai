import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AIEnhancedDevelopment,
  CicdConfiguration,
  CommandLineMeets,
  CommandTheCloud,
  ComplexityAndCognitive,
  DevOpsCoPilot,
  FullFeaturedCLI,
  LocalDevelopment,
  StartLeveraging,
  StreamlinedKubernetes,
} from '@/components';

export const metadata: Metadata = {
  title: 'Apps CLI',
  description: 'Command the Cloud with AI-Powered CLI',
};

export default function AppsCliPage() {
  return (
    <Box>
      <CommandTheCloud />
      <CommandLineMeets />
      <ComplexityAndCognitive />
      <DevOpsCoPilot />
      <FullFeaturedCLI />
      <StreamlinedKubernetes />
      <CicdConfiguration />
      <LocalDevelopment />
      <AIEnhancedDevelopment />
      <StartLeveraging />
    </Box>
  );
}
