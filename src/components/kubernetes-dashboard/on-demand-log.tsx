'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const OnDemandLog: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center p-5 md:p-0 md:pt-20 md:pb-14 bg-black">
      <img
        src="/images/features/planton-copilot/torus.png"
        className="md:hidden w-[300px] absolute bottom-0 left-0 transform -translate-y-[60%] -translate-x-[40%] blur-[100px] z-0"
      />
      <img
        src="/images/features/kubernetes-dashboard/bg-7.svg"
        className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-[54%] translate-y-1/2"
      />
      <Stack className="w-full items-center gap-4 md:gap-8 md:max-w-[1300px] z-10">
        <TypoH2 className="text-center md:max-w-[650px]">On-Demand Log Streaming</TypoH2>
        <TypoP1 className="text-center text-text-secondary md:max-w-[800px]">
          View pod logs in real-time, all within PlantonCloud—no separate tools or SSH connections
          needed.
        </TypoP1>
        <img src="/images/features/kubernetes-dashboard/bg-6.svg" className="md:mt-3" />
        <TypoH3 className="text-center md:hidden">How It Helps?</TypoH3>
        <TypoH2 className="hidden md:block text-center mt-4">How It Helps?</TypoH2>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:mt-4">
          <InnovationBox
            title="Swift Debugging"
            desc="Stay on top of new log entries and spot errors or exceptions fast."
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
          <InnovationBox
            title="Developer-Friendly"
            desc="No complicated setups; just click and stream logs."
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
