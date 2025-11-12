'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '../common';
import { StyledAiBtn } from '../plantora-ai/styled';

export const SecureAndSimplified: FC = () => {
  return (
    <Box className="relative overflow-hidden">
      <Box className="absolute w-[1800px] aspect-[2.19] -top-[400px] left-[calc(50%-800px)] origin-top-left rotate-[60deg] mix-blend-screen blur-[950px] justify-center items-start gap-[200px] inline-flex opacity-50 ">
        <Box className="w-1/2 aspect-square bg-[#9747ff] rounded-full" />
        <Box className="w-1/2 aspect-square bg-[#ff3f00] rounded-full" />
      </Box>
      <Box className="absolute w-[1800px] aspect-[1.06] left-[calc(50%-150px)] top-96 bg-[#020100] rounded-full blur-[900px] z-10" />
      <img
        src="/images/features/kubernetes-dashboard/glass-triangle.svg"
        className="absolute w-[350px] bottom-0 left-[calc(50%-800px)] aspect-square rotate-[0deg] mix-blend-color-dodge z-10"
      />
      <Stack className="items-center bg-black pt-12">
        <Stack className="items-center text-center gap-8 ">
          <StyledAiBtn>
            <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
              Kubernetes Dashboard
            </Typography>
          </StyledAiBtn>
          <TypoH2 className="max-w-[950px]">Secure and Simplified Kubernetes Access</TypoH2>
          <Box className="max-w-[750px]">
            <TypoP1 className="text-text-secondary">
              Streamline your Day 2 Operations and accelerate development with Planton Cloud.
            </TypoP1>
          </Box>
          <Stack className="flex-row items-center gap-2">
            <Button
              className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit"
              LinkComponent={Link}
              href="https://console.planton.ai"
              target="_self"
            >
              Get Started for Free
            </Button>
          </Stack>
          <img src={'/images/features/kubernetes-dashboard/stack-job-details.svg'} className="z-10" />
        </Stack>
      </Stack>
      <Stack className="relative overflow-hidden items-center bg-[linear-gradient(290.22deg,#180B23_24.16%,#230A06_99.66%)] py-16">
        <Stack className="items-center text-center gap-6 z-20">
          <Typography className="text-[40px] font-semibold leading-[48px]">
            Operational Challenges
          </Typography>
          <TypoP1 className="max-w-[1220px] text-text-secondary">
            When applications move from local development to Kubernetes clusters, unexpected
            behaviors can arise. Accessing logs, environment variables, and configurations becomes a
            hurdle without the right tools. Planton Cloud addresses these pain points head-on.
          </TypoP1>
          <img src={'/images/features/kubernetes-dashboard/kubernetes.svg'} />
          <img
            src={'/images/features/kubernetes-dashboard/challenges.gif'}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          />
          <img
            src={'/images/features/kubernetes-dashboard/k8-icon.svg'}
            className="absolute left-[calc(50%-310px)] bottom-80 w-[50px] blur-[2px]"
          />
          <img
            src={'/images/features/kubernetes-dashboard/k8-icon.svg'}
            className="absolute left-[calc(50%+180px)] bottom-72 w-[80px]"
          />
          <img
            src={'/images/features/kubernetes-dashboard/k8-icon.svg'}
            className="absolute left-[calc(50%+100px)] -bottom-6 rotate-12 w-[100px] blur-[2px]"
          />
          <img
            src={'/images/features/kubernetes-dashboard/k8-icon.svg'}
            className="absolute left-[calc(50%-180px)] bottom-9 w-[60px]"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
