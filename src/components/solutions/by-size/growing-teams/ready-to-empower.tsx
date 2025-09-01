'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const ReadyToEmpower: FC = () => {
  return (
    <Stack className="items-center relative bg-black pt-24">
      <Stack className="gap-8 items-center text-center">
        <TypoH2 className="max-w-[1050px]">Ready to Empower Your Growing Team?</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1350px]">
          Unlock your team&apos;s full potential with Planton Cloud&apos;s collaborative and
          scalable DevOps platform. Enhance productivity, security, and innovation across your
          expanding organization.
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
            LinkComponent={Link}
            href="https://console.planton.cloud"
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
        <Box className="w-full max-w-[1500px] h-[800px] relative overflow-hidden">
          <img src="/images/solutions/by-size/growing-teams/firefly.svg" className="w-full absolute top-0" />
          <img
            src="/images/solutions/by-size/growing-teams/planton.svg"
            className="w-[90px] h-[100px] absolute left-1/2 transform -translate-x-1/2 top-48 opacity-60"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
