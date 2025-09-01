'use client';

import { FC, ImgHTMLAttributes } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '../../../common';
import { StyledAiBtn } from '@/components/plantora-ai/styled';

const RobotImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/chat-ops/robot.svg"
    className={`absolute top-0 right-0 transform translate-x-1/2 ${className}`}
    {...props}
  />
);

export const ReimagineDevOps: FC = () => {
  return (
    <Stack className="relative items-center bg-[linear-gradient(0.01deg,_#000000_24.66%,_#000000_96.9%)]">
      <Stack className="relative w-full max-w-[1800px] mt-12">
        <img src="/images/solutions/by-size/chat-ops/dashboard.svg" className="self-end opacity-30" />
        <Stack className="w-full max-w-[1500px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 items-center flex-row gap-16 justify-between">
          <Stack className="max-w-[650px] gap-8 z-10">
            <StyledAiBtn>
              <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
                Chat-Ops
              </Typography>
            </StyledAiBtn>
            <TypoH2>Reimagine DevOps with AI and ChatOps</TypoH2>
            <TypoP1 className={`text-text-secondary`}>
              Experience a new era of efficiency and collaboration with Planton Cloud&apos;s
              AI-driven ChatOps solution. Plantora empowers your team to manage deployments,
              configurations, and operations directly through conversational interfaces,
              streamlining workflows and accelerating development cycles.
            </TypoP1>
            <Stack className="flex-row items-center gap-2">
              <Button
                className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
                LinkComponent={Link}
                href="https://console.planton.cloud"
                target="_self"
              >
                Get Started with Planton Cloud ChatOps
              </Button>
            </Stack>
          </Stack>
          <Box className="relative">
            <img src="/images/solutions/by-size/chat-ops/chatbox-1.svg" />
            <RobotImg className="z-10" />
            <RobotImg className="blur-3xl z-0" />
          </Box>
        </Stack>
        <Box className="w-[868px] aspect-square absolute left-1/2 transform -translate-x-[60%] bg-[#3772b3]/60 rounded-full blur-[1100px]" />
      </Stack>
      <Box className="w-[1924px] h-[241px] absolute bottom-0 transform translate-y-[30%] blur-3xl bg-[linear-gradient(360deg,_#000000_24.66%,_#000000_92.01%)]" />
    </Stack>
  );
};
