'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const KeyBenefits: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center p-5 md:p-0 md:py-36 bg-black">
      <Box
        sx={{ borderRadius: '50%' }}
        className="md:hidden w-[460px] aspect-square absolute -top-[16%] blur-[250px] rotate-[0deg] bg-gradient-to-t from-[#8a3391] to-[#060512]"
      />
      <img
        src="/images/features/planton-copilot/torus.png"
        className="md:hidden absolute top-0 left-0 transform translate-y-[50%] -translate-x-[50%] blur-[300px] z-20"
      />
      <img
        src="/images/features/kubernetes-dashboard/bg-1.svg"
        className="hidden md:block absolute top-0 transform -translate-y-[25%] -translate-x-[20%] z-0"
      />
      
      <Box
        sx={{ borderRadius: '50%' }}
        className="hidden md:block w-[1650px] aspect-[0.97] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[3px] z-10 bg-[linear-gradient(0deg,_rgba(138,_51,_145,_0.16)_10.55%,_rgba(6,_5,_18,_0.16)_74.21%)]"
      />
      <Stack className="w-full md:max-w-[1400px] items-center z-10">
        <TypoH2 className="text-center">Key Benefits</TypoH2>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-20">
          <InnovationBox
            title="Accelerated Debugging & Collaboration"
            desc="Empower developers to view logs and troubleshoot issues instantly, eliminating the need to route every request through DevOps."
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
          <InnovationBox
            title="Centralized Access Control"
            desc="Grant fine-grained “read” or “edit” access to specific team members, resources, or environments—right within PlantonCloud"
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
          <InnovationBox
            title="Real-Time Cluster Insights"
            desc="Get an at-a-glance view of all the Kubernetes objects tied to your application or microservice, including pods, services, and more"
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
          <InnovationBox
            title="Single Source of Truth"
            desc="All your Kubernetes configurations, logs, and resource statuses are accessible through one platform. No context-switching required."
            descClassName="text-text-secondary"
            className="bg-[#161b22]"
          />
        </Box>
        <TypoH2 className="text-center mt-10 md:mt-64 md:max-w-[1000px]">
          Resource Explorer at a Glance
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary mt-4 md:mt-8">
          Access your organization’s Kubernetes resources right from the PlantonCloud interface. See
          a real-time list of all Kubernetes objects associated with a particular resource (such as
          a Redis instance).
        </TypoP1>
        <img src="/images/features/kubernetes-dashboard/bg-2.svg" className="mt-4 md:mt-16" />
        <TypoH2 className="text-center mt-4 md:mt-9">What This Looks Like?</TypoH2>
        <Box className="w-full grid grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-8">
          <InnovationBox
            title=""
            desc="Access details with a single click."
            descClassName="text-text-secondary"
            className="col-span-12 justify-center !bg-[linear-gradient(38.02deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
          />
          <InnovationBox
            title=""
            desc="Easily identify each resource by Kind (e.g., Pod, Service) and Name."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 justify-center !bg-[linear-gradient(38.02deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
          />
          <InnovationBox
            title=""
            desc="A clean list of resources (like Deployments, Services, Pods, Endpoints, etc.)"
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 justify-center !bg-[linear-gradient(38.02deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
