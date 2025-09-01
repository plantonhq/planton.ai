'use client';

import { FC, SyntheticEvent, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoP1 } from '../common';
import { StyledTab2, StyledTabs2 } from '../tabs';
import { Pill } from '@/components/landing-page';

export const EmpowerYourTeamWithSSD: FC = () => {
  const [tabValue, setTabValue] = useState('store');
  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <Stack className="relative overflow-hidden items-center bg-black p-5 pb-0 md:p-0 md:pt-24">
      <video
        src="/videos/gradial-round.mp4"
        className="scale-[1.3] absolute top-10 opacity-25 z-0"
        autoPlay
        muted
        loop
      />
      <Stack className="md:max-w-[1300px] items-center text-center gap-4 md:gap-8 z-10">
        <Pill>Self-Service DevOps</Pill>
        <TypoH2 className="max-w-[400px] md:max-w-[1200px]">
          Empower Your Team with Self-Service DevOps
        </TypoH2>
        <TypoP1 className="max-w-[400px] md:max-w-[900px] text-center text-text-secondary">
          PlantonCloud puts enterprise-grade Infrastructure as Code (IaC) and streamlined
          deployments at your fingertips. Save time, reduce complexity, and unleash true DevOps
          autonomy across your organization.
        </TypoP1>
        <Stack className="flex-row items-center gap-1 md:gap-2">
          <GetStartedBtn>Try Planton Cloud Now</GetStartedBtn>
          <BookDemoBtn className="bg-transparent">Book Demo</BookDemoBtn>
        </Stack>
        <Stack className="relative overflow-hidden items-center rounded-t-[42px] border-b border-[#3c3c3c] gap-5 px-4 md:px-10 pt-4 md:pt-5 bg-[#1e2228]/50 backdrop-blur-[8px]">
          <Box className="w-52 md:w-[750px] aspect-square absolute top-0 bg-gradient-to-b from-[#8a3391] to-[#434f9e] rounded-full blur-[60px] z-0" />

          <StyledTabs2
            onChange={handleChange}
            value={tabValue}
            TabIndicatorProps={{ style: { display: 'none' } }}
            className="z-10"
          >
            <StyledTab2 label="Store" value="store" />
            <StyledTab2 label="Registry" value="registry" />
          </StyledTabs2>
          <Box className="relative">
            {tabValue === 'registry' ? (
              <img src="/images/features/self-service-devops/bg-2.svg" />
            ) : (
              <img src="/images/features/self-service-devops/bg-1.svg" />
            )}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
