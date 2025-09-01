import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { PlantoraGridBoxes1, TypoH3, TypoP1 } from '../common';

export const ExploreandManageInfrastructure: FC = () => {
  return (
    <Stack className="w-full items-center bg-[#161A1F] py-12">
      <Stack className="w-full gap-8 relative overflow-hidden max-w-[2050px]">
        <Box className="absolute w-[900px] aspect-[1.10] bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] rounded-full -top-24 blur-3xl z-10" />
        <Stack className="absolute top-32 left-48 z-10">
          <Stack className="gap-4 max-w-[730px]">
            <TypoH3>Explore and Manage Infrastructure Conversationally</TypoH3>
            <TypoP1 className="text-text-secondary">
              Why reinvent the wheel? Our extensive library of cookiecutter templates lets you
              bootstrap new microservices instantly. Choose from a variety of languages and
              frameworks, and start building immediately with best practices baked in.
            </TypoP1>
          </Stack>
        </Stack>
        <PlantoraGridBoxes1 />
      </Stack>
    </Stack>
  );
};
