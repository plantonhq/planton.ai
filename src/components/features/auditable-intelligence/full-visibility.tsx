import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoP1 } from '@/components/common';
import { Pill } from '@/components/landing-page';

export const FullVisibility: FC = () => {
  return (
    <Stack className="relative items-center justify-center overflow-hidden bg-black px-5 py-10 xl:py-60">
      <img
        src="/images/features/auditable-intelligence/bg-1-small.svg"
        className="md:hidden absolute left-0 -top-16 -z-0"
      />
      <img
        src="/images/features/auditable-intelligence/bg-1.svg"
        className="hidden md:block absolute left-1/2 transform -translate-x-[65%] -top-36 -z-0"
      />
      <Box className="w-[400px] aspect-[1.30] absolute -bottom-40 left-1/2 transform -translate-x-[280%]  mix-blend-lighten bg-[#055cff] blur-[150px]" />
      <Stack className="w-full max-w-[400px] md:max-w-[1300px] items-center text-center gap-5 md:gap-8 z-10">
        <Pill>Auditable Intelligence</Pill>
        <TypoH2>Full-Visibility Change Tracking of your Cloud Resources</TypoH2>
        <TypoP1 className="text-center text-text-secondary -mt-2 md:mt-0">
          Track every resource modification—from creation to restoration—through detailed version
          history, automated commit messages, and real-time diff views.
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <GetStartedBtn>Get Started</GetStartedBtn>
          <BookDemoBtn>Book Demo</BookDemoBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
