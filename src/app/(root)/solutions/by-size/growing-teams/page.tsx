import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AccelerateDevelopment,
  AchieveFullTransparency,
  BgDots,
  BoostProductivity,
  CollaborateEffortlessly,
  EmpowerDevelopers,
  EnhanceSecurity,
  FutureProof,
  IntegrateSeamlessly,
  ReadyToEmpower,
  ScaleLimitlessly,
  ScaleYourSuccess,
  SecureAccess,
} from '@/components';

export const metadata: Metadata = {
  title: 'Growing teams',
  description: 'Scale Your Success with AI-Powered Team Collaboration',
};

export default function GrowingTeamsPage() {
  return (
    <Box>
      <BgDots  />
      <ScaleYourSuccess />
      <CollaborateEffortlessly />
      <EmpowerDevelopers />
      <AchieveFullTransparency />
      <SecureAccess />
      <ScaleLimitlessly />
      <IntegrateSeamlessly />
      <AccelerateDevelopment />
      <EnhanceSecurity />
      <BoostProductivity />
      <FutureProof />
      <ReadyToEmpower />
    </Box>
  );
}
