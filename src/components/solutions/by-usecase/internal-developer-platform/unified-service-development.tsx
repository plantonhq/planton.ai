import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { PlantoraGridBoxes1, TypoH2, TypoP1 } from '@/components/common';

export const UnifiedServiceDevelopment: FC = () => {
  return (
    <Stack className="relative overflow-hidden w-full items-center bg-[#161A1F] py-12">
      <Box className="w-[1500px] aspect-[1.10] absolute left-1/2 top-0 transform -translate-x-[100%] -translate-y-[30%]  blur-3xl rounded-full bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] z-10" />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-1.svg"
        className="absolute top-[calc(0%+60px)] left-[calc(50%-1050px)]  z-10"
      />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-2.svg"
        className="absolute bottom-[calc(25%)] left-[calc(50%-940px)]  z-10"
      />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-3.svg"
        className="absolute bottom-[calc(5%)] left-[calc(50%-470px)]  z-10"
      />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-4.svg"
        className="absolute bottom-[calc(12%)] left-[calc(50%)] z-10"
      />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-5.svg"
        className="absolute bottom-[calc(5%)] right-[calc(50%-750px)] z-10"
      />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-6.svg"
        className="absolute top-[calc(25%)] right-[calc(50%-300px)] z-10"
      />
      <img
        src="/images/solutions/by-use-case/internal-developer-platform/grid-icon-7.svg"
        className="absolute top-[calc(5%)] right-[calc(50%-600px)] z-10"
      />
      <Stack className="w-full gap-8 relative overflow-hidden max-w-[1920px]">
        <Stack className="absolute top-32 left-48 z-10">
          <Stack className="gap-4 max-w-[730px]">
            <TypoH2>Unified Service Development</TypoH2>
            <TypoP1 className="text-text-secondary">
              Bootstrapping new services has never been easier. With PlantonCloud&apos;s Template
              Library, developers can quickly start new projects using pre-built cookiecutter
              templates. Customize your services with best practices baked in, ensuring consistency
              and efficiency across your organization.
            </TypoP1>
          </Stack>
        </Stack>
        <PlantoraGridBoxes1 />
      </Stack>
    </Stack>
  );
};
