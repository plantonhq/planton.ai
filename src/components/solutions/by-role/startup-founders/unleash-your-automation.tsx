'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { StyledPlanton } from './styled';
import { StyledTeamBtn } from '../../by-size/growing-teams/styled';
import { TypoH2, TypoP1 } from '@/components/common';

export const UnleashYourAutomation: FC = () => {
  return (
    <Stack className="relative w-full items-center bg-[radial-gradient(29.58%_29.58%_at_49.04%_63.1%,_#00000000_0%,_#000000CC_100%)]">
      <Box className="w-full max-w-[1800px] relative overflow-hidden">
        <StyledPlanton className="absolute top-10 text-[900px] font-bold leading-[898px] tracking-[12px] z-0 opacity-30">
          PLANTON
        </StyledPlanton>
        <img src="/images/solutions/by-role/startup-founder/satelite.svg" className="-z-0" />
      </Box>

      <Stack className="w-full max-w-[1300px] absolute py-20 left-1/2 transform -translate-x-1/2 items-center text-center gap-8 z-10">
        <StyledTeamBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(91.09deg,_#B72EDEED_0.42%,_#00AAE5ED_98.32%)] bg-clip-text text-transparent">
            Startup Founders
          </Typography>
        </StyledTeamBtn>
        <TypoH2 className="max-w-[1200px]">From Idea to Market at Lightning Speed</TypoH2>
        <TypoP1 className="max-w-[730px] text-center text-text-secondary">
          Empower your team to innovate faster without DevOps overhead
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
            LinkComponent={Link}
            href="https://console.planton.cloud"
            target="_self"
          >
            Get Started Free
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
      </Stack>
    </Stack>
  );
};
