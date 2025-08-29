import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AuditableIntelligence,
  CollaborateSeamlessly,
  ConversationalInterfaces,
  EmpowerYourDevelopers,
  ExistingWorkflows,
  GetStarted,
  ManageConfigurations,
  MeetPlantora,
  RealTimeProgress,
  ReduceCognitive,
  UnifiedServiceDevelopment,
  WhatIsChatOps,
} from '@/components';

export const metadata: Metadata = {
  title: 'Internal developer platform',
  description: 'Empower Your Developers with PlantonCloud&apos;s Internal Developer Platform',
};

export default function InternalDeveloperPlatformPage() {
  return (
    <Box>
      <EmpowerYourDevelopers />
      <UnifiedServiceDevelopment />
      <MeetPlantora />
      <WhatIsChatOps />
      <ConversationalInterfaces showTlTorus />
      <RealTimeProgress showTlTorus={false} />
      <CollaborateSeamlessly />
      <ManageConfigurations />
      <AuditableIntelligence showPurpleShadow={true} />
      <ExistingWorkflows />
      <ReduceCognitive />
      <GetStarted />
    </Box>
  );
}
