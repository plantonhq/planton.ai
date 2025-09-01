'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { GetStartedBtn, SquareBoxes, TypoH2, TypoP1 } from '@/components/common';
import { Pill } from '@/components/landing-page';

export const Deployments: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden px-5 md:px-0 py-14 md:py-48 bg-black">
      <Box className="absolute w-full md:max-w-[1800px] left-1/2 top-0 transform -translate-x-1/2 z-0">
        <SquareBoxes columns={12} rows={6} className="hidden md:flex" />
        <SquareBoxes columns={6} rows={7} className="md:hidden" />
      </Box>
      <Box className="w-[500px] md:w-[1200px] aspect-[1.71] absolute top-24 md:top-0 md:rotate-[30deg] mix-blend-lighten blur-[120px] z-0 bg-[radial-gradient(260%_326%_at_50%_55%,_rgba(5,_93,_255,_0.7)_0%,_rgba(5,_93,_255,_0.0792292)_12.2%,_rgba(5,_93,_255,_0)_100%)] " />
      <Stack className="w-full md:max-w-[1350px] items-center text-center gap-3 md:gap-8 z-10">
        <Pill>IaC Workflows</Pill>
        <TypoH2 className="mt-2 md:mt-0">
          Automate & Track Your Infrastructure with Confidence
        </TypoH2>
        <TypoP1 className="text-text-secondary">
          Infrastructure-as-Code is critical to modern DevOps. PlantonCloud’s IAC Workflows
          supercharge it with commit messages, version tracking, and real-time feedback—all from one
          platform.
        </TypoP1>
        <GetStartedBtn className="mt-2 md:mt-0">Get Started for Free</GetStartedBtn>
      </Stack>
    </Stack>
  );
};
