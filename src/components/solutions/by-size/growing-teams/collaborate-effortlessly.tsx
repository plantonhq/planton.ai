import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../../common';

export const CollaborateEffortlessly: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-24 bg-black">
      <Stack className="max-w-[1450px] items-center text-center gap-8 z-10">
        <TypoH2>Collaborate Effortlessly with Teams and Sub-Teams</TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          As your organization grows, seamless collaboration becomes crucial. Planton Cloud enables
          you to create teams and sub-teams that mirror your organizational structure. With
          role-based access control, manage permissions effortlessly—new team members automatically
          inherit the appropriate access levels. This streamlined onboarding enhances productivity
          and keeps everyone aligned.
        </TypoP1>

        <img
          src="/images/solutions/by-size/growing-teams/saturn-planet.svg"
          className="absolute left-[calc(50%-900px)]  bottom-0 w-[415px]"
        />
        <img
          src="/images/solutions/by-size/growing-teams/saturn-planet.svg"
          className="absolute left-[calc(50%-900px)]  bottom-0 w-[415px] rotate-[-15deg] blur-[334.24px]"
        />
        <Box className="relative w-[calc(60%)] aspect-square mt-16">
          <img src="/images/solutions/by-size/growing-teams/ellipse1.svg" className="w-full h-full" />
          <img
            src="/images/solutions/by-size/growing-teams/group2-cloud.svg"
            className="w-[calc(16%)] absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2"
          />
          <img
            src="/images/solutions/by-size/growing-teams/group3-cloud.svg"
            className="w-[calc(16%)] absolute bottom-0 translate-y-1/2 left-1/2 transform -translate-x-1/2"
          />
          <img
            src="/images/solutions/by-size/growing-teams/group2-cloud.svg"
            className="w-[calc(16%)] absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2"
          />
          <img
            src="/images/solutions/by-size/growing-teams/group3-cloud.svg"
            className="w-[calc(16%)] absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-1/2"
          />
          <img
            src="/images/solutions/by-size/growing-teams/planton-cloud.svg"
            className="w-[calc(16%)] absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
