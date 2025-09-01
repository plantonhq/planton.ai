'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { GetStartedBtn, TypoH2, TypoP1 } from '@/components/common';
import { Pill } from '@/components/landing-page';

export const StreamlinedKubernetesAccess: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <Box className="hidden md:flex w-[1600px] absolute top-24 left-1/2 transform -translate-x-[84%] rotate-[60deg] mix-blend-screen blur-[500px] flex-row justify-between z-0">
        <Box sx={{ borderRadius: '50%' }} className="w-[45%] aspect-square bg-[#9747ff]" />
        <Box sx={{ borderRadius: '50%' }} className="w-[45%] aspect-square bg-[#ff3f00]" />
      </Box>
      {/* <Box
        sx={{ borderRadius: '50%' }}
        className="hidden md:block w-[1650px] aspect-[0.97] absolute top-16 left-1/2 transform -translate-x-1/2 blur-[3px] z-10 bg-[linear-gradient(120deg,_rgba(138,_51,_145,_0.16)_10.55%,_rgba(6,_5,_18,_0.16)_74.21%)]"
      /> */}
      <Box
        sx={{ borderRadius: '50%' }}
        className="md:hidden w-[580px] aspect-square absolute -top-[100%] -left-[80%] blur-[500px] bg-[#9747ff]/50"
      />
      <Box
        sx={{ borderRadius: '50%' }}
        className="md:hidden w-[460px] aspect-square absolute -bottom-[50%] blur-[250px] rotate-[180deg] bg-gradient-to-t from-[#8a3391] to-[#060512]"
      />

      <Stack className="w-full md:h-[900px] items-center p-5 md:p-0 md:pt-48 z-20">
        <Stack className="items-center text-center gap-4 md:gap-8">
          <Pill>Kubernetes Dashboard</Pill>
          <TypoH2 className="md:max-w-[1350px]">
            Empower Your Team with Streamlined Kubernetes Access
          </TypoH2>
          <TypoP1 className="text-text-secondary md:max-w-[1250px] -mt-1 md:mt-0">
            Kubernetes can be complex—especially when developers lack direct cluster access.
            PlantonCloud’s Kubernetes Dashboard streamlines the workflow with a secure, centralized
            interface for viewing, editing, debugging, and managing resources—without granting
            everyone cluster-level permissions.
          </TypoP1>
          <GetStartedBtn>Get Started Now</GetStartedBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
