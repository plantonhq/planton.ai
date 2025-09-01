import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const Day2Operations: FC = () => {
  return (
    <Box className="relative overflow-hidden">
      <Stack className="items-center bg-[linear-gradient(123.43deg,#010205_52.33%,#05283F_160.43%)] pt-60 pb-28">
        <Stack className="items-center flex-row gap-12 rounded-3xl bg-[linear-gradient(318.8deg,#062B45_-19.54%,#00000000_65.63%)]">
          <Box className="relative">
            <img
              src={'/images/features/kubernetes-dashboard/day2-operation.gif'}
              className="relative z-10"
            />
            <img
              src={'/images/features/kubernetes-dashboard/resource-header.svg'}
              className="absolute top-20 left-[calc(50%-50px)] transform -translate-x-1/2"
            />
            <img
              src={'/images/features/kubernetes-dashboard/resource-header.svg'}
              className="absolute top-36 -right-12 blur-[1px]"
            />
            <img
              src={'/images/features/kubernetes-dashboard/resource-header.svg'}
              className="absolute top-40 left-[calc(50%-150px)] transform -translate-x-1/2"
            />
            <img
              src={'/images/features/kubernetes-dashboard/resource-header.svg'}
              className="absolute top-60 left-[calc(50%-180px)] transform -translate-x-1/2 blur-[1px]"
            />
            <img
              src={'/images/features/kubernetes-dashboard/resource-header.svg'}
              className="absolute -bottom-10 left-[calc(50%-150px)] transform -translate-x-1/2 z-10"
            />
          </Box>
          <Stack className="gap-4 max-w-[625px]">
            <Typography className="text-[40px] font-semibold leading-[48px]">
              Simplified Kubernetes Day 2 Operations
            </Typography>
            <TypoP1 className="text-text-secondary">
              Discover how Planton Cloud transforms the way developers handle post-deployment
              challenges in Kubernetes environments. We simplify operational tasks so you can focus
              on building great applications without getting bogged down by infrastructure
              complexities.
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="relative items-center bg-[linear-gradient(123.57deg,#000000_37.52%,#052B44_84.45%)] py-48">
        <Stack className="items-center flex-row gap-12 rounded-xl bg-[linear-gradient(98.25deg,#000000_36.99%,#0099FF00_320.84%)]">
          <Stack className="gap-4 max-w-[700px] pl-8 z-10">
            <TypoH3>No Need for Direct Cluster Access</TypoH3>
            <TypoP1 className="text-text-secondary">
              Eliminate the risks and complexities of providing developers with Kubernetes cluster
              credentials. Planton Cloud reduces security vulnerabilities by managing access
              centrally, so your team can work efficiently without compromising safety.
            </TypoP1>
          </Stack>
          <Box className="relative pt-10">
            <img src={'/images/features/kubernetes-dashboard/kccred.svg'} />
            <Stack className="absolute top-28 left-20 gap-2 w-[500px]">
              <img src={'/images/features/kubernetes-dashboard/detail-section.svg'} className="w-full" />
              <img src={'/images/features/kubernetes-dashboard/detail-section.svg'} className="w-full" />
            </Stack>
          </Box>
        </Stack>
        <Box className="w-[1200px] aspect-[1.2] absolute bottom-0 left-[calc(50%-650px)] transform -translate-x-1/2  bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] rounded-full blur-[200px]" />
      </Stack>
      <Stack className="relative bg-[linear-gradient(121.04deg,#000000_54.74%,#5FED837F_244.29%)] ">
        <img
          src="/images/features/kubernetes-dashboard/pulumi-module-registry.svg"
          className="w-full max-w-[1350px] pt-8 ml-[calc(50%-100px)] transorm -translate-x-1/2"
        />
        <Stack className="absolute left-[calc(50%+200px)] top-[calc(50%+150px)] transform -translate-y-1/2 p-8 max-w-[800px] bg-[linear-gradient(269.33deg,#16311D_-5.42%,#000000_97.61%)] rounded-xl items-center gap-4">
          <TypoH3>Frictionless and Secure Access with Planton Cloud</TypoH3>
          <TypoP1 className="text-text-secondary">
            Planton Cloud offers secure, authorized access to Kubernetes resources—no direct cluster
            credentials or complex setups required. Authenticate seamlessly through our platform,
            which acts as an IAM wrapper over Kubernetes, enforcing fine-grained permissions.
          </TypoP1>
        </Stack>
        <Box className="w-[1200px] aspect-[1.2] absolute -bottom-60 left-[calc(50%-950px)] transform -translate-x-1/2  bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] rounded-full blur-[200px]" />
        <img
          src="/images/features/kubernetes-dashboard/shield.svg"
          className="absolute top-16 left-[calc(50%+600px)] transform -translate-x-1/2"
        />
        <img
          src="/images/features/kubernetes-dashboard/shield-2.svg"
          className="absolute bottom-0 left-[calc(50%+600px)] transform -translate-x-1/2 translate-y-[65%]"
        />
        <img
          src="/images/features/kubernetes-dashboard/shield-3.svg"
          className="absolute w-[222px] -bottom-10 left-[calc(50%-750px)] transform -translate-x-1/2"
        />
      </Stack>
    </Box>
  );
};
