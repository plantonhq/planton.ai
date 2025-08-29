'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const WhatIsSSD: FC = () => {
  return (
    <Stack className="items-center bg-[linear-gradient(120deg,rgba(138,_51,_145,_0.16)_80%,_rgba(6,_5,_18,_0.16)_100%)] p-5 md:py-20 gap-2 md:gap-12">
      <Stack className="relative md:max-w-[1300px] items-center gap-2 md:gap-8 z-10">
        <TypoH2 className="text-center max-w-[500px] md:max-w-none">
          What is Self-Service DevOps?
        </TypoH2>
        <TypoP1 className="max-w-[450px] md:max-w-[1250px] text-center text-text-secondary">
          Self-Service DevOps accelerates cloud adoption by enabling teams to provision, configure,
          and manage infrastructure without bottlenecks. With PlantonCloud, developers get on-demand
          access to a curated set of deployment components and IaC modules—cutting down approval
          cycles, eliminating repetitive tasks, and allowing teams to focus on innovation.
        </TypoP1>
        <Box className="w-full grid grid-cols-12 gap-5 md:gap-x-14 md:gap-y-11 mt-4 md:mt-12">
          <InnovationBox
            title="Faster Provisioning"
            desc="Deploy new services with a few clicks instead of waiting for manual ticket approvals."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 !bg-[url('/')] bg-[#161B22]"
          />
          <InnovationBox
            title="Standardized Best Practices"
            desc="Use vetted components and modules maintained by PlantonCloud for security and consistency."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 !bg-[url('/')] bg-[#161B22]"
          />
          <InnovationBox
            title="Increased Developer Productivity"
            desc="Self-service access frees DevOps engineers from constant provisioning requests."
            descClassName="text-text-secondary"
            className="col-span-12 !bg-[url('/')] bg-[#161B22]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
