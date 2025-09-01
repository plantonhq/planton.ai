import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const CredentialManagement: FC = () => {
  return (
    <Stack className="relative items-center py-32 bg-black">
      <Stack className="flex-row w-[1800px] gap-6 relative items-center justify-end z-10">
        <Stack className="gap-4 items-center max-w-[710px] z-10">
          <TypoH3>Secure and Flexible Credential Management</TypoH3>
          <TypoP1 className="text-text-secondary">
            Manage provider credentials and Pulumi state backends securely. Configure credentials at
            various levels and integrate with your preferred state storage solutions, ensuring your
            deployments are both secure and compliant.
          </TypoP1>
        </Stack>
        <img src="/images/features/iac-workflows/pulumi-module-registry-3.svg" className="z-10" />
      </Stack>
      <Box className="w-[1200px] aspect-[1.10] absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-[110%] rounded-full blur-3xl bg-[linear-gradient(91.52deg,_#000000_58.27%,_#646464_229.43%,_#666666_233.56%)]" />
    </Stack>
  );
};
