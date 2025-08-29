import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const LimitedResources: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center pt-24 bg-black">
      <Box className="w-[1920px] h-[193px] absolute top-0 bg-[linear-gradient(187.72deg,_#4D0D2E_6.26%,_#0B051F00_85.06%)]" />
      <Stack className="relative gap-8 items-center text-center max-w-[1450px] z-10">
        <TypoH2>The Startup Challenge:</TypoH2>
        <TypoH2>Limited Resources, High Ambitions</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1400px]">
          Startups often grapple with tight budgets and small teams while aiming to deliver
          innovative products rapidly. Hiring dedicated DevOps engineers may not be feasible,
          leading to slower deployments and delayed market entry.
        </TypoP1>
        <Box className="relative w-[1068px] h-[900px] overflow-hidden">
          <img src="/images/solutions/by-size/startups/bg-2.svg" className="" />
        </Box>
        <img
          src="/images/solutions/by-size/startups/bg-sticker-1.svg"
          className="absolute top-0 left-0 transform -translate-x-[75%] translate-y-[25%]"
        />
        <img
          src="/images/solutions/by-size/startups/bg-sticker-2.svg"
          className="absolute bottom-0 left-0 transform -translate-x-[45%] translate-y-[5%]"
        />
        <img
          src="/images/solutions/by-size/startups/bg-sticker-3.svg"
          className="absolute bottom-0 right-1/2 transform translate-x-[110%] translate-y-[30%]"
        />
        <img
          src="/images/solutions/by-size/startups/bg-sticker-4.svg"
          className="absolute top-0 left-1/2 transform -translate-x-[240%] translate-y-[280%]"
        />
        <img
          src="/images/solutions/by-size/startups/bg-sticker-5.svg"
          className="absolute top-1/2 right-0 transform translate-x-[40%]"
        />
        <img
          src="/images/solutions/by-size/startups/bg-sticker-4.svg"
          className="absolute top-0 right-0 transform translate-x-[50%] translate-y-[150%]"
        />
      </Stack>
    </Stack>
  );
};
