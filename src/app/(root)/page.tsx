'use client';

import { Box } from '@mui/material';
import {
  Conversational,
  HomeFeatures,
  HomeIntegratedIAC,
  ConfigurationAndDebugging,
  ExperienceTheFuture,
  StreamlinedKubernetes2,
} from '@/components';

export default function Home() {
  return (
    <Box>
      <Conversational />
      <HomeFeatures />
      <HomeIntegratedIAC />
      <StreamlinedKubernetes2 />
      <ConfigurationAndDebugging />
      <ExperienceTheFuture />
    </Box>
  );
}
