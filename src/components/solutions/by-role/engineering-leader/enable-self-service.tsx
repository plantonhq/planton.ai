import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const EnableSelfService: FC = () => {
  return (
    <Stack className="relative items-center pt-44 bg-[#00000066]">
      <img src="/images/solutions/by-role/engineering-leader/bg-9.svg" className="absolute top-0 z-0" />
      <Stack className="gap-12 w-full max-w-[1450px] items-center text-center z-10">
        <TypoH2 className="max-w-[1280px] z-10">Enable Self-Service DevOps for Your Teams</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1500px] z-10">
          Empower your teams with self-service capabilities, reducing dependencies and bottlenecks.
          With Planton Cloud, developers can deploy and manage applications autonomously within the
          guardrails set by engineering leaders. This autonomy boosts morale and productivity while
          leaders maintain control and oversight.
        </TypoP1>
        <img
          src="/images/solutions/by-role/engineering-leader/stack-job-details.svg"
          className="backdrop-blur-sm  w-[1350px]"
        />
      </Stack>
    </Stack>
  );
};
