import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const JoinAThriving: FC = () => {
  return (
    <Stack className="w-full  items-center pb-24 bg-black">
      <Stack className="w-full overflow-hidden relative max-w-[1500px] flex-row items-center gap-14 z-10">
        <Stack className="gap-8 max-w-[700px] p-9 bg-gradient-to-tl from-[#351b74] to-[#a772d1] rounded-[48px] backdrop-blur-[91px] z-10">
          <TypoH2>Join a Thriving Community of Innovators</TypoH2>
          <TypoP1 className="text-text-secondary">
            Connect with other startup founders and developers in our active community. Share
            insights, learn best practices, and get support from like-minded professionals and the
            Planton Cloud team.
          </TypoP1>
        </Stack>
        <Stack className="w-full h-[700px] relative overflow-hidden pt-14 pl-14 bg-[#151617]/5 rounded-tl-[59px] border border-[#3c3c3c] backdrop-blur-[34px] z-10">
          <Box className="w-full h-full relative">
            <img
              src="/images/solutions/by-role/startup-founder/job-progress.svg"
              className="absolute left-0 top-0 "
            />
          </Box>
        </Stack>
        <img
          src="/images/solutions/by-role/startup-founder/surface.svg"
          className="absolute w-[2200px] origin-top-left rotate-[-30deg] bottom-0 transform translate-y-[calc(100%)] -z-0"
        />
      </Stack>
    </Stack>
  );
};
