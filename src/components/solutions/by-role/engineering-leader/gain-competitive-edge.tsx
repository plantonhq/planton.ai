import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const GainCompetitiveEdge: FC = () => {
  return (
    <Stack className="relative items-center pt-40 bg-[#00000066] ">
      <img src="/images/solutions/by-role/engineering-leader/bg-10.svg" className="absolute top-0" />
      <Box className="w-[642px] aspect-square absolute right-1/2 top-0 transform translate-x-[100%] translate-y-[50%] mix-blend-screen opacity-60 blur-[200px] z-0 bg-gradient-to-b from-[#990d64] to-[#c20700] rounded-full" />
      <Stack className="w-full max-w-[1950px] items-end z-10">
        <Stack className="w-fit flex-row gap-12">
          <Stack className="gap-4 max-w-[750px] pt-40">
            <TypoH2>Gain Competitive Edge with Faster Innovation</TypoH2>
            <TypoP1 className="text-text-secondary">
              Stay ahead of the competition by enabling rapid innovation cycles. Planton
              Cloud&apos;s streamlined workflows and AI assistance reduce time spent on operational
              tasks, allowing your teams to focus on developing new features and improving products.
              Engineering leaders can drive their teams to deliver more value in less time.
            </TypoP1>
          </Stack>
          <img src="/images/solutions/by-role/engineering-leader/chat-box.svg" className="backdrop-blur-[20px]" />
        </Stack>
      </Stack>
    </Stack>
  );
};
