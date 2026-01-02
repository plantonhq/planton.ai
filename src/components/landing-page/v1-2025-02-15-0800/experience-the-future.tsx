'use client';
import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoH3, TypoP1 } from '@/components/common';

export const ExperienceTheFuture: FC = () => {
  return (
    <Stack className="items-center bg-black px-5 md:px-0 py-16 md:py-28 relative overflow-hidden">
      <img
        src="/images/landing-page/bg-12-small.svg"
        className="md:hidden absolute top-0 right-0"
      />
      <img
        src="/images/landing-page/bg-12.svg"
        className="hidden md:block absolute -bottom-[45%] right-1/2 transform translate-x-[55%]"
      />
      <Stack className="w-full max-w-[1920px] relative overflow-hidden">
        <Box className="max-w-7xl mx-auto">
          <Box className="text-center">
            <TypoH3 className="md:hidden">Experience the Future of DevOps Today</TypoH3>
            <TypoH2 className="hidden md:block">Experience the Future of DevOps Today</TypoH2>
            <TypoP1 className="text-gray-400 text-xs leading-[2.1] mt-2 md:mt-11">
              Planton Cloud transforms DevOps workflows through AI-powered conversational
              interfaces, empowering teams to innovate faster, collaborate more effectively, and
              maintain robust security across all operations.
            </TypoP1>
          </Box>
          <Box className="flex items-center justify-center gap-4 mt-4 md:mt-16">
            <GetStartedBtn>Get Started for Free</GetStartedBtn>
            <BookDemoBtn>Book Demo</BookDemoBtn>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
