import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  ComprehensiveResource,
  EmpowerYourTeam,
  ReadyToSimplify,
  RealTimeIaCWorkflow,
  SeamlesslyModify,
  ShareOrUnshare,
} from '@/components';

export const metadata: Metadata = {
  title: 'Planton Copilot',
  description: 'Empower Your Team with Our Planton Copilot',
};

export default function PlantoraAiPage() {
  return (
    <Box>
      <EmpowerYourTeam />
      <SeamlesslyModify />
      <ComprehensiveResource />
      <ShareOrUnshare />
      <RealTimeIaCWorkflow />
      <ReadyToSimplify />
    </Box>
  );
}
