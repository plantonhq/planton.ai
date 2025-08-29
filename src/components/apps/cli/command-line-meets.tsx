import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const CommandLineMeets: FC = () => {
  return (
    <Stack className="items-center pt-28 relative bg-[#020202]">
      <img src="/images/apps-cli/bg-3.svg" className="absolute top-0" />
      <Stack className="w-full max-w-[1530px] items-center text-center gap-7 z-10">
        <TypoH2 className={`max-w-[1070px]`}>Command Line Meets AI Intelligence</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1080px]">
          Welcome to Planton CLI – a revolutionary tool combining command-line efficiency with
          AI-powered chat. Simplify DevOps tasks through natural conversations in your terminal,
          blending full control with smart, streamlined execution.
        </TypoP1>
        <img src="/images/apps-cli/bg-2.svg" className="w-full backdrop-blur-xl" />
      </Stack>
    </Stack>
  );
};
