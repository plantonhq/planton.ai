'use client';

import { FC } from 'react';
import { Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '../../../common';
import { StyledTeamBtn } from './styled';

export const ScaleYourSuccess: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center pt-8 bg-black">
      <Stack className="max-w-[1550px] items-center text-center gap-5 z-10">
        <StyledTeamBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(91.09deg,_#B72EDEED_0.42%,_#00AAE5ED_98.32%)] bg-clip-text text-transparent">
            Solution - Growing Teams
          </Typography>
        </StyledTeamBtn>
        <TypoH2>Scale Your Success with AI-Powered Team Collaboration</TypoH2>
        <TypoP1 className={`max-w-[1300px] text-center text-text-secondary`}>
          Scale effortlessly with Planton Cloud&apos;s AI-powered DevOps platform designed for
          growing teams
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            Get Started
          </Button>
          <Button
            className="bg-transparent px-5 py-3 rounded-[10px] w-fit"
            LinkComponent={Link}
            href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
        <img src="/images/solutions/by-size/growing-teams/resource-explorer.svg" className="pt-3" />
      </Stack>
      <img
        src="/images/solutions/by-size/growing-teams/planet-surface.svg"
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
      />
    </Stack>
  );
};
