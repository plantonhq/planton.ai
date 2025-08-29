import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const LeverageAI: FC = () => {
  return (
    <Stack className="relative items-center pt-16 bg-[#00000066] ">
      <Stack className="gap-12 w-full max-w-[1450px] items-center text-center">
        <TypoH2 className="max-w-[1280px] z-10">Leverage AI for Smarter Decision-Making</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1500px] z-10">
          Harness the power of AI to gain insights into your development and deployment processes.
          Planton Cloud&apos;s AI capabilities provide intelligent summaries, predictive analytics,
          and recommendations, helping engineering leaders make informed decisions that drive
          strategic advantages over competitors.
        </TypoP1>
        <img src="/images/solutions/by-role/engineering-leader/bg-7.svg" className="relative -mt-80 z-0" />
        <img
          src="/images/solutions/by-role/engineering-leader/stack-job-details.svg"
          className="-mt-[520px] backdrop-blur-sm  w-[1350px]"
        />
      </Stack>
    </Stack>
  );
};
