'use client';
import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const StreamlinedKubernetes2: FC = () => {
  return (
    <Stack className="items-center bg-[linear-gradient(180deg,_#1A1F3C_-23.75%,_#000000_45.19%)] md:bg-black p-5 md:p-0 md:pt-56 md:pb-12 relative overflow-hidden">
      <Box className="hidden md:block w-[1770px] aspect-square absolute top-0 left-1/2 transform -translate-x-[90%] -translate-y-[78%] rounded-full blur-[250px] bg-[linear-gradient(195deg,_rgba(107,_86,_162,_0.24)_-31.13%,_rgba(35,_13,_166,_0.24)_179.29%)]" />
      <Box className="hidden md:block w-[1160px] aspect-square z-0 absolute top-[21%] rounded-full blur-[200px] bg-[linear-gradient(216deg,_rgba(70,_170,_165,_0.58)_-1.74%,_rgba(107,_86,_162,_0.58)_53.46%,_rgba(35,_13,_166,_0.58)_117.61%)]" />
      <Box className="hidden md:block w-[1700px] aspect-square z-20 absolute top-[50%] rounded-full blur-[200px] bg-[linear-gradient(196deg,_rgba(107,_86,_162,_0.24)_-31.13%,_rgba(35,_13,_166,_0.24)_179.29%)]" />
      <Stack className="w-full md:max-w-7xl z-10">
        <Stack className="relative overflow-hidden py-6 px-3 md:p-16 gap-3 md:gap-6 items-center text-center bg-[#1E22283D] border border-[#3D3D3D] rounded-xl md:rounded-[42px] backdrop-blur-md">
          <Box className="w-[200px] md:w-[724px] aspect-square absolute top-20 md:top-0 z-0 rounded-full blur-[40px] md:blur-[80px] bg-[linear-gradient(308deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
          <TypoH2 className="z-10">Streamlined Kubernetes Access, All in One Place</TypoH2>
          <Typography className="z-10 text-sm font-normal md:text-2xl md:font-medium md:leading-[38px] text-gray-400">
            Simplify complex Kubernetes tasks with PlantonCloud’s centralized dashboard. Gain
            real-time insights, edit configurations on the fly, and quickly troubleshoot your
            apps—no extra tools or cluster-wide permissions needed. It’s the perfect blend of
            developer self-service and secure access control, helping your team innovate faster.
          </Typography>
          <img src="/images/landing-page/bg-7-small.svg" className="md:hidden w-full z-10" />
          <img src="/images/landing-page/bg-7.svg" className="hidden md:block w-full z-10" />
        </Stack>
      </Stack>
      <Stack className="w-full md:max-w-7xl items-center gap-5 md:gap-6 mt-5 md:mt-16 z-10">
        <TypoH3 className="">Resource Overview & Real-Time Insights</TypoH3>
        <TypoP1 className="!text-base !font-bold !leading-[1]">Why It Matters?</TypoP1>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative">
          <InnovationBox
            title="Instant Visibility"
            desc="See the state of each object at a glance."
            descClassName="text-text-secondary"
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_126%)]"
          />
          <InnovationBox
            title="Faster Collaboration: "
            desc="Share the same view with your team without granting full cluster access."
            descClassName="text-text-secondary"
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_126%)]"
          />
        </Box>
        <img src="/images/landing-page/bg-8-small.svg" className="md:hidden w-full" />
        <img src="/images/landing-page/bg-8.svg" className="hidden md:block w-full" />
      </Stack>
    </Stack>
  );
};
