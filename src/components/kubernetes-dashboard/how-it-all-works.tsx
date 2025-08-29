'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const HowItAllWorks: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-[linear-gradient(180deg,_#1CAB98_-82.69%,_#000000_15.48%)]">
      <img
        src="/images/features/kubernetes-dashboard/bg-10-small.svg"
        className="md:hidden absolute top-1/2 left-0 transform -translate-y-[60%] z-0"
      />
      <img
        src="/images/features/kubernetes-dashboard/bg-10.svg"
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-[225%] -translate-y-[45%] z-0"
      />
      <Stack className="w-full items-center p-5 md:p-0 md:py-24 gap-5 md:gap-11 md:max-w-[1300px] z-10">
        <TypoH2 className="text-center">How It All Works?</TypoH2>
        <Box className="w-full grid grid-cols-12 gap-5 md:gap-6 md:mt-4">
          <InnovationBox
            title="Inspect & Edit"
            desc="Need to update a config map or add a port? Switch to YAML view, make your edits, and click Save."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 bg-[#161b22]"
          />
          <InnovationBox
            title="Debug on the Fly"
            desc="Check logs, describe resources, or even open a terminal session inside a running pod to investigate issues."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 bg-[#161b22]"
          />
          <InnovationBox
            title="Single Click Access"
            desc="From your Resource Explorer, click the Kubernetes icon to open the dashboard for a specific resource."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 bg-[#161b22]"
          />
          <InnovationBox
            title="View All Related Objects"
            desc="Instantly see everything that’s actually deployed on your Kubernetes cluster for that application (or microservice)."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 bg-[#161b22]"
          />
          <InnovationBox
            title="Control Access with Ease"
            desc="Provide developers, QA, or DevOps the level of access they need—read-only or full edit—without manually juggling cluster credentials."
            descClassName="text-text-secondary"
            className="col-span-12 bg-[#161b22]"
          />
        </Box>
      </Stack>
      <Stack className="w-full items-center px-5 pt-16 pb-11 md:p-0 md:pt-28 md:pb-36 md:max-w-[1300px] z-10">
        <TypoH2 className="text-center md:max-w-[1050px]">
          When to Use the Kubernetes Dashboard ?
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary mt-3 md:mt-8">
          Kubernetes Dashboard is built to empower modern DevOps teams and streamline developer
          workflows. By providing instant insights into Kubernetes resources, real-time logs, and
          direct container access—all under a unified, secure platform—you’ll drastically reduce the
          time spent coordinating with DevOps for basic tasks.
        </TypoP1>
        <Box className="w-full grid grid-cols-12 gap-3 md:gap-6 mt-3 md:mt-7">
          <InnovationBox
            title="Developer Self-Service"
            desc="Give developers controlled visibility into Kubernetes resources without handing out raw cluster credentials."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] "
          />
          <InnovationBox
            title="Rapid Iteration"
            desc="Teams building microservices can quickly debug or update their config for faster iteration cycles."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] "
          />
          <InnovationBox
            title="Centralized Control"
            desc="Keep track of changes and ensure your organization’s best practices are followed across all environments."
            descClassName="text-text-secondary"
            className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] "
          />
        </Box>
      </Stack>
      <Stack className="w-full items-center px-5 md:px-0 py-6 md:py-14 gap-2 md:gap-8 bg-[linear-gradient(132.98deg,_#0F0E97_-23.75%,_#310642_30.1%,_#010104_97.94%)]">
        <TypoH3 className="md:max-w-[1250px] text-center">
          Ready to unleash simpler Kubernetes management for your team?
        </TypoH3>
        <TypoP1 className="text-text-secondary text-center leading-[1.8]">
          Experience how IaC Workflows empower you to provision, update, and retire infrastructure
          with absolute confidence:
        </TypoP1>
        <Stack className="flex-row items-center gap-2 mt-3 md:mt-0">
          <GetStartedBtn>Get Started For Free</GetStartedBtn>
          <BookDemoBtn>Book Demo</BookDemoBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
