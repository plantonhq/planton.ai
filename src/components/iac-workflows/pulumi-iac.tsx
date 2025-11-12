'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { SquareBoxes, TypoH2, TypoP1 } from '../common';
import { StyledAiBtn } from '../plantora-ai/styled';

export const PulumiIaC: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden py-28 bg-black">
      <Box className="absolute w-full max-w-[1800px] left-1/2 top-0 transform -translate-x-1/2 z-0">
        <SquareBoxes columns={12} rows={6} />
      </Box>
      <Stack className="relative w-full max-w-[1400px]">
        <Stack className="flex-row items-center">
          <Stack className="gap-8 max-w-[750px]">
            <StyledAiBtn>
              <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
                IaC Workflows
              </Typography>
            </StyledAiBtn>
            <TypoH2 className="max-w-[550px]">Deployments with Pulumi IaC</TypoH2>
            <TypoP1 className="text-text-secondary">
              Automate, streamline, and scale your multi-cloud deployments effortlessly with Planton
              Cloud&apos;s integrated Infrastructure-as-Code CI/CD pipeline.
            </TypoP1>
            <Button
              className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit"
              LinkComponent={Link}
              href="https://console.planton.ai"
              target="_self"
            >
              Get Started for Free
            </Button>
          </Stack>
          <Box className="relative -ml-20">
            <img src="/images/features/iac-workflows/settings.svg" className="relative z-10" />
            <Box className="w-[400px] aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten bg-[#055cff] blur-[216px] opacity-60 z-10" />
          </Box>
        </Stack>
        <img
          src="/images/features/iac-workflows/frame-1.svg"
          className="w-[450px] absolute top-0 right-0 transform translate-x-[30%] translate-y-[30%] z-20"
        />
        <img
          src="/images/features/iac-workflows/frame-2.svg"
          className="w-[650px] absolute top-0 right-0 transform translate-x-[20%] translate-y-[90%] z-0"
        />
        <img
          src="/images/features/iac-workflows/frame-3.svg"
          className="w-[450px] absolute top-0 right-0 transform translate-x-[55%] translate-y-[260%]"
        />
        <img
          src="/images/features/iac-workflows/frame-4.svg"
          className="w-[650px] absolute top-0 right-0 transform translate-x-[0%] translate-y-[240%] z-10"
        />
        <img
          src="/images/features/iac-workflows/frame-5.svg"
          className="w-[650px] absolute top-0 right-0 transform translate-x-[20%] translate-y-[390%] -z-0"
        />
      </Stack>
    </Stack>
  );
};
