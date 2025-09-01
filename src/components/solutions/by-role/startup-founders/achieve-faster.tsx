import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const AchieveFaster: FC = () => {
  return (
    <Stack className="w-full items-center pt-24 bg-[radial-gradient(22.96%_34.96%_at_40.33%_50%,_#000000_0%,_#000000_100%)]">
      <Stack className="w-full relative max-w-[1500px] flex-row items-center gap-16">
        <Stack className="w-full h-[800px] relative overflow-hidden pt-14 pr-14 rounded-tr-[68px] bg-[#151617]/5 border border-[#3c3c3c] backdrop-blur-[43px] z-10">
          <Box className="w-full h-full relative">
            <img src="/images/solutions/by-role/startup-founder/chatbox-2.svg" className="absolute right-0 top-0 " />
          </Box>
        </Stack>
        <Stack className="gap-8 max-w-[700px] z-10">
          <TypoH2>Achieve Faster Time to Market</TypoH2>
          <TypoP1 className="text-text-secondary">
            In the fast-paced startup world, speed is everything. Planton Cloud streamlines your
            development pipeline, enabling rapid iteration and deployment. Get your product into
            customers&apos; hands faster, gather feedback, and iterate swiftly to stay ahead of the
            competition.
          </TypoP1>
        </Stack>
        <img src="/images/solutions/by-role/startup-founder/galaxy.svg" className="absolute -z-0" />
      </Stack>
    </Stack>
  );
};
