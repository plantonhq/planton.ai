import { Metadata } from 'next';
import { Box } from '@mui/material';
import { EmpowerYourTeamWithSSD, GetStartedWithSSD, WhatIsSSD, YourOneStopShop } from '@/components';

export const metadata: Metadata = {
  title: 'Self-Service DevOps',
  description: 'Empower Your Team with Self-Service DevOps',
};

export default function SelfServiceDevOpsPage() {
  return (
    <Box>
      <EmpowerYourTeamWithSSD />
      <WhatIsSSD />
      <YourOneStopShop />
      <GetStartedWithSSD />
    </Box>
  );
}
