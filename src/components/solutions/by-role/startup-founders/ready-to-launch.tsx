'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const ReadyToLaunch: FC = () => {
  return (
    <Stack className="relative w-full items-center bg-[radial-gradient(34.31%_34.31%_at_50%_50%,_#000000_0%,_#000000_100%)]">
      <video
        src="/videos/waves.mp4"
        className="w-full max-w-[1920px] object-cover opacity-55 -z-0"
        autoPlay
        muted
        loop
      />
      <Stack className="w-full max-w-[1300px] absolute py-16 left-1/2 transform -translate-x-1/2 translate-y-1/2 items-center text-center gap-5 z-10">
        <TypoH2 className="max-w-[1200px]">Ready to Launch Your Startup into the Future?</TypoH2>
        <TypoP1 className="max-w-[1300px] text-center text-text-secondary">
          Transform your development process with Planton Cloud. Accelerate your time to market,
          reduce costs, and focus on what matters—building an amazing product.
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
            LinkComponent={Link}
            href="https://console.planton.ai"
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
      <Box className="w-[528px] aspect-square absolute left-1/2 bottom-10 transform -translate-x-1/2 bg-gradient-to-b from-[#6c1cb3] to-[#0e065f] rounded-full blur-[150px] z-0" />
    </Stack>
  );
};
