import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const SelfServiceDevOps: FC = () => {
  return (
    <Stack className="w-full items-center pb-24 bg-black">
      <Stack className="w-full relative max-w-[1500px] flex-row items-center gap-2 z-10">
        <Stack className="gap-8 max-w-[700px]">
          <TypoH2>Empower Your Developers with Self-Service DevOps</TypoH2>
          <TypoP1 className="text-text-secondary">
            Eliminate bottlenecks and accelerate development by giving your developers the tools
            they need to deploy applications autonomously. Planton Cloud&apos;s intuitive,
            AI-enabled platform lets your team manage infrastructure through conversational
            interfaces, freeing them to focus on delivering features.
          </TypoP1>
        </Stack>
        <Stack className="w-full h-[800px] relative overflow-hidden pt-14 pl-14 rounded-tl-[68px] bg-[#151617]/5 border border-[#3c3c3c] backdrop-blur-[43px]">
          <Box className="w-full h-full relative">
            <img src="/images/solutions/by-role/startup-founder/chatbox-1.svg" className="absolute left-0 top-0 " />
          </Box>
        </Stack>
        <img
          src="/images/solutions/by-role/startup-founder/zk24.svg"
          className="absolute h-full right-36 -top-14 -z-10"
        />
        <video
          src="/videos/dots.mp4"
          className="w-full absolute top-0 transform -translate-y-[calc(30%)] right-0 max-w-[1200px] opacity-10"
          autoPlay
          muted
          loop
        />
      </Stack>
    </Stack>
  );
};
