'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack } from '@mui/material';
import { TypoH3 } from '../common';

export const ReadyToTry: FC = () => {
  return (
    <Stack className="bg-black items-center">
      <Box className="relative overflow-hidden w-full max-w-[1920px] px-14 py-8 bg-[linear-gradient(132.98deg,#0F0E97_-23.75%,#310642_30.1%,#010104_97.94%)]">
        <img
          className="absolute w-[350px] aspect-square origin-top-left rotate-45 -top-24 left-0 -z-0 opacity-25"
          src="/images/pricing/rocket.gif"
        />
        <img
          className="absolute w-[400px] aspect-square origin-bottom rotate-[60deg] -bottom-14 right-36 -z-0 opacity-25"
          src="/images/pricing/rocket.gif"
        />
        <Stack className="gap-8">
          <TypoH3>Ready to try Planton Cloud?</TypoH3>
          <Button
            className="h-[35px] w-fit px-4 py-2.5 border border-white bg-[#03a587]/0 rounded-[32px] text-white text-xs font-medium"
            LinkComponent={Link}
            href="https://console.planton.cloud"
            target="_self"
          >
            Get Started
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};
