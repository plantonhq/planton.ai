'use client';

import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { TypoH2 } from '@/components/common';
import { StyledAiBtn } from '@/components/plantora-ai/styled';
import { Plans } from '@/components/pricing/plans';

export const PlansForEveryStage: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center justify-center bg-black min-h-[900px]">
      <img
        src="/images/pricing/bg-1.svg"
        className="h-full w-full absolute left-1/2 transform -translate-x-1/2 top-24 scale-150"
      />
      <Stack className="items-center gap-9 z-10 pt-20">
        <StyledAiBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
            Pricing
          </Typography>
        </StyledAiBtn>
        <TypoH2 className="max-w-[1050px] text-center">
          Plans for Every Stage of Your Journey
        </TypoH2>
        <Plans />
      </Stack>
    </Stack>
  );
};
