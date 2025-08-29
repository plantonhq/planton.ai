'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const InDepthYAML: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center px-5 md:px-0 md:py-14 bg-[radial-gradient(129.01%_59.18%_at_50%_50%,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0.6)_100%)]">
      <img src="/images/features/kubernetes-dashboard/bg-3.svg" className="absolute top-0 z-0" />
      <Stack className="w-full md:max-w-[1300px] items-center z-10">
        <Stack className="items-center gap-4 md:gap-8 ">
          <TypoH2 className="text-center">In-Depth YAML & Describe Views</TypoH2>
          <TypoP1 className="text-text-secondary md:max-w-[1150px]">
            Dive into the exact configuration of any Kubernetes resource:
          </TypoP1>
          <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InnovationBox
              title="YAML View"
              desc="Inspect the raw YAML configuration that Kubernetes uses, and even edit it right from your browser."
              descClassName="text-text-secondary"
              className="bg-[#161b22]"
            />
            <InnovationBox
              title="Describe View"
              desc="Quickly see the typical Kubernetes “describe” output for more insights into resource status and events."
              descClassName="text-text-secondary"
              className="bg-[#161b22]"
            />
          </Box>
          <img
            src="/images/features/kubernetes-dashboard/bg-4-small.svg"
            className="w-full md:hidden"
          />
          <img
            src="/images/features/kubernetes-dashboard/bg-4.svg"
            className="hidden md:block mt-3"
          />
          <img
            src="/images/features/kubernetes-dashboard/bg-5-small.svg"
            className="w-full md:hidden"
          />
          <img
            src="/images/features/kubernetes-dashboard/bg-5.svg"
            className="hidden md:block mt-3"
          />
          <TypoH3 className="text-center md:hidden">Why It Matters?</TypoH3>
          <TypoH2 className="hidden md:block text-center mt-3">Why It Matters?</TypoH2>
          <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InnovationBox
              title="Immediate Edits"
              desc="Update a service port or tweak environment variables directly from PlantonCloud, then save back to the cluster."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Troubleshooting"
              desc="The “describe” output helps pinpoint issues like pending pods, events, or resource usage anomalies."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
