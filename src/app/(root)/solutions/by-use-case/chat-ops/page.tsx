import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AuditableIntelligence,
  CollaborateSeamlessly,
  ConversationalInterfaces,
  ExistingWorkflows,
  GetStarted,
  ManageConfigurations,
  MeetPlantora,
  RealTimeProgress,
  ReduceCognitive,
  ReimagineDevOps,
  WhatIsChatOps,
} from '@/components';

export const metadata: Metadata = {
  title: 'ChatOps',
  description: 'Reimagine DevOps with AI and ChatOps',
};

export default function ChatOpsPage() {
  return (
    <Box>
      <ReimagineDevOps />
      <WhatIsChatOps />
      <MeetPlantora />
      <ConversationalInterfaces />
      <RealTimeProgress />
      <CollaborateSeamlessly />
      <ManageConfigurations />
      <AuditableIntelligence />
      <ExistingWorkflows />
      <ReduceCognitive />
      <GetStarted />
    </Box>
  );
}
