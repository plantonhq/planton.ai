import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const FullFeaturedCLI: FC = () => {
  return (
    <Stack className="relative items-center pb-28 bg-black">
      <img src="/images/apps-cli/bg-7.svg" className="opacity-80 z-10" />
      <video
        src="/videos/dots.mp4"
        className="absolute top-16 w-[1000px] z-0"
        autoPlay
        muted
        loop
      />
      <Stack className="max-w-[1330px] items-center gap-8 -mt-96 z-20">
        <TypoH2 className="text-center">Full-Featured CLI</TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Beyond the AI chat, Planton CLI offers complete command-line functionality mirroring all
          Planton Cloud features. Manage resources, configure deployments, and perform operations
          with familiar commands inspired by kubectl. The synergy between command-line control and
          AI assistance creates a seamless and powerful development experience.
        </TypoP1>
      </Stack>
    </Stack>
  );
};
