import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  HowItAllWorks,
  InDepthYAML,
  KeyBenefits,
  OnDemandLog,
  StreamlinedKubernetesAccess,
  TerminalAccess,
} from '@/components';

export const metadata: Metadata = {
  title: 'Kubernetes dashboard',
  description: 'Empower Your Team with Streamlined Kubernetes Access',
};

export default function KubernetesDashboardPage() {
  return (
    <Box>
      <StreamlinedKubernetesAccess />
      <KeyBenefits />
      <InDepthYAML />
      <OnDemandLog />
      <TerminalAccess />
      <HowItAllWorks />
    </Box>
  );
}
