import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2 } from '@/components/common';
import { DeployBox } from './deploy-services';

export const IngressSetup: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-24 bg-[#010205]">
      <Box className="absolute w-[2500px] aspect-square top-0 left-1/2 transform -translate-x-[50%] -translate-y-[20%] z-0">
        <Box className="relative w-full h-full">
          <Box className="w-[2350px] aspect-[1.12] absolute left-1/2 bottom-0 transform -translate-x-[30%] -translate-y-[90%] opacity-10 rounded-full blur-[10px] bg-[linear-gradient(0deg,_#9747FF_9.78%,_#03A587_47.65%)] z-30" />
          <Box className="w-[2350px] aspect-[1.12] absolute left-1/2 bottom-0 transform -translate-x-[45%] -translate-y-[70%] opacity-10 rounded-full blur-[10px] bg-[linear-gradient(0deg,_#9747FF_33.92%,_#03A587_99.65%)] z-20" />
          <Box className="w-[2350px] aspect-[1.12] absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[55%] opacity-10 rounded-full blur-[10px] bg-[linear-gradient(0deg,_#9747FF_21.26%,_#03A587_57.53%)] z-10" />
        </Box>
      </Box>
      <Stack className="w-full max-w-[1300px] gap-16">
        <TypoH2 className="text-center">Ingress Setup</TypoH2>
        <Box className="grid grid-cols-2 gap-6 mt-10">
          <DeployBox
            title="Streamlined Ingress Management with Planton Cloud"
            subTitle="Planton Cloud automates ingress setup by managing DNS, network access, and Pulumi-based logic. Developers can secure services with a domain name, avoiding networking complexities."
            url=""
          />
          <DeployBox
            title="Customizable Ingress with Automated SSL Management."
            subTitle="Planton Cloud enables custom ingress setups with Pulumi and automates SSL management using Cert Manager and Istio, enhancing security effortlessly."
            url=""
          />
        </Box>
        <Stack className="items-center p-8 pb-0 bg-neutral-900/25 rounded-2xl border border-[#414141] backdrop-blur-[41.12px] ">
          <img src="/images/features/pulumi-module-registry-2.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
