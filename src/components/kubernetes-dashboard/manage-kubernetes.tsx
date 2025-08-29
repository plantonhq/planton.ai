import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../common';

export const ManageKubernetes: FC = () => {
  return (
    <Stack className="items-center overflow-hidden bg-[linear-gradient(181.72deg,#000000_-1.82%,#0C009B65_36.38%,#430B9FAA_83.86%,#E57C00_149.19%)]">
      <Stack className="max-w-[1250px] text-center gap-8 pt-24">
        <TypoH2>View and Manage Kubernetes Resources</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[950px] self-center">
          Access detailed information about deployments, services, pods, and more related to your
          microservices. Whether you prefer CLI or web console interfaces, Planton Cloud provides an
          intuitive way to manage your Kubernetes resources.
        </TypoP1>
        <Box className="relative">
          <img src="/images/features/kubernetes-dashboard/resource-explorer.svg" />
          <img
            src="/images/features/kubernetes-dashboard/edit-resource.svg"
            className="absolute -right-4 bottom-0 z-10"
          />
          <Box className="absolute w-[218px] -right-48 -top-24 ">
            <TypoP1>Deployments</TypoP1>
            <img src="/images/features/kubernetes-dashboard/joiner-1.svg" className="" />
            <img
              src="/images/features/kubernetes-dashboard/code-deployment.svg"
              className="absolute top-6 -left-40"
            />
          </Box>
          <Box className="absolute w-[210px] -left-40 top-36 ">
            <TypoP1 className="text-left">Services</TypoP1>
            <img src="/images/features/kubernetes-dashboard/joiner-2.svg" className="" />
            <img
              src="/images/features/kubernetes-dashboard/browser-settings.svg"
              className="absolute top-48 -right-10"
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
