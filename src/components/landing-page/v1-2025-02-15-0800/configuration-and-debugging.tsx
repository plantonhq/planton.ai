'use client';
import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const ConfigurationAndDebugging: FC = () => {
  return (
    <Stack className="items-center bg-black px-5 md:px-0 md:pt-12 md:pb-16 relative overflow-hidden">
      <Stack className="w-full max-w-7xl items-center gap-5 md:gap-8 z-10">
        <TypoH3>In-Depth Configuration & Debugging</TypoH3>
        <TypoH3 className="md:hidden">Key Value:</TypoH3>
        <TypoP1 className="hidden md:block">Key Value:</TypoP1>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative">
          <InnovationBox
            title="Editable YAML"
            desc="Tweak ports, environment variables, or labels in seconds."
            descClassName="text-text-secondary"
            className="bg-[#161B22]"
          />
          <InnovationBox
            title="Quick Diagnosis"
            desc="Spot pending pods or resource issues without juggling command-line tools."
            descClassName="text-text-secondary"
            className="bg-[#161B22]"
          />
        </Box>
        <img src="/images/landing-page/bg-9-small.svg" className="md:hidden w-full" />
        <img src="/images/landing-page/bg-9.svg" className="hidden md:block w-full" />
        <img src="/images/landing-page/bg-10.svg" className="w-full" />
        <TypoH3 className="md:mt-20">On-Demand Log Streaming & Terminal Access</TypoH3>
        <TypoH3 className="md:hidden">Main Benefits:</TypoH3>
        <TypoP1 className="hidden md:block">Main Benefits:</TypoP1>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative">
          <InnovationBox
            title="Live Debugging"
            desc="Watch logs as they update, catch errors instantly."
            descClassName="text-text-secondary"
            className="bg-[#161B22]"
          />
          <InnovationBox
            title="Shell in a Click"
            desc="Execute commands or inspect files inside a container—no separate tools needed."
            descClassName="text-text-secondary"
            className="bg-[#161B22]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
