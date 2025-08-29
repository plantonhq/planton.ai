import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const CostEfficientGrowth: FC = () => {
  return (
    <Stack className="w-full items-center pt-24 bg-black">
      <Stack className="relative gap-5 text-center max-w-[1600px]">
        <TypoH2 className="max-w-[1200px] z-10">Cost-Efficient Growth with Pay-as-You-Go Pricing</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1200px] z-10">
          Optimize your operational costs with our flexible pricing model. Start for free with
          features tailored for startups, and scale seamlessly as your business grows—without
          unexpected expenses.
        </TypoP1>
        <Stack className="w-full h-[550px] relative overflow-hidden px-14 pt-14 rounded-t-[52px] bg-[#1e2228]/25 border border-[#515151] backdrop-blur-[11px] z-10">
          <Box className="w-full h-full relative">
            <img
              src="/images/solutions/by-role/startup-founder/resource-explorer.svg"
              className="absolute bottom-0"
            />
          </Box>
        </Stack>
        <img
          src="/images/solutions/by-role/startup-founder/surface.svg"
          className="absolute top-28 left-1/2 transform -translate-x-1/2 -z-0"
        />
      </Stack>
    </Stack>
  );
};
