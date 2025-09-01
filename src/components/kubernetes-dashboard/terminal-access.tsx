'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components//common';
import { InnovationBox } from '@/components/solutions';

export const TerminalAccess: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center p-5 md:p-0 md:pt-20 md:pb-14 bg-black">
      <img
        src="/images/features/kubernetes-dashboard/bg-8.svg"
        className="hidden md:block absolute top-0 left-1/2 transform -translate-x-[150%] -translate-y-[22%] mix-blend-color-dodge z-10"
      />
      <img
        src="/images/features/kubernetes-dashboard/bg-7.svg"
        className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-[54%] translate-y-[30%] z-0"
      />
      <Box className="hidden md:block w-[500px] aspect-square absolute top-0 transform translate-y-[100%] -translate-x-[180%] rounded-full blur-[1200px] bg-[#ff3f00] z-0" />
      <Stack className="w-full items-center gap-3 md:gap-8 md:max-w-[1300px] z-20">
        <TypoH2 className="text-center md:max-w-[900px]">
          Terminal Access
          <br /> (Exec into Container)
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary md:max-w-[850px]">
          Get a shell inside any running container to troubleshoot or inspect your application on
          the fly.
        </TypoP1>
        <img src="/images/features/kubernetes-dashboard/bg-9.svg" className="md:mt-3" />
        <TypoH3 className="md:hidden text-center">Use Cases</TypoH3>
        <TypoH2 className="hidden md:block text-center mt-4">Use Cases</TypoH2>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 md:mt-4">
          <InnovationBox
            title="Quick Diagnostics"
            desc="Run common commands (ls, env, cat logs, etc.) to verify file structures, environment variables, or configurations."
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
          <InnovationBox
            title="No Extra Tooling"
            desc="No need for kubectl installed locally or cluster credentials—PlantonCloud handles it seamlessly."
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
