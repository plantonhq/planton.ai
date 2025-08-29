'use client';

import { FC } from 'react';
import { Button, Link, Stack } from '@mui/material';
import { TypoH2 } from '../common';

export const DevOpsBottlenecks: FC = () => {
  return (
    <Stack className="py-12 bg-[#161A1F] items-center">
      <Stack
        className={`w-full max-w-[1200px] h-[380px] rounded-3xl items-center justify-center text-center bg-[url(/images/features/planton-copilot/frame-1.svg)] bg-cover bg-center`}
      >
        <Stack className="gap-6 items-center">
          <TypoH2 className="max-w-[930px]">Break Free from DevOps Bottlenecks</TypoH2>
          <Stack className="flex-row gap-3 items-center">
            <Button
              className="px-5 py-3 bg-white text-black font-medium h-[40px] rounded-[10px]"
              LinkComponent={Link}
              href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
              target="_self"
            >
              Book Demo
            </Button>
            <Button variant="text" className="px-5 py-3 font-medium">
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
