import { Metadata } from 'next';
import { Box } from '@mui/material';
import { Deployments, StackJobList, Examining, EfficiencyAndControl } from '@/components';

export const metadata: Metadata = {
  title: 'Iac workflows',
  description: 'Deployments with Pulumi IaC',
};

export default function IacWorkflowsPage() {
  return (
    <Box>
      <Deployments />
      <StackJobList />
      <Examining />
      <EfficiencyAndControl />
    </Box>
  );
}
