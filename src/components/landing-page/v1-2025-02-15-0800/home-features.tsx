import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1, Pill } from '@/components';

export const HomeFeatures: FC = () => {
  return (
    <Box className="relative items-center bg-black py-5 md:py-0 md:pt-14 md:pb-16">
      <Box className="hidden md:block absolute top-0 z-0 w-full h-[333px] bg-[linear-gradient(180deg,_#47A7A4_-152.88%,_rgba(80,_52,_185,_0)_84.98%)]" />
      <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl mx-auto z-10 relative">
        <Stack className="items-center text-center gap-4 md:gap-5">
          <Pill>Features</Pill>
          <TypoH2 className="md:max-w-6xl">Empower Your Team with Self-Service DevOps</TypoH2>
        </Stack>
        <Box className="mt-4 md:mt-14 relative overflow-hidden border border-[#3D3D3D] border-b-0 rounded-t-xl md:rounded-t-[42px]">
          <Box className="w-[200px] md:w-[725px] aspect-square absolute rounded-full left-1/2 top-0 transform -translate-x-1/2 filter blur-3xl bg-[linear-gradient(307deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
          <Box className="relative pt-7 md:pt-20 px-4 md:px-16 backdrop-blur-sm rounded-t-xl md:rounded-t-[42px] bg-[#1E222875]">
            <img src="/images/landing-page/bg-1-small.svg" className="w-full md:hidden relative" />
            <img src="/images/landing-page/bg-1.svg" className="w-full hidden md:block relative" />
          </Box>
        </Box>
      </Box>
      <Stack className="relative items-center text-center border-t border-t-[#3D3D3D] ">
        <Box className="w-[370px] md:w-[1012px] aspect-square absolute -top-[50%] rounded-full blur-[150px] z-0 bg-[linear-gradient(217deg,_rgba(70,_170,_165,_0.58)_-1.74%,_rgba(107,_86,_162,_0.58)_53.46%,_rgba(35,_13,_166,_0.58)_117.61%)]" />
        <TypoP1
          component="span"
          className="max-w-[calc(100vw-40px)] md:max-w-7xl border-x border-x-[#3D3D3D] py-8 md:py-20 px-4 md:px-14 z-10"
        >
          Unleash DevOps autonomy{' '}
          <TypoP1 component="span" className="text-text-secondary">
            with on-demand access to ready-to-deploy infrastructure components and IaC modules.
            PlantonCloud’s Self-Service DevOps accelerates provisioning, standardizes deployments,
            and frees developers from repetitive tasks—so you can focus on what matters: delivering
            value to your customers.
          </TypoP1>
        </TypoP1>
      </Stack>
      <Stack className="items-center text-center border-t border-t-[#3D3D3D] ">
        <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl relative overflow-hidden border-x border-x-[#3D3D3D]">
          <Box className="w-[200px] md:w-[725px] aspect-square absolute rounded-full left-1/2 top-0 transform -translate-x-1/2 filter blur-3xl bg-[linear-gradient(307deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
          <Box className="relative pt-7 md:pt-20 px-4 md:px-16 border border-[#3D3D3D] backdrop-blur-sm rounded-t-xl md:rounded-t-[42px] bg-[#1E222875]">
            <img src="/images/landing-page/bg-2-small.svg" className="md:hidden w-full relative" />
            <img src="/images/landing-page/bg-2.svg" className="hidden md:block w-full relative" />
          </Box>
        </Box>
      </Stack>
      <Stack className="items-center text-center border-t border-t-[#3D3D3D] ">
        <TypoP1 className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl border-x border-x-[#3D3D3D] py-6 md:py-20 md:px-14 text-text-secondary">
          Reinforce consistency and best practices with our IaC Module Registry. Quickly find and
          integrate vetted Terraform and Pulumi modules, ensuring secure, repeatable infrastructure
          across AWS, Azure, GCP, and more. Say goodbye to bottlenecks and hello to faster,
          streamlined cloud operations.
        </TypoP1>
      </Stack>
      <Box className="border-y border-y-[#3D3D3D]">
        <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl mx-auto grid grid-cols-2 border-x border-[#3D3D3D]">
          <TypoP1
            component="span"
            className="col-span-2 md:col-span-1 border-b md:border-b-0 md:border-r border-[#3D3D3D] p-5 md:p-0 md:px-12 md:py-28"
          >
            Built-In Best Practices:{' '}
            <TypoP1 component="span" className="text-text-secondary">
              Utilize modules and components maintained by PlantonCloud for security and
              consistency.
            </TypoP1>
          </TypoP1>
          <Box className="col-span-2 md:col-span-1 grid grid-cols-subgrid">
            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-r md:border-r-0 md:border-b border-[#3D3D3D]"
            >
              Faster Provisioning:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Deploy resources with a few clicks, cutting down wait times.
              </TypoP1>
            </TypoP1>
            <TypoP1 component="span" className="p-5 md:p-0 md:px-10 md:py-11">
              Enhanced Productivity:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Streamline workflows and let DevOps teams focus on innovation.
              </TypoP1>
            </TypoP1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
