import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const SecureAccess: FC = () => {
  return (
    <Stack className="relative items-center bg-black pt-24">
      <img
        src="/images/solutions/by-size/growing-teams/lock-1.svg"
        className="absolute top-10 left-[calc(50%-720px)] transform -translate-y-1/2 -translate-x-1/2 w-[240px] aspect-square"
      />
      <Stack className="gap-8 text-center max-w-[1380px]">
        <TypoH2 className="">Secure Access with Fine-Grained Control Powered by Zanzibar</TypoH2>
        <TypoP1 className="text-text-secondary">
          Protect your resources with Planton Cloud&apos;s advanced IAM system, powered by Zanzibar—the
          technology behind Google&apos;s robust access management. Implement fine-grained access control
          down to individual resources, ensuring the right people have appropriate access. Simplify
          permission management while enhancing security as your team expands.
        </TypoP1>
        <Box className="w-full h-[680px] relative pt-3">
          <Box className="h-full absolute top-0 overflow-hidden z-10">
            <img src="/images/solutions/by-size/growing-teams/dashboard.svg" />
          </Box>
          <Box className="absolute -top-28 right-1/4 w-[254px] aspect-square">
            <img
              src="/images/solutions/by-size/growing-teams/lock-1.svg"
              className="blur-sm transform translate-x-[25%] "
            />
          </Box>
          <img
            src="/images/solutions/by-size/growing-teams/lock-2.svg"
            className="absolute bottom-0 left-0 transofm -translate-x-1/2 w-[244px] aspect-square z-20"
          />
          <Box className="absolute bottom-0 right-0 w-[254px] aspect-square z-20">
            <img
              src="/images/solutions/by-size/growing-teams/lock-1.svg"
              className="blur-sm transform translate-x-[25%] translate-y-[25%]"
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
