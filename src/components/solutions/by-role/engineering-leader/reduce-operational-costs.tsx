import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const ReduceOperationalCosts: FC = () => {
  return (
    <Stack className="relative items-center pt-80 bg-[#00000066] ">
      <img src="/images/solutions/by-role/engineering-leader/bg-5.svg" className="" />
      <Stack className="gap-12 w-full max-w-[1450px] items-center text-center absolute top-24 left-1/2 transform -translate-x-1/2">
        <TypoH2 className="max-w-[1280px] ">
          Reduce Operational Costs with Efficient Resource Utilization
        </TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1500px]">
          Optimize your organization&apos;s spending by identifying and eliminating wasteful
          resource usage. Planton Cloud&apos;s transparent deployment tracking and resource
          monitoring enable engineering leaders to make data-driven decisions to reduce costs
          without compromising performance. Efficiently manage resources and budgets, ensuring
          optimal allocation across projects.
        </TypoP1>
        <img src="/images/solutions/by-role/engineering-leader/stack-job-details.svg" className="w-[1180px]" />
      </Stack>

      <Stack className="gap-12 w-full max-w-[1450px] items-center text-center absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-[calc(50%+600px)]">
        <TypoH2 className="max-w-[1280px] ">Streamline Onboarding and Skill Ramp-Up</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1500px]">
          Accelerate the onboarding process for new team members with Planton Cloud&apos;s intuitive
          platform. Reduce the learning curve with AI assistance, familiar tools, and centralized
          information. Enable new developers to become productive quickly, contributing to projects
          without delays.
        </TypoP1>
      </Stack>
      <Box className="relative -mt-24">
        <img
          src="/images/solutions/by-role/engineering-leader/stack-job-details.svg"
          className="relative w-[1180px] z-10"
        />
        <img
          src="/images/solutions/by-role/engineering-leader/bg-6.svg"
          className="absolute -top-44 mix-blend-lighten bg-black"
        />
      </Box>
    </Stack>
  );
};
