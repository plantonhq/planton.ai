import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { PlantoraGridBoxes2, TypoH2, TypoP1 } from '@/components';

export const RapidOnboarding: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-8">
      <Stack className="w-full px-8 gap-8 relative overflow-hidden max-w-[2050px]">
        <Box className="absolute w-[1200px] aspect-[1.10] -top-48 -left-56 bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] rounded-full blur-3xl z-10" />
        <Stack className="absolute top-32 left-48 z-10">
          <Stack className="gap-4 max-w-[740px]">
            <TypoH2>Rapid Onboarding with Service Hub</TypoH2>
            <TypoP1 className="text-text-secondary">
              Accelerate team productivity with our Service Hub featuring cookiecutter templates.
              Quickly bootstrap new projects in various languages and frameworks, allowing new team
              members and freelancers to contribute immediately.
            </TypoP1>
          </Stack>
        </Stack>
        <PlantoraGridBoxes2 />
      </Stack>
    </Stack>
  );
};
