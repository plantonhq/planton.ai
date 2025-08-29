import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { PlantoraGridBoxes2, TypoH2, TypoP1 } from '@/components';

export const CookiecutterTemplates: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-8 pb-24">
      <Stack className="w-full px-8 gap-8 relative overflow-hidden max-w-[2050px]">
        <Box className="absolute w-[1200px] aspect-[1.10] -top-48 -left-56 bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] rounded-full blur-3xl z-10" />
        <Stack className="absolute top-32 left-48 z-10">
          <Stack className="gap-4 max-w-[730px]">
            <TypoH2>Bootstrapping Services with Cookiecutter Templates</TypoH2>
            <TypoP1 className="text-text-secondary">
              Kickstart new projects quickly using our cookiecutter templates. Select from a variety
              of languages and frameworks to bootstrap services, ensuring best practices are in
              place from the start and reducing setup time significantly.
            </TypoP1>
          </Stack>
        </Stack>
        <PlantoraGridBoxes2 />
      </Stack>
    </Stack>
  );
};
