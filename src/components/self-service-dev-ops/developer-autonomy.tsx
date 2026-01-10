'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '../common';
import { StyledAiBtn } from '../plantora-ai/styled';

interface IDevOpsHomeBanner {
  className?: string;
}

export const DevOpsHomeBanner: FC<IDevOpsHomeBanner> = ({ className }) => {
  return (
    <Box className={`relative ${className}`}>
      <img src="/images/features/self-service-devops/home-main-1.svg" className="w-[900px]" />
      <img
        src="/images/features/self-service-devops/create-kc.svg"
        className="absolute -left-96 -top-16"
      />
      <img
        src="/images/features/self-service-devops/yaml.svg"
        className="absolute -left-80 -bottom-10"
      />
      <img
        src="/images/features/self-service-devops/resource-count.svg"
        className="absolute -right-80 top-20"
      />
    </Box>
  );
};

export const DeveloperAutonomy: FC = () => {
  return (
    <Stack className="items-center bg-black pt-24 pb-36 gap-12">
      <Stack className={`max-w-[1225px] items-center text-center gap-8`}>
        <StyledAiBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
            Self-Service DevOps
          </Typography>
        </StyledAiBtn>
        <TypoH2>Ship Faster, No DevOps Bottlenecks</TypoH2>
        <TypoP1 className={`max-w-[700px] text-center text-text-secondary`}>
          Empower developers to build, deploy, and scale instantly with AI-driven self-service
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            Try Planton Cloud Now
          </Button>
          <Button
            className="bg-transparent px-5 py-3 rounded-[10px] w-fit"
            LinkComponent={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
      </Stack>
      <DevOpsHomeBanner />
    </Stack>
  );
};
