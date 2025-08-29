'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../../common';

// common section used in chat ops, internal developer platform pages
export const GetStarted: FC = () => {
  return (
    <Stack className="items-center relative overflow-hidden gap-12 py-28 bg-[#010101]">
      <Box className="w-[3000px] aspect-square absolute left-1/2 top-20 transform -translate-x-1/2  origin-center rotate-[225deg] rounded-[32px] border-4 border-[#03a587] blur-3xl bg-[linear-gradient(135deg,_#040229_69.4%,_#4639C4_83.96%,_#0A6C52_100%)]" />
      <Stack className="gap-11 items-center text-center max-w-[1250px] z-10">
        <TypoH2>Get Started with Planton Cloud ChatOps Today</TypoH2>
        <TypoP1 className={`text-text-secondary`}>
          Ready to transform your DevOps experience? Embrace the future with Planton Cloud&apos;s
          AI-powered ChatOps solution. Join the growing community of innovators who are streamlining
          their workflows and enhancing collaboration with Plantora.
        </TypoP1>
        <Button
          className="px-5 py-2 w-fit bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
          LinkComponent={Link}
          href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
          target="_self"
        >
          Book Demo
        </Button>
        <img src="/images/solutions/by-size/chat-ops/meeting.svg" />
      </Stack>
    </Stack>
  );
};
