import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const EnhanceSecurity: FC = () => {
  return (
    <Stack className="items-center relative bg-black pt-24">
      <Stack className="w-full items-center gap-14 ">
        <Stack className="gap-8 text-center max-w-[1250px]">
          <TypoH2>Enhance Security Throughout Your Organization</TypoH2>
          <TypoP1 className="text-text-secondary">
            Security is integral for growing teams. Planton Cloud provides robust features like
            encrypted data storage, advanced secrets management, and adherence to network security
            best practices. Our IAM ensures only authorized users can make changes, safeguarding
            your infrastructure.
          </TypoP1>
        </Stack>
        <Stack className="w-full max-w-[1600px] h-[800px] relative overflow-hidden items-center p-8 rounded-t-[54.35px] border border-[#5c80f0] backdrop-blur-[12px] bg-gradient-to-l from-[#5c80f0] to-[#1e2228] ">
          <Box className="w-[80%] h-full relative">
            <img
              src="/images/solutions/by-size/growing-teams/stack-job-progress.svg"
              className="absolute left-1/2 transform -translate-x-1/2 top-20"
            />
            <img
              src="/images/solutions/by-size/growing-teams/lock-2.svg"
              className="absolute w-[270px] transform left-0 -translate-x-1/2 bottom-0  translate-y-[calc(25%)]"
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
