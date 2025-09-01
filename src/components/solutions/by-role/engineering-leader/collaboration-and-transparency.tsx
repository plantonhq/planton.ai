import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const CollaborationAndTransparency: FC = () => {
  return (
    <Stack className="relative items-center pt-40 bg-[#00000066] ">
      <img
        src="/images/solutions/by-role/engineering-leader/bg-4.svg"
        className="absolute left-1/2 transform -translate-x-1/2 top-0"
      />
      <Stack className="w-full max-w-[1920px] z-10 ml-20">
        <Stack className="w-full flex-row self-start gap-12">
          <img src="/images/solutions/by-role/engineering-leader/dashboard-1.svg" className="backdrop-blur-[20px]" />
          <Stack className="gap-4 max-w-[750px] pt-10">
            <TypoH2>Enhance Team Collaboration and Transparency</TypoH2>
            <TypoP1 className="text-text-secondary">
              Planton Cloud provides a unified platform that brings together developers, operations,
              and engineering leaders. Features like Auditable Intelligence and Service Hub offer
              complete visibility into deployments, configurations, and team activities. Facilitate
              better communication and collaboration across teams, leading to improved productivity
              and reduced friction.
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
