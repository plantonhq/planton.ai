import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  CompareAndContrast,
  CrudWithCommitMsgs,
  EndToEndVisibility,
  FullVisibility,
  ReadyToElevate2,
  WhyAuditableIntelligence,
} from '@/components';

export const metadata: Metadata = {
  title: 'Auditable Intelligence',
  description: 'Full-Visibility Change Tracking of your Cloud Resources',
};

export default function AuditableIntelligencePage() {
  return (
    <Box>
      <FullVisibility />
      <WhyAuditableIntelligence />
      <CompareAndContrast />
      <EndToEndVisibility />
      <CrudWithCommitMsgs />
      <ReadyToElevate2 />
    </Box>
  );
}
