import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const ScaleLimitlessly: FC = () => {
  return (
    <Stack className="items-center overflow-hidden bg-black py-24">
      <Stack className="relative w-full max-w-[2000px] items-center flex-row justify-start gap-12">
        <Box className="relative">
          <img src="/images/solutions/by-size/growing-teams/dashboard-2.svg" className="" />
          <img
            src="/images/solutions/by-size/growing-teams/padlock.svg"
            className="w-[250px] aspect-square absolute -bottom-20 left-[calc(20%)] "
          />
        </Box>
        <Stack className="relative gap-8 max-w-[750px]">
          <TypoH2 className="">Scale Limitlessly with Confidence</TypoH2>
          <TypoP1 className="text-text-secondary">
            As your application demands grow, Planton Cloud scales with you. Deploy unlimited
            resources and services to meet your evolving needs. With effortless CI/CD pipeline
            setups, your development teams can deploy frequently and reliably, accelerating
            innovation and reducing time-to-market.
          </TypoP1>
          <img
            src="/images/solutions/by-size/growing-teams/padlock-4.svg"
            className="w-[70px] aspect-square absolute -top-20 -left-6 transform -translate-x-1/2"
          />
        </Stack>
        <img
          src="/images/solutions/by-size/growing-teams/padlock-3.svg"
          className="w-[250px] aspect-square absolute top-20 -right-10"
        />
        <img
          src="/images/solutions/by-size/growing-teams/padlock-2.svg"
          className="w-[250px] aspect-square absolute bottom-0 right-0"
        />
      </Stack>
    </Stack>
  );
};
