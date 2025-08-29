import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const CostEffectiveSolutions: FC = () => {
  return (
    <Stack className="relative items-center bg-black pt-24">
      <Stack className="gap-8 items-center text-center">
        <TypoH2 className="max-w-[1100px]">Cost-Effective Solutions for Startups</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1330px]">
          Benefit from our free tier designed to suit the needs of most startups. Enjoy a
          pay-as-you-grow pricing model and apply for customized free plans, ensuring you only pay
          for the resources you use.
        </TypoP1>
        <Box className="w-full relative pt-3">
          <Box className="h-[800px] overflow-hidden">
            <img src="/images/solutions/by-size/startups/dashboard.svg" />
          </Box>
          <img
            src="/images/solutions/by-size/startups/transfer-money.svg"
            className="absolute bottom-0 right-0 transform translate-x-[35%] translate-y-[10%]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
