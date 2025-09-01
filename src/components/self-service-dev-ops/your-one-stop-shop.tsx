'use client';

import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Slider, TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { IInnovationBox, InnovationBox } from '@/components/solutions';

const moduleInformations: IInnovationBox[] = [
  {
    title: 'Description & Purpose',
    desc: 'Why the module exists and what problem it solves',
    className:
      '!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
    descClassName: 'text-text-secondary md:text-white md:text-2xl md:font-normal md:leading-[38px]',
    iconSrc: '/images/features/self-service-devops/grid-icon-1.svg',
    iconBorderBg: 'linear-gradient(226deg, #6665D2 -10.13%, #F26E7E 111.37%);',
  },
  {
    title: 'Examples Tab',
    desc: 'Sample input forms or CLI commands for easy adoption',
    className:
      '!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
    descClassName: 'text-text-secondary md:text-white md:text-2xl md:font-normal md:leading-[38px]',
    iconSrc: '/images/features/self-service-devops/grid-icon-2.svg',
    iconBorderBg: 'linear-gradient(226deg, #6665D2 -10.13%, #F26E7E 111.37%);',
  },
  {
    title: 'API Spec, Stack Input & Stack Output',
    desc: 'Proto file definitions that detail how to integrate the module with your services',
    className:
      '!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
    descClassName: 'text-text-secondary md:text-white md:text-2xl md:font-normal md:leading-[38px]',
    iconSrc: '/images/features/self-service-devops/grid-icon-3.svg',
    iconBorderBg: 'linear-gradient(226deg, #6665D2 -10.13%, #F26E7E 111.37%);',
  },
  {
    title: 'API Docs & Git Links',
    desc: 'Direct links to complete reference documentation and the module’s Git repository',
    className:
      '!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
    descClassName: 'text-text-secondary md:text-white md:text-2xl md:font-normal md:leading-[38px]',
    iconSrc: '/images/features/self-service-devops/grid-icon-4.svg',
    iconBorderBg: 'linear-gradient(226deg, #6665D2 -10.13%, #F26E7E 111.37%);',
  },
];

export const YourOneStopShop: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center p-5 md:p-0 bg-black">
      <img
        src="/images/features/self-service-devops/torus.png"
        className="w-[1000px] rotate-45 absolute top-0 transform -translate-x-[80%] -translate-y-[40%] z-0 blur-[350px]"
      />
      <img
        src="/images/features/self-service-devops/torus.png"
        className="md:hidden w-[500px] absolute left-0 top-[50%] transform z-0 blur-[120px]"
      />
      <Stack className="w-full items-center z-10">
        <Stack className="md:max-w-[1580px] items-center text-center gap-2 md:gap-6 md:pt-3">
          <TypoH2>The Deployment Store: Your One-Stop Shop for Cloud Components</TypoH2>
          <TypoP1 className="md:max-w-[1250px] text-center text-text-secondary">
            “Easily Discover and Deploy Cloud Components from a Central Marketplace”
          </TypoP1>
          <TypoP1 className="md:max-w-[1250px] text-center text-text-secondary">
            The Deployment Store is a marketplace of ready-to-use infrastructure components for AWS,
            Microsoft Azure, Google Cloud, Kubernetes, and more. From RDS databases to Kubernetes
            clusters, everything you need is at your fingertips.
          </TypoP1>
          <img src="/images/features/self-service-devops/bg-3.svg" className="mt-1 md:mt-2" />
        </Stack>
        <Stack className="w-full relative items-center pt-5 md:pt-28">
          <img
            src="/images/features/self-service-devops/bg-4.svg"
            className="z-0 absolute top-20 md:top-0 transform -translate-y-[18%]"
          />
          <Stack className="md:max-w-[1350px] items-center gap-2 md:gap-6 z-10">
            <TypoH3 className="text-center">One-Click Deploy</TypoH3>
            <TypoP1 className="text-center text-text-secondary">
              Select your desired component, review its details, and click “Deploy.” You’ll be
              prompted to fill out a simple configuration form—no manual scripts required. Whether
              it’s an RDS cluster or a new storage account, the platform takes care of provisioning
              so you can move on to coding and innovation.
            </TypoP1>
            <img src="/images/features/self-service-devops/bg-5.svg" className="mt-2" />
            <TypoH3 className="self-start mt-2">Key Benefits:</TypoH3>
            <Box className="w-full grid grid-cols-12 gap-6 mt-2">
              <InnovationBox
                title="Reduced Complexity"
                desc="Predefined configurations ensure stable, repeatable deployments."
                descClassName="text-text-secondary"
                className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="Faster Time-to-Value"
                desc="Eliminate manual steps and quickly spin up resources."
                descClassName="text-text-secondary"
                className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="Built-In Documentation"
                desc="Each component card includes usage details, saving you from scouring external docs."
                descClassName="text-text-secondary"
                className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
            </Box>
          </Stack>
        </Stack>
        <Stack className="w-full md:max-w-[1580px] text-center items-center gap-3 md:gap-6 pt-5 md:pt-60">
          <TypoH2>IaC Module Registry: Centralized Modules for Consistent Infrastructure</TypoH2>
          <TypoP1 className="text-center text-text-secondary">
            “Leverage Vetted Terraform and Pulumi Modules for Seamless Cloud Automation”
          </TypoP1>
        </Stack>
        <Stack className="w-full relative items-center">
          <img
            src="/images/features/self-service-devops/bg-7.svg"
            className="hidden md:block absolute z-0"
          />
          <img
            src="/images/features/self-service-devops/bg-7-small.svg"
            className="w-full md:hidden absolute z-0"
          />
          <Stack className="w-full md:max-w-[1350px] items-center gap-3 md:gap-4 pt-6 md:pt-16 z-10">
            <TypoH3>Central Repository for IaC</TypoH3>
            <TypoP1 className="text-center text-text-secondary">
              The IaC Module Registry is where your team discovers, reuses, and collaborates on
              Terraform and Pulumi modules. Whether you’re spinning up an AWS DynamoDB table or
              configuring a Kubernetes cluster, you’ll find a curated selection of modules with all
              the details and documentation you need.
            </TypoP1>
            <img
              src="/images/features/self-service-devops/bg-6.svg"
              className="backdrop-blur-md mt-3 md:mt-4"
            />
          </Stack>
          <Stack className="w-full md:max-w-[1350px] items-center gap-3 pt-10 md:pt-28 z-10">
            <TypoH2 className="md:hidden text-center">Detailed Module Information</TypoH2>
            <TypoH3 className="hidden md:block text-center">Detailed Module Information</TypoH3>
            <TypoP1 className="text-center text-text-secondary">
              Click on any module card to see an overview, examples, API specifications, and stack
              input/output definitions—all in one place. Each module page includes:
            </TypoP1>
            <Box className="md:hidden max-w-full mt-2">
              <Slider
                items={moduleInformations.map((item, index) => (
                  <InnovationBox key={index} {...item} />
                ))}
              />
            </Box>
            <Box className="hidden md:grid w-full grid-cols-2 gap-6 md:mt-5">
              {moduleInformations.map((item, index) => (
                <InnovationBox key={index} {...item} />
              ))}
            </Box>
            <img src="/images/features/self-service-devops/bg-8.svg" className="mt-2 md:mt-5" />
          </Stack>
          <Stack className="w-full md:max-w-[1350px] items-center gap-2 md:gap-6 pt-5 md:pt-28 z-10">
            <TypoH3 className="hidden md:block text-center">Filters and Maintainer Badges</TypoH3>
            <TypoH2 className="md:hidden text-center">Filters and Maintainer Badges</TypoH2>
            <TypoP1 className="text-center text-text-secondary">Easily Filter modules by:</TypoP1>
            <TypoP1 className="text-center text-text-secondary">
              A subtle “P” badge highlights official, platform-maintained modules—guaranteeing
              high-quality code and best-practice configurations for everyone to use.
            </TypoP1>
            <Box className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-11 mt-3 md:mt-0">
              <img
                src="/images/features/self-service-devops/bg-9-small.svg"
                className="w-full md:hidden"
              />
              <img
                src="/images/features/self-service-devops/bg-9.svg"
                className="w-full hidden md:block"
              />
              <Stack className="col-span-2 mt-2 md:mt-0 gap-2 justify-center">
                <img src="/images/features/self-service-devops/bg-10.svg" className="" />
                <img src="/images/features/self-service-devops/bg-11.svg" className="" />
              </Stack>
            </Box>
          </Stack>
          <Stack className="w-full md:max-w-[1350px] items-center gap-3 pt-5 md:pt-28 z-10">
            <TypoH2 className="md:hidden text-center">
              How Self-Service DevOps Transforms Your Organization
            </TypoH2>
            <TypoH3 className="hidden md:block text-center">
              How Self-Service DevOps Transforms Your Organization
            </TypoH3>
            <TypoP1 className="text-center text-text-secondary">
              With PlantonCloud’s Deployment Store and IaC Module Registry, teams gain
            </TypoP1>
            <Box className="w-full grid grid-cols-2 gap-3 md:gap-6 mt-2 md:mt-5">
              <InnovationBox
                title=""
                desc="Standardized secure Deployments aligned with best practices"
                className="!bg-[url('/')] bg-[#161B22]"
                descClassName="text-text-secondary"
              />
              <InnovationBox
                title=""
                desc="Immediate Access to preconfigured, trusted modules and components"
                className="!bg-[url('/')] bg-[#161B22]"
                descClassName="text-text-secondary"
              />
              <InnovationBox
                title=""
                desc="Reduced Operational Bottlenecks, freeing up DevOps personnel"
                className="!bg-[url('/')] bg-[#161B22]"
                descClassName="text-text-secondary"
              />
              <InnovationBox
                title=""
                desc="Accelerated Delivery Cycles, letting you focus on product innovation"
                className="!bg-[url('/')] bg-[#161B22]"
                descClassName="text-text-secondary"
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
