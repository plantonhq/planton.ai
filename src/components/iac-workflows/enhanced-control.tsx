import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const EnhancedControl: FC = () => {
  return (
    <Stack className="relative items-center py-48 bg-[linear-gradient(121.04deg,_#000000_54.74%,_#5FED83_244.29%)]">
      <Stack className="flex-row w-[1300px] relative items-center z-10">
        <img src="/images/features/iac-workflows/pulumi-module-registry-2.svg" className="z-10" />
        <Stack className="absolute right-20 gap-4 items-center max-w-[700px] z-10">
          <TypoH3>Enhanced Control with Custom Stack Job Runners</TypoH3>
          <TypoP1 className="text-text-secondary" component="span">
            Take control of your deployment infrastructure with custom
            <TypoP1 className="text-white" component="span">
              Stack Job Runners.
            </TypoP1>{' '}
            Deploy and manage your own runners for greater compliance, resource optimization, and
            adherence to organizational policies.
          </TypoP1>
        </Stack>
        <Box className="w-full h-full absolute bg-[linear-gradient(90deg,_#000000_-1.07%,_#000000_77.41%)] z-0" />
        <img
          src="/images/features/kubernetes-dashboard/shield.svg"
          className="absolute w-[290px] top-0 right-0 transform translate-x-[90%] -translate-y-[90%]"
        />
        <img
          src="/images/features/kubernetes-dashboard/shield-2.svg"
          className="absolute bottom-0 right-0 transform translate-x-[60%] translate-y-[52%]"
        />
        <img
          src="/images/features/kubernetes-dashboard/shield-3.svg"
          className="absolute w-[222px] bottom-0 left-1/2 transform -translate-x-[70%] translate-y-[70%]"
        />
      </Stack>
      <Box className="w-[1200px] aspect-[1.10] absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-[110%] rounded-full blur-3xl bg-[linear-gradient(91.52deg,_#000000_58.27%,_#646464_229.43%,_#666666_233.56%)]" />
    </Stack>
  );
};
