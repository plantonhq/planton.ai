'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoH3, TypoP1 } from '@/components/common';

export const GetStartedWithSSD: FC = () => {
  return (
    <Stack className="relative w-full items-center bg-[radial-gradient(34.31%_34.31%_at_50%_50%,_#000000_0%,_#000000_100%)]">
      <video
        src="/videos/waves.mp4"
        className="h-[350px] md:h-auto w-full md:max-w-[1920px] object-cover opacity-55 -z-0"
        autoPlay
        muted
        loop
      />
      <Stack className="w-full md:max-w-[1300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center text-center gap-5 z-10">
        <TypoH3 className="md:hidden text-center">
          Get Started with Self-Service DevOps Today
        </TypoH3>
        <TypoH2 className="hidden md:block text-center md:max-w-[860px]">
          Get Started with Self-Service DevOps Today
        </TypoH2>
        <TypoP1 className="leading-[2] text-center text-text-secondary">
          Ready to empower your development teams and streamline cloud deployments?
          <br /> Sign up for a demo or contact our experts to learn how PlantonCloud can transform
          your DevOps workflows.
        </TypoP1>
        <Stack className="flex-row items-center gap-1 md:gap-2">
          <GetStartedBtn>Get Started Now</GetStartedBtn>
          <BookDemoBtn>Book Demo</BookDemoBtn>
        </Stack>
      </Stack>
      <Box className="hidden md:block w-[528px] aspect-square absolute left-1/2 bottom-10 transform -translate-x-1/2 bg-gradient-to-b from-[#6c1cb3] to-[#0e065f] rounded-full blur-[200px] z-0" />
    </Stack>
  );
};
