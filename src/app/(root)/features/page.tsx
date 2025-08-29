import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  DeployOpenSource,
  DeployServices,
  DevOpsWorkflows,
  IngressSetup,
  MultiCloudFlexibility,
  PulumiModuleRegistry,
  ReadyToTransformFeature,
  SecretsManagement,
  TeamAdministration,
} from '@/components';

export const metadata: Metadata = {
  title: 'All Features',
  description: 'DevOps workflows with Planton Cloud.',
};

export default function IacWorkflowsPage() {
  return (
    <Box>
      <DevOpsWorkflows />
      <DeployServices />
      <SecretsManagement />
      <DeployOpenSource />
      <MultiCloudFlexibility />
      <IngressSetup />
      <PulumiModuleRegistry />
      <TeamAdministration />
      <ReadyToTransformFeature />
    </Box>
  );
}
