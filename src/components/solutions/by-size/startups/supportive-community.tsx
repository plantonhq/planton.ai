import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const SupportiveCommunity: FC = () => {
  return (
    <Stack className="items-center overflow-hidden bg-black py-60">
      <Stack className="relative w-full max-w-[2000px] items-center flex-row justify-end gap-12">
        <Stack className="relative gap-8 max-w-[850px]">
          <TypoH2 className="">Join a Supportive Community</TypoH2>
          <TypoP1 className="text-text-secondary">
            Access 24/7 support through our active Discord community. Collaborate with the Planton
            Cloud team and other developers to solve problems quickly and share best practices.
          </TypoP1>
        </Stack>
        <Box className="relative">
          <img src="/images/solutions/by-size/startups/bg-3.svg" className="rounded-full" />
          <img
            src="/images/solutions/by-size/startups/galaxy.svg"
            className="w-[450px] absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[40%] scale-105 z-20"
          />
          <img
            src="/images/solutions/by-size/startups/bg-3-blur.svg"
            className="absolute left-0 top-0 w-full aspect-square "
          />
        </Box>
      </Stack>
    </Stack>
  );
};
